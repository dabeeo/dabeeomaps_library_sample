export class MyLocationMenu {
    constructor(gui, mapData, map, mapContainer) {
        this.gui = gui;
        this.mapData = mapData;
        this.map = map;
        this.mapContainer = mapContainer;
    }
    init() {

        let poisSetting = null; 
        this.mapContainer.addEventListener("floor-changed", (e) => {
            console.log("floor-changed 에 대한 결과값", e.detail);
            const currentFloor = e.detail.id;
            const poiList = pois.reduce((result, cur) => {
                if (currentFloor == cur.floorId) return {...result, [cur.title]:cur.id};
                else return result;
            }, {"":""});
            poisSetting = poisSetting.options(poiList);
            // console.log(poiList);
        });

        const pois = this.mapData.dataPoi.getPois();
        const currentFloor = this.map.context.getCurrentFloor().id;
        const poiList = pois.reduce((result, cur) => {
            if (currentFloor == cur.floorId) return {...result, [cur.title]:cur.id};
            else return result;
        }, {"":""});
    // console.log(poiList);

        const map = this.map;
        const set = () => {
            const option = Object.assign({}, setting);
            if (actionSetting.id) {
                option.id = [actionSetting.id];
            }
            console.log(option);
            map.pois.set(option);
        };
        const reset = () => {
            if (actionSetting.id) {
                map.pois.reset(actionSetting.id);
            } else {
                map.pois.reset();
            }
        };
        const hide = () => {
            if (actionSetting.id) {
                map.pois.hide(actionSetting.id);
            } else {
                map.pois.hide();
            }
        };
        const show = () => {
            if (actionSetting.id) {
                map.pois.show(actionSetting.id);
            } else {
                map.pois.show();
            }
        };

        const setting = {
            outerColor: '#00ff00',
            innerColor: '#ff00ff',
            scale: 1
        };

        const actionSetting = {
            id: "",
            set: set,
            reset: reset,
            hide: hide,
            show: show,
        };
        const menu = this.gui.addFolder("pois menu");
        menu.addColor(setting, "outerColor");
        menu.addColor(setting, "innerColor");
        menu.add(setting, "scale");
        poisSetting = menu.add(actionSetting, "id", poiList);
        menu.add(actionSetting, "set");
        menu.add(actionSetting, "reset");
        menu.add(actionSetting, "hide");
        menu.add(actionSetting, "show");
        return menu;
    }
}
