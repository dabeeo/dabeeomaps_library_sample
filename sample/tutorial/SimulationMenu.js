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
        this.waypoint1 = null;
        this.waypoint2 = null;

        this.naviOption = null;
        this.defaultLineOption = null;
        this.originMarkerOption = null;
        this.destinationMarkerOptions = null;
        this.destinationLineOptions = null;
        this.animOption = null;
        this.animMarkerOptions = null;
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
        this.menu = this.gui.addFolder('길찾기 메뉴');
        this.originPoi = this.initPoiSetting('출발지');
        this.destinationPoi = this.initPoiSetting('도착지');
        // this.waypoint1 = this.initWayPoint("waypoint1");
        // this.waypoint2 = this.initWayPoint("waypoint2");
        this.setting = this.initSetting();
        this.initNaviOptions();
        return this.menu;
    }
    initNaviOptions() {
        this.naviOption = this.initOptions();
        this.defaultLineOption = this.initLineMenu('Default Line');
        this.originMarkerOptions = this.initIconMenu('Origin Icon');
        this.destinationMarkerOptions = this.initIconMenu('Destination Icon');
        this.destinationLineOptions = this.initLineMenu('Destination Line');
        this.animOption = this.initAnimationMenu('Animation Option');
        this.animMarkerOptions = this.initIconMenu('Animation Icon');
    }
    makeFloorSetting() {
        return this.mapData.dataFloor.getFloors().reduce(
            (prev, cur) => {
                return { ...prev, [cur.name[0].text]: cur.id };
            },
            { 'not defined': '' },
        );
    }
    makePoiSetting(floor) {
        return this.mapData.dataPoi.getPois().reduce(
            (result, cur) => {
                if (floor == cur.floorId) return { ...result, [cur.title]: cur.id };
                else return result;
            },
            { '': '' },
        );
    }

    initPoiSetting(menuName) {
        let poiSetting = null;
        const changeFloor = (value) => {
            const poiList = this.makePoiSetting(value);
            poiSetting = poiSetting.options(poiList);
        };

        const menu = this.menu.addFolder(menuName);
        menu.open();

        const floorSetting = this.makeFloorSetting();
        let poisSetting = this.makePoiSetting(this.mapData.dataFloor.getFloors()[0].id);

        const setting = {
            floor: this.mapData.dataFloor.getFloors()[0].id,
            poi: '',
        };

        menu.add(setting, 'floor', floorSetting).name('층').onChange(changeFloor);
        poiSetting = menu.add(setting, 'poi', poisSetting).name(menuName);
        return setting;
    }
    initWayPoint(menuName) {
        let poiSetting = null;
        const changeFloor = (value) => {
            const poiList = this.makePoiSetting(value);
            poiSetting = poiSetting.options(poiList);
        };

        const menu = this.menu.addFolder(menuName);
        const floorSetting = this.makeFloorSetting();
        let poisSetting = this.makePoiSetting(this.mapData.dataFloor.getFloors()[0].id);

        const setting = {
            floor: this.mapData.dataFloor.getFloors()[0].id,
            poi: '',
            apply: false,
        };

        menu.add(setting, 'floor', floorSetting).name('층').onChange(changeFloor);
        poiSetting = menu.add(setting, 'poi', poisSetting).name(menuName);
        menu.add(setting, 'apply');

        return setting;
    }

    initSetting() {
        const setting = {
            type: 'recommendation',
            set: this.set.bind(this),
            clear: this.clear.bind(this),
            start: this.start.bind(this),
            stop: this.stop.bind(this),
        };

        const menu = this.menu;
        menu.add(setting, 'type', ['recommendation', 'stairs', 'escalator', 'elevator']).name('이동수단선택');
        menu.add(setting, 'set').name('경로그리기');
        menu.add(setting, 'clear').name('경로지우기');
        menu.add(setting, 'start').name('모의주행 시작');
        menu.add(setting, 'stop').name('모의주행 종료');

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
        };
        console.log(option);

        const naviResponse = await this.mapData.getRoute(option);
        console.log(naviResponse);
        console.log(naviResponse.recommendation);
        if (naviResponse.recommendation.totalDistance === 0) {
            alert('경로에 대한 거리가 0입니다! ');
            return;
        }
        let naviOption = {};
        naviOption = this.naviOption;
        naviOption.origin = {};
        naviOption.destination = {};

        naviOption.defaultLineOption = this.defaultLineOption;
        naviOption.origin.markerOptions = this.originMarkerOptions;
        naviOption.destination.markerOptions = this.destinationMarkerOptions;
        naviOption.destination.lineOptions = this.destinationLineOptions;
        console.log(naviOption);
        await this.map.routeSimulation.set(naviResponse.recommendation, naviOption);
    }

    clear() {
        this.map.routeSimulation.clear();
    }
    start() {
        let animOption = Object.assign({}, this.animOption);
        animOption.markerOptions = this.animMarkerOptions;
        console.log(animOption);
        this.map.routeSimulation.start(animOption);
    }

    stop() {
        this.map.routeSimulation.stop();
    }

    initOptions() {
        const setting = {
            lineZ: 2, // 주행선의 z축 값을 지정합니다.
            lineDivide: false,
        };
        // const menu = this.menu.addFolder("Navigation Option");
        // menu.add(setting, "lineZ");
        // menu.add(setting, "lineDivide");
        return setting;
    }
    initLineMenu(menuName) {
        const setting = {
            lineColor: '#ffbb00',
            lineSpotSize: 10,
            lineSpotInterval: 10,
            lineSpotCount: 10,
            lineSpotAnimate: true,
            lineSpotAnimateSpeed: 0.1,
            solidLineEnabled: true,
            solidLineWidth: 10,
            solidLineJoin: 'round',
            solidLineCap: 'round',
        };

        // const menu = this.menu.addFolder(menuName);
        // menu.addColor(setting, "lineColor");
        // menu.add(setting, "lineSpotSize");
        // menu.add(setting, "lineSpotInterval");
        // menu.add(setting, "lineSpotCount");
        // menu.add(setting, "lineSpotAnimate");
        // menu.add(setting, "lineSpotAnimateSpeed");
        // menu.add(setting, "solidLineEnabled");
        // menu.add(setting, "solidLineWidth");
        // menu.add(setting, "solidLineJoin", ["round", "bevel", "miter"]);
        // menu.add(setting, "solidLineCap", ["round", "butt", "square"]);
        return setting;
    }
    initIconMenu(menuName) {
        const setting = {
            iconUrl: '',
            width: '',
            height: '',
            positionZ: 0,
            visibleIcon: true,
        };

        // const menu = this.menu.addFolder(menuName);
        // menu.add(setting, "iconUrl", ["", "https://assets.dabeeomaps.com/image/btn_floor_up.png"]);
        // menu.add(setting, "width");
        // menu.add(setting, "height");
        // menu.add(setting, "positionZ");
        // menu.add(setting, "visibleIcon");
        return setting;
    }

    initAnimationMenu(menuName) {
        const setting = {
            zoom: 20,
            changeFloorDelay: 1000,
            speedRate: 30,
            removeIcon: true,
        };
        // const menu = this.menu.addFolder(menuName);
        // menu.add(setting, "zoom");
        // menu.add(setting, "changeFloorDelay");
        // menu.add(setting, "speedRate");
        // menu.add(setting, "removeIcon");
        return setting;
    }
}
