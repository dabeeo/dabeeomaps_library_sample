import { IconMenu } from "./IconMenu.js";

export class MarkerMenu {
    constructor(gui, mapData, map) {
        this.gui = gui;
        this.map = map;
        this.mapData = mapData; 
        this.markerSetting = null;
        this.iconMenu = null; 
    }

    start() {
        console.log('start')
    }
    async set(value) {
        const markerSetting = this.markerSetting;
        const iconOption = this.iconMenu.getOption(); 

        console.log(value);
        const markerOption = {
            x: markerSetting.x,
            y: markerSetting.y,
            data: markerSetting.data,
            floorId: markerSetting.floor,
            iconOption:iconOption
        };
        console.log(markerOption);
        const list = await this.map.markers.set({
            marker: [markerOption],
        });
    }

    clearAll () {
        this.map.markers.clearAll();
    }
    init() {
        this.markerSetting = {
            x: "1000",
            y: "2000",
            data: "myMarker",
            floor: "",
            set: this.set.bind(this),
            start: this.start.bind(this),
            clearAll: this.clearAll.bind(this)
        };

        return this.initMarkerFolder();
    }

    initMarkerFolder() {
        const markerSetting = this.markerSetting;
        const markerOptionGui = this.gui.addFolder("marker");
        this.iconMenu = new IconMenu(markerOptionGui);

        const floorSetting = this.mapData.dataFloor.getFloors().reduce((prev, cur) => {
            return {...prev, [cur.name[0].text]: cur.id};
        }, {"not defined":""});

        // markerOptionGui.open();
        markerOptionGui.add(markerSetting, "x");
        markerOptionGui.add(markerSetting, "y");
        markerOptionGui.add(markerSetting, "data");
        markerOptionGui.add(markerSetting, "floor", floorSetting);

        markerOptionGui.add(markerSetting, "set");
        markerOptionGui.add(markerSetting, "start");
        markerOptionGui.add(markerSetting, "clearAll");
        this.iconMenu.init();

        return markerOptionGui;
    }
}
