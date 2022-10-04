import { ObjectsMoreMenu } from "./ObjectsMoreMenu.js";

export class ObjectsMenu {
    constructor() {
        this.gui = null;
        this.mapData = null;
        this.map = null;
        this.mapContainer = null;
        this.menu = null;
        this.setting = null;
        this.actionSetting = null;
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
        this.menu = this.gui.addFolder("Object Menu");
        this.initSetting();
        new ObjectsMoreMenu().init(this.menu, mapData, map, mapContainer)
        return this.menu;
    }
    async initSetting() {
        let objectSetting = null;
        this.mapContainer.addEventListener("floor-changed", async (e) => {
            console.log("floor-changed 에 대한 결과값", e.detail);
            const currentFloor = e.detail.id;
            const objects = await this.mapData.dataObject.getObjects(currentFloor);
            const objectList = objects.reduce((result, cur) => {
                return [...result, cur.id]; },[""]);
            // console.log(objectList);
            objectSetting = objectSetting.options(objectList);
        });

        const currentFloor = this.map.context.getCurrentFloor().id;
        const objects = await this.mapData.dataObject.getObjects(currentFloor);
        const objectList = objects.reduce((result, cur) => {
                return [...result, cur.id]; },[""]);

        this.setting = {
            activeDest: false,
            color: "#ff0000",
            opacity: 0.3,
            isAnimate: true,
            duration: 1000,
            isRepeat: true,
            isYoyo: true,
        };
        this.actionSetting = {
            ids: "",
            set: this.set.bind(this),
            reset: this.reset.bind(this),
            hide: this.hide.bind(this),
            show: this.show.bind(this),
        };

        const menu = this.menu;
        const setting = this.setting;
        const actionSetting = this.actionSetting;
        menu.add(setting, "activeDest");
        menu.addColor(setting, "color");
        menu.add(setting, "opacity");
        menu.add(setting, "isAnimate");
        menu.add(setting, "duration");
        menu.add(setting, "isRepeat");
        menu.add(setting, "isYoyo");
        objectSetting = menu.add(actionSetting, "ids", objectList);
        menu.add(actionSetting, "set");
        menu.add(actionSetting, "reset");
        menu.add(actionSetting, "hide");
        menu.add(actionSetting, "show");
    }

    set() {
        const option = Object.assign({}, this.setting);
        if (this.actionSetting.ids) option.ids = [this.actionSetting.ids];

        console.log(option);
        this.map.objects.set(option);
    }
    reset() {
        if (this.actionSetting.ids) this.map.objects.reset(this.actionSetting.ids);
        else this.map.objects.reset();
    }
    hide() {
        if (this.actionSetting.ids) this.map.objects.hide(this.actionSetting.ids);
        else this.map.objects.hide();
    }
    show() {
        if (this.actionSetting.ids) this.map.objects.show(this.actionSetting.ids);
        else this.map.objects.show();
    }

}
