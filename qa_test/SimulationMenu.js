export class SimulationMenu {
    constructor() {
        this.gui = null;
        this.mapData = null;
        this.map = null;
        this.mapContainer = null;
        this.menu = null;
        this.setting = null;

        this.originPoi = null;
        this.destinationPoi = null;

        this.naviOption = null;
        this.defaultLineOption = null;
        this.originMarkerOption = null;
        this.destinationMarkerOptions = null;
        this.destinationLineOptions = null;
        this.animOption = null;

    }
    removeMenu() {
        if (this.menu) {
            this.gui.removeFolder(this.menu);
            this.menu = null;
        }
    }
    async init(gui, mapData, map, mapContainer) {
        this.gui = gui;
        this.mapData = mapData;
        this.map = map;
        this.mapContainer = mapContainer;
        this.menu = this.gui.addFolder("Simulation Menu");
        this.originPoi = this.initPoiSetting("origin");
        this.destinationPoi = this.initPoiSetting("destination");
        this.setting = this.initSetting(); 
        this.initNaviOptions();
        return this.menu;
    }
    initPoiSetting(menuName) {
        let poiSetting = null;
        const changeFloor = (value) => {
            const currentFloor = value;
            const poiList = this.mapData.dataPoi.getPois().reduce((result, cur) => {
                    if (currentFloor == cur.floorId) return {...result, [cur.title]: cur.id};
                    else return result;
                },{"": ""});
            poiSetting = poiSetting.options(poiList);
        };

        const menu = this.menu.addFolder(menuName);
        menu.open();

        const floorSetting = this.mapData.dataFloor.getFloors().reduce((prev, cur) => {
                return {...prev, [cur.name[0].text]: cur.id};
            },{"not defined": ""});

        const floor = this.mapData.dataFloor.getFloors()[0].id;
        let poisSetting = this.mapData.dataPoi.getPois().reduce((result, cur) => {
                if (floor == cur.floorId) return {...result, [cur.title]: cur.id};
                else return result;
            },{"": ""});

        const setting = {
            floor: this.mapData.dataFloor.getFloors()[0].id,
            poi: this.mapData.dataPoi.find(floor, {type: "floorId"})[0].id,
        };

        menu.add(setting, "floor", floorSetting).onChange(changeFloor);
        poiSetting = menu.add(setting, "poi", poisSetting);
        return setting;
    }
    initSetting() {
        const setting = {
            type: "recommendation",
            set: this.set.bind(this),
            clear: this.clear.bind(this),
            start: this.start.bind(this),
            stop: this.stop.bind(this),
        };

        const menu = this.menu; 
        menu.add(setting, "type", ["recommendation", "stairs", "escalator", "elevator"]);
        menu.add(setting, "set");
        menu.add(setting, "clear");
        menu.add(setting, "start");
        menu.add(setting, "stop");

        return setting; 
    }
    async set() {
        const option = {
            origin: {
                poiId: this.originPoi.poi,
                floorId: this.originPoi.floor,
            },
            destination: {
                poiId: this.destinationPoi.poi,
                floorId: this.destinationPoi.floor,
            },
            type: this.setting.type,
        };
        console.log(option);
        const naviResponse = await this.mapData.getRoute(option);
        console.log(naviResponse);
        if (naviResponse.totalDistance === 0) {
            alert("경로가 존재하지 않습니다!");
            return;
        }
        let naviOption = {};
        naviOption = this.naviOption; 
        naviOption.origin={};
        naviOption.destination={};
        console.log(naviOption);

        naviOption.defaultLineOption =  this.defaultLineOption;
        naviOption.origin.markerOptions =  this.originMarkerOptions;
        naviOption.destination.markerOptions = this.destinationMarkerOptions;
        naviOption.destination.lineOptions =  this.destinationLineOptions;
        console.log(naviOption);
        await this.map.routeSimulation.set(naviResponse, naviOption);

    }

    clear() {
        this.map.routeSimulation.clear();
    }
    start(value) {
        const animSetting = this.animSetting;
        let animOption = Object.assign({}, this.animOption);
        console.log(animOption);
        this.map.routeSimulation.start(animOption);
    }

    stop(value) {
        this.map.routeSimulation.stop();
    }


    initNaviOptions() {
        this.naviOption = this.initOptions();
        this.defaultLineOption = this.initLineMenu("Default Line");
        this.originMarkerOptions = this.initIconMenu("Origin Icon");
        this.destinationMarkerOptions = this.initIconMenu("Destination Icon"); 
        this.destinationLineOptions = this.initLineMenu("Destination Line");
        this.animOption = this.initAnimationMenu("Animation Menu")
    }
    initOptions() {
        const menu = this.menu.addFolder("Navigation Option");
        const setting =  {
            lineZ: 2, // 주행선의 z축 값을 지정합니다.
            lineDivide: false,
        }
        menu.add(setting, "lineZ");
        menu.add(setting, "lineDivide");
        return setting; 

    }
    initLineMenu(menuName) {
        const menu = this.menu.addFolder(menuName);
        const setting = {
            lineColor: "#ffbb00",
            lineSpotSize: 10,
            lineSpotInterval: 10,
            lineSpotCount: 10,
            lineSpotAnimate: true,
            lineSpotAnimateSpeed: 0.1,
            solidLineEnabled: true,
            solidLineWidth: 10,
            solidLineJoin: "round",
            solidLineCap: "round",
        };
       
        menu.addColor(setting, "lineColor");
        menu.add(setting, "lineSpotSize");
        menu.add(setting, "lineSpotInterval");
        menu.add(setting, "lineSpotCount");
        menu.add(setting, "lineSpotAnimate");
        menu.add(setting, "lineSpotAnimateSpeed");
        menu.add(setting, "solidLineEnabled");
        menu.add(setting, "solidLineWidth");
        menu.add(setting, "solidLineJoin", ["round", "bevel", "miter"]);
        menu.add(setting, "solidLineCap", ["round", "butt", "square"]);
        return setting;
    }   
    initIconMenu(menuName) {
        const menu = this.menu.addFolder(menuName);
        const setting = {
            iconUrl: "",
            width: "",
            height: "",
            positionZ: 0,
            visibleIcon: true,
        };

        menu.add(setting, "iconUrl", ["", "https://assets.dabeeomaps.com/image/btn_floor_up.png"]);
        menu.add(setting, "width");
        menu.add(setting, "height");
        menu.add(setting, "iconUrl");
        menu.add(setting, "positionZ");
        menu.add(setting, "visibleIcon");
        return setting;
    }


    initAnimationMenu(menuName) {
        const menu = this.menu.addFolder(menuName);
        const setting  = {
            zoom: 20,
            changeFloorDelay: 1000,
            speedRate: 10,
            removeIcon: true,
        };
        menu.add(setting, "zoom");
        menu.add(setting, "changeFloorDelay");
        menu.add(setting, "speedRate");
        menu.add(setting, "removeIcon");
        return this.setting; 

    }
}
