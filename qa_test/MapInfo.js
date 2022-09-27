export class MapInfo {
    constructor(gui, mapData) {
        this.gui = gui; 
        this.mapData = mapData; 
    }

    init() {
        const mapData = this.mapData; 

        const mapInfo = {
            northReference: mapData.mapInfo.northReference,
            width: mapData.mapInfo.size.width,
            height: mapData.mapInfo.size.height,
            scaleCm: mapData.mapInfo.scaleCm,
            name: mapData.mapInfo.name,
        };
        const mapInfoGui = this.gui.addFolder("mapInfo");
        // mapInfoGui.open();
        mapInfoGui.add(mapInfo, "northReference");
        mapInfoGui.add(mapInfo, "width");
        mapInfoGui.add(mapInfo, "height");
        mapInfoGui.add(mapInfo, "scaleCm");
        mapInfoGui.add(mapInfo, "name");
        return mapInfoGui;
    }
}
