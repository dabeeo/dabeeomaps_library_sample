export class MapOption {
    constructor(dabeeoMaps, context) {
        this.dabeeoMaps = dabeeoMaps;
        this.context = context;
        this.gui = null;
        this.mapData = null;
        this.setting = null;
        this.menu = null;
        this.mapContainer = null;
        this.actionSetting = null;
        this.map = null;
    }

    async showMap(value) {
        if (!this.mapData) {
            alert('mapData is not available');
            return;
        }
        this.deleteMap();
        this.context.removeMenu();
        const option = {
            camera: '2d', // 초기 카메라 모드 3d
            graphicLibrary: '2d',
        };

        this.map = await this.dabeeoMaps.showMap(this.mapContainer, option, this.mapData);
        this.context.init(this.gui, this.mapData, this.map, this.mapContainer);

        return this.map;
    }

    init(gui, mapData, mapContainer) {
        this.gui = gui;
        this.mapData = mapData;
        this.mapContainer = mapContainer;
        return this.menu;
    }

    deleteMap() {
        if (this.map) {
            this.map.context.cleanup();
            this.map = null;
        }
    }

    removeMenu() {
        if (this.menu) {
            this.gui.removeFolder(this.menu);
            this.menu = null;
        }
    }
}
