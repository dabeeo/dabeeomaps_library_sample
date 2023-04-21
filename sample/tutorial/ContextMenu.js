export class ContextMenu {
    constructor() {
        this.gui = null;
        this.mapData = null;
        this.map = null;
        this.mapContainer = null;
        this.menu = null;
    }

    init(gui, mapData, map, mapContainer) {
        this.gui = gui;
        this.mapData = mapData;
        this.map = map;
        this.mapContainer = mapContainer;

        this.mapContainer.addEventListener('floor-changed', (e) => {
            console.log('floor-changed 에 대한 결과값', e.detail);
            mapContext.floor = e.detail.id;
        });

        const floorSetting = mapData.dataFloor.getFloors().reduce((prev, cur) => {
            return { ...prev, [cur.name[0].text]: cur.id };
        }, {});
        const currentFloor = this.map.context.getCurrentFloor();
        const currentCameraMode = this.map.control.getCameraType();
        const mapContext = {
            floor: currentFloor.id,
            camera: currentCameraMode,
        };
        this.menu = this.gui.addFolder('옵션 변경');
        this.menu.open();
        this.menu.add(mapContext, 'floor', floorSetting).name('층').onChange(this.changeFloor.bind(this)).listen();
        this.menu.add(mapContext, 'camera', ['2D', '3D']).name('2d/3d').onChange(this.changeCamera.bind(this));
        return this.menu;
    }
    changeFloor(value) {
        this.map.context.changeFloor(value);
        console.log(value);
    }
    changeCamera(value) {
        this.map.control.changeCamera(value);
        console.log(value);
    }
    removeMenu() {
        if (this.menu) {
            this.gui.removeFolder(this.menu);
            this.menu = null;
        }
    }
}
