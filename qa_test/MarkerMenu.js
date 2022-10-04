import {IconMenu} from "./IconMenu.js";

export class MarkerMenu {
    constructor() {
        this.gui = null;
        this.mapData = null;
        this.map = null;
        this.mapContainer = null;
        this.menu = null;
        this.setting = null;
    }
    removeMenu() {
        if (this.menu) {
            this.gui.removeFolder(this.menu);
            this.menu = null;
        }
    }
    init(gui, mapData, map, mapContainer) {
        this.gui = gui;
        this.mapData = mapData;
        this.map = map;
        this.mapContainer = mapContainer;
        this.menu = this.gui.addFolder("Marker Menu");
        this.initSetting();
        this.initMarkerFolder();
        return this.menu;
    }

    initSetting() {
        this.setting = {
            x: "1000",
            y: "2000",
            data: "myMarker",
            floor: "",
            set: this.set.bind(this),
            start: this.start.bind(this),
            clearAll: this.clearAll.bind(this),
            anctest : this.anctest.bind(this),
            deltest : this.deltest.bind(this),

        };
    }
    start() {
        console.log("start");
    }
    async set(value) {
        const setting = this.setting;
        const iconOption = this.iconMenu.getOption();

        console.log(value);
        const markerOption = {
            x: setting.x,
            y: setting.y,
            data: setting.data,
            floorId: setting.floor,
            iconOption: iconOption,
        };
        console.log(markerOption);
        const list = await this.map.markers.set({
            marker: [markerOption],
        });
    }

    async setdel() {
        this.markerlist = await this.map.markers.set({
            // 생성된 marker들의 ID List를 저장합니다.
            marker: [
                {
                    x: 1000,
                    y: 500,
                    iconOption: {
                        positionZ: 100,
                        anchor: {
                            x: 0.1,
                            y: 0.1,
                        },
                    },
                },
                {
                    x: 1000,
                    y: 1000,
                    iconOption: {
                        positionZ: 100,
                        anchor: {
                            x: 0.5,
                            y: 0.5,
                        },
                    },
                },
                {
                    x: 1000,
                    y: 1500,
                    iconOption: {
                        positionZ: 100,
                        anchor: {
                            x: 1,
                            y: 1,
                        },
                    },
                },
            ],
        });
        this.map.markers.set({
            marker: [
                {
                    x: 2000,
                    y: 500,
                    iconOption: {
                        positionZ: 400,
                        anchor: {
                            x: 0.5,
                            y: 0.5,
                        },
                    },
                },
                {
                    x: 2000,
                    y: 1000,
                    iconOption: {
                        positionZ: 400,
                        anchor: {
                            x: 0.5,
                            y: 0.5,
                        },
                    },
                },
            ],
        });
    }

    clearAll() {
        this.map.markers.clearAll();
    }
    async deltest() {
        this.setdel();
        setTimeout(() => {
            this.map.markers.clearAll();
        }, 1000);
        setTimeout(() => {
            this.setdel();
        }, 7000);
        setTimeout(() => {
            this.map.markers.clear(this.markerlist);
        }, 8000);
    }

    async anctest() {
        const lists = await this.map.markers.set({
            // 생성된 marker들의 ID List를 저장합니다.
            marker: [
                {
                    x: 1000,
                    y: 1000,
                    iconOption: {
                        positionZ: 100,
                        anchor: {
                            x: 0.1,
                            y: 0.1,
                        },
                    },
                },
                {
                    x: 1000,
                    y: 1000,
                    iconOption: {
                        positionZ: 100,
                        anchor: {
                            x: 0.5,
                            y: 0.5,
                        },
                    },
                },
                {
                    x: 1000,
                    y: 1000,
                    iconOption: {
                        positionZ: 100,
                        anchor: {
                            x: 1,
                            y: 1,
                        },
                    },
                },
            ],
        });
    }

    initMarkerFolder() {
        const setting = this.setting;
        this.iconMenu = new IconMenu(this.menu);
        const menu = this.menu;

        const floorSetting = this.mapData.dataFloor.getFloors().reduce(
            (prev, cur) => {
                return {...prev, [cur.name[0].text]: cur.id};
            },
            {"not defined": ""},
        );

        menu.add(setting, "x");
        menu.add(setting, "y");
        menu.add(setting, "data");
        menu.add(setting, "floor", floorSetting);
        menu.add(setting, "anctest");
        menu.add(setting, "deltest");
        menu.add(setting, "set");
        menu.add(setting, "start");
        menu.add(setting, "clearAll");
        this.iconMenu.init();
    }
}
