import {PoisMoreMenu} from "./PoisMoreMenu.js";

export class PoisMenu {
    constructor() {
        this.gui = null;
        this.mapData = null;
        this.map = null;
        this.mapContainer = null;
        this.menu = null;
        this.setting = null;
        this.actionSetting = null;
        this.currentSetting = null;
        this.poiList = null;
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
        this.menu = this.gui.addFolder("Pois Menu");
        this.initSetting();
        new PoisMoreMenu().init(this.menu, mapData, map, mapContainer);
        this.initCurrentSetting();
        return this.menu;
    }

    initSetting() {
        let poisSetting = null;
        this.mapContainer.addEventListener("floor-changed", (e) => {
            const currentFloor = e.detail.id;
            const poiList = this.mapData.dataPoi.getPois().reduce((result, cur) => {
                    if (currentFloor == cur.floorId) return {...result, [cur.title]: cur.id};
                    else return result;
                },{"": ""});
            poisSetting = poisSetting.options(poiList);
        });

        const currentFloor = this.map.context.getCurrentFloor().id;
        const poiList = this.mapData.dataPoi.getPois().reduce((result, cur) => {
                if (currentFloor == cur.floorId) return {...result, [cur.title]: cur.id};
                else return result;
            },{"": ""});

        this.setting = {
            outerColor: "#00ff00",
            innerColor: "#ff00ff",
            scale: 1,
        };

        this.actionSetting = {
            ids: "",
            set: this.set.bind(this),
            reset: this.reset.bind(this),
            hide: this.hide.bind(this),
            show: this.show.bind(this),
        };
        const menu = this.menu;
        menu.addColor(this.setting, "outerColor");
        menu.addColor(this.setting, "innerColor");
        menu.add(this.setting, "scale");
        poisSetting = menu.add(this.actionSetting, "ids", poiList);

        menu.add(this.actionSetting, "set");
        menu.add(this.actionSetting, "reset");
        menu.add(this.actionSetting, "hide");
        menu.add(this.actionSetting, "show");
    }

    initCurrentSetting() {
        this.currentsetting = {
            isVisible: true,
            x: "",
            y: "",
            z: "",
            byAsc: true,
            currentPoi: this.currentPoi.bind(this),
        };

        const current = this.menu.addFolder("current menu");
        current.add(this.currentsetting, "isVisible");
        current.add(this.currentsetting, "x");
        current.add(this.currentsetting, "y");
        current.add(this.currentsetting, "z");
        current.add(this.currentsetting, "byAsc");
        current.add(this.currentsetting, "currentPoi");
    }
    currentPoi(value) {
        setTimeout(() => {
            const option = {
                isVisible: this.currentsetting.isVisible,
                sortOption: {
                    center: {
                        x: this.currentsetting.x,
                        y: this.currentsetting.y,
                        z: this.currentsetting.z,
                    },
                    byAsc: this.currentsetting.byAsc,
                },
            };
            const pois = this.map.pois.getCurrentPois(option);
            console.log("현재 화면 안에서 보여지고 있는 pois : ", pois);
            pois?.forEach((poi) => {
                console.log("poi title : ", poi.title);
            });
        }, 500);
    }

    set() {
        const option = Object.assign({}, this.setting);
        if (this.actionSetting.ids) {
            option.ids = [this.actionSetting.ids];
        }
        console.log(option);
        this.map.pois.set(option);
    }

    reset() {
        if (this.actionSetting.ids) this.map.pois.reset(this.actionSetting.ids);
        else this.map.pois.reset();
    }
    hide() {
        if (this.actionSetting.ids) this.map.pois.hide(this.actionSetting.ids);
        else this.map.pois.hide();
    }
    show() {
        if (this.actionSetting.ids) this.map.pois.show(this.actionSetting.ids);
        else this.map.pois.show();
    }

}
