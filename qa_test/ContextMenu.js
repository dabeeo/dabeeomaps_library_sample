export class ContextMenu {
    constructor(gui, mapData, map) {
        this.gui = gui; 
        this.mapData = mapData; 
        this.map = map;
    }

    init() {
        const mapData = this.mapData; 
        const floorSetting = mapData.dataFloor.getFloors().reduce((prev, cur) => {
            return {...prev, [cur.name[0].text]: cur.id};
        }, {});
        const currentFloor = this.map.context.getCurrentFloor();
        const currentCameraMode = this.map.control.getCameraType();
        const mapContext = {
            floor: currentFloor.id,
            camera : currentCameraMode,
        };
        const mapContextGui = this.gui.addFolder("Context");
        // mapContextGui.open(); 
        mapContextGui.add(mapContext, "floor", floorSetting).onChange(this.changeFloor.bind(this));
        mapContextGui.add(mapContext, "camera", ["2D", "3D"]).onChange(this.changeCamera.bind(this));
        return mapContextGui;
    }
    changeFloor(value) {
        this.map.context.changeFloor(value);
    }
    changeCamera(value) {
        this.map.control.changeCamera(value);
    }
}
