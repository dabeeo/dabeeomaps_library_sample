export class ContextMenu {
    constructor() {
        this.gui = null;
        this.mapData = null;
        this.map = null;
        this.mapContainer = null;
        this.menu = null;
    }

    init(gui, mapData, map, mapContainer) {
        console.log('context init');
        this.gui = gui;
        this.mapData = mapData;
        this.map = map;
        this.mapContainer = mapContainer;
        this.mapContainer.addEventListener('floor-changed', (e) => {
            console.log('floor-changed 에 대한 결과값', e.detail);
            setting.floor = e.detail.id;
        });

        const floorSetting = mapData.dataFloor.getFloors().reduce((prev, cur) => {
            return { ...prev, [cur.name[0].text]: cur.id };
        }, {});

        const langSetting = mapData.dataLanguage.getLanguage().reduce((prev, cur) => {
            return { ...prev, [cur.name]: cur.lang };
        }, {});

        const currentFloor = this.map.context.getCurrentFloor();
        const currentCameraMode = this.map.control.getCameraType();
        const currentLang = mapData.dataLanguage.getDefaultLanguage();

        const setting = {
            floor: currentFloor.id,
            camera: currentCameraMode,
            language: currentLang.lang,
            convertToImg: this.convertToImg.bind(this),
        };
        this.menu = this.gui.addFolder('옵션 변경');
        this.menu.open();
        this.menu.add(setting, 'floor', floorSetting).name('floor').onChange(this.changeFloor.bind(this)).listen();
        // this.menu.add(mapContext, 'camera', ['2D', '3D']).name('2d/3d').onChange(this.changeCamera.bind(this));
        this.menu.add(setting, 'language', langSetting).name('language').onChange(this.changeLanguage.bind(this)).listen();
        this.menu.add(setting, 'convertToImg').name('download png');
        return this.menu;
    }

    convertToImg() {
        this.map.context.convertToImg({ ratio: 5, filename: 'test-image' });
    }

    changeFloor(value) {
        this.map.context.changeFloor(value);
        console.log(value);
    }

    changeLanguage(value) {
        this.map.context.changeLanguage(value);
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
