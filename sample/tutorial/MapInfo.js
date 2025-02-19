export class MapInfo {
    constructor() {
        this.gui = null;
        this.mapData = null;
        this.menu = null;
    }

    init(gui, mapData) {
        this.gui = gui;
        this.mapData = mapData;
        this.mapData = this.mapData;

        const mapInfo = {
            northReference: mapData.mapInfo.northReference,
            width: mapData.mapInfo.size.width,
            height: mapData.mapInfo.size.height,
            scaleCm: mapData.mapInfo.scaleCm,
            name: mapData.mapInfo.name,
            id: mapData.mapInfo.id,
            version: mapData.mapInfo.versionString,
        };
        this.menu = this.gui.addFolder('Map Info');
        // mapInfoGui.open();
        this.menu.add(mapInfo, 'northReference');
        this.menu.add(mapInfo, 'width');
        this.menu.add(mapInfo, 'height');
        this.menu.add(mapInfo, 'scaleCm');
        this.menu.add(mapInfo, 'name');
        this.menu.add(mapInfo, 'id');
        this.menu.add(mapInfo, 'version');

        return this.menu;
    }
    removeMenu() {
        if (this.menu) {
            this.gui.removeFolder(this.menu);
            this.menu = null;
        }
    }
}
