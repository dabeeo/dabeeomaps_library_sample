export class SimulationMenu {
    constructor(gui, mapData, map, mapContainer) {
        this.gui = gui;
        this.map = map;
        this.mapData = mapData;
        this.mapContainer = mapContainer;
        this.iconApply = false;
    }
    init() {
        const set = async () => {
            const option = {
                origin: {
                    poiId: setting.origin,
                    floorId: this.mapData.dataPoi.find(setting.origin, {type: "iD"}).floorId,
                },
                destination: {
                    poiId: setting.dest,
                    floorId: this.mapData.dataPoi.find(setting.dest, {type: "iD"}).floorId,
                },
                type: "recommendation",
            };
            console.log(option);
            const naviResponse = this.mapData.getRoute(option);
            if (naviResponse==undefined) {
                alert('경로가 존재하지 않습니다!');
                return; 
            }
            if (this.oriiconApply&&this.desiconApply) {
                const naviOption = {
                    origin: {
                        markerOptions: {
                            iconUrl: oriiconSetting.iconUrl,
                            width: oriiconSetting.width,
                            height: oriiconSetting.height,
                            positionZ: oriiconSetting.positionZ,
                            visibleIcon: oriiconSetting.visibleIcon,
                            anchor: {
                              x: oriiconSetting.anchorX,
                              y: oriiconSetting.anchorY,
                            },
                        }
                    }, // 출발지 아이콘 및 주행선
                    destination: {   
                        markerOptions: {                                        // 도착지 마커 및 주행선 옵션
                        iconUrl: desiconSetting.iconUrl,
                        width: desiconSetting.width,
                        height: desiconSetting.height,
                        positionZ: desiconSetting.positionZ,
                        visibleIcon: desiconSetting.visibleIcon,
                        anchor: {
                          x: desiconSetting.anchorX,
                          y: desiconSetting.anchorY,
                        },
                    }
                    }
                };
                console.log(naviOption);
                await this.map.routeSimulation.set(naviResponse, naviOption);
            } else {
                await this.map.routeSimulation.set(naviResponse);
            }
        };
        const clear = () => {
            this.map.routeSimulation.clear();
        };
        const start = (value) => {
            this.map.routeSimulation.start();
        };
        const stop = (value) => {
            this.map.routeSimulation.stop();
        };

        const objectList = objects.reduce((result, cur) => {
            if (currentFloor == cur.floorId) result.push(cur.id);
            return result;
        }, [""]);
        objectSetting = objectSetting.options(objectList);        

        const setting = {
            type: "recommendation",
            set: set,
            clear: clear,
            start: start,
            stop: stop,
        };
        const menu = this.gui.addFolder("simulation");
        const originMenu = menu.addFolder("origin");

        const originSetting = {
            floor: "",
            poi: ""
        }
        originMenu.add(originSetting, "floor");
        originMenu.add(originSetting, "poi");

        const destMenu = menu.addFolder("dest");
        const destSetting = {
            floor: "",
            poi: ""
        }
        originMenu.add(destSetting, "floor");
        originMenu.add(destSetting, "poi");


        const pois = this.mapData.dataPoi.getPois();
        console.log(pois);
        const poisSetting = pois.reduce((prev, cur) => {
            return {...prev, [cur.title]: cur.id};
        }, {});

        const floorSetting = this.mapData.dataFloor.getFloors().reduce(
            (prev, cur) => {
                return {...prev, [cur.name[0].text]: cur.id};
            },
            {"not defined": ""},
        );

        // menu.open();
        menu.add(setting, "origin", poisSetting);
        menu.add(setting, "dest", poisSetting);
        menu.add(setting, "type", ['recommendation', 'stairs', 'escalator', 'elevator']);
        menu.add(setting, "set");
        menu.add(setting, "clear");
        menu.add(setting, "start");
        menu.add(setting, "stop");

        const apply = () => {
            this.oriiconApply = true;
            this.desiconApply = true;
            oriiconMenu.close();
            desiconMenu.close(); 
        };
        const reset = () => {
            this.oriiconApply = false;
            this.desiconApply = false;
            oriiconMenu.close(); 
            desiconMenu.close();
        };


        const oriiconMenu = menu.addFolder("oriiconMenu");
        const oriiconSetting = {
            iconUrl: "",
            width: "",
            height: "",
            positionZ: 0,
            visibleIcon: true,
            anchorX: 0,
            anchorY: 0,
            apply: apply,
            reset: reset,
        };
        oriiconMenu.add(oriiconSetting, "iconUrl", ['','https://assets.dabeeomaps.com/image/btn_floor_up.png']);
        oriiconMenu.add(oriiconSetting, "width");
        oriiconMenu.add(oriiconSetting, "height");
        oriiconMenu.add(oriiconSetting, "iconUrl");
        oriiconMenu.add(oriiconSetting, "positionZ");
        oriiconMenu.add(oriiconSetting, "visibleIcon");
        oriiconMenu.add(oriiconSetting, "anchorX");
        oriiconMenu.add(oriiconSetting, "anchorY");
        oriiconMenu.add(oriiconSetting, "apply");
        oriiconMenu.add(oriiconSetting, "reset");


        const desiconMenu = menu.addFolder("desiconMenu");
        const desiconSetting = {
            iconUrl: "",
            width: "",
            height: "",
            positionZ: 0,
            visibleIcon: true,
            anchorX: 0,
            anchorY: 0,
            apply: apply,
            reset: reset,
        };
        desiconMenu.add(desiconSetting, "iconUrl", ['','https://assets.dabeeomaps.com/image/btn_floor_up.png']);
        desiconMenu.add(desiconSetting, "width");
        desiconMenu.add(desiconSetting, "height");
        desiconMenu.add(desiconSetting, "iconUrl");
        desiconMenu.add(desiconSetting, "positionZ");
        desiconMenu.add(desiconSetting, "visibleIcon");
        desiconMenu.add(desiconSetting, "anchorX");
        desiconMenu.add(desiconSetting, "anchorY");
        desiconMenu.add(desiconSetting, "apply");
        desiconMenu.add(desiconSetting, "reset");

        return menu;
    }
}
