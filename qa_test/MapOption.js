
export class MapOption {
    constructor(dabeeoMaps, context, menuClass) {
        this.dabeeoMaps  = dabeeoMaps; 
        this.context = context; 
        this.menuClass = menuClass; 
        this.gui = null;
        this.mapData = null;
        this.setting = null;
        this.menu = null;
        this.mapContainer = null;
        this.actionSetting = null; 
        this.map = null; 
    }
    async showMap (value)  {
        if (!this.mapData) {
            alert("mapData is not available");
            return;
        }
        const option = this.getOption();
        this.deleteMap();
        this.context.removeMenu();
        this.menuClass.removeMenu();
        this.map = await this.dabeeoMaps.showMap(this.mapContainer, option, this.mapData);
        this.context.init(this.gui, this.mapData, this.map, this.mapContainer);
        this.menuClass.init(this.gui, this.mapData, this.map, this.mapContainer);

        return this.map;
    }

    init(gui, mapData, mapContainer) {
        this.gui = gui;
        this.mapData = mapData;
        this.mapContainer = mapContainer;
        this.setting = this.initSetting();
        this.menu = this.initMenu();
        return this.menu;
    }
    initSetting() {
        const defaultFloorId = this.mapData.dataFloor.getDefaultFloor().id;
        const defaultLang = this.mapData.dataLanguage.getDefaultLanguage().lang;

        this.setting = {
            camera: "3d", // 초기 카메라 모드 3d
            floor: defaultFloorId,
            language: defaultLang, // 초기 poi 언어 설정
            showPoi: true, // map상에 poi 보여줄지 말지 결정 여부. default는 true
            spriteEnable: true, // POI,Marker,MyLocation,길찾기 마커를 항상 정면으로 보이게 함.
            spriteKeepRotation: false, // POI,Marker,MyLocation,길찾기 마커를 sprite로 그릴때 원래 각도 유지 여부
            zoom: "", //초기줌
            x: "",
            y: "",
            rotate: "", //회전 3d, 2d
            tilt: "", //기울기 3d
            mergeMesh: false, // mergedMesh 활성화 여부
        };
        this.actionSetting = {
            showMap: this.showMap.bind(this),
            deleteMap: this.deleteMap.bind(this),
        };
        return this.setting;
    }

    deleteMap () {
        if (this.map) {
            this.map.context.cleanup();
            this.map = null;
        }
    };

    initMenu() {

        const setting = this.setting;
        const floorSetting = this.mapData.dataFloor.getFloors().reduce((prev, cur) => {
            return {...prev, [cur.name[0].text]: cur.id};
        }, {});
        const langSetting = this.mapData.dataLanguage.getLanguage().map((data) => data.lang);

        const menu = this.gui.addFolder("mapOption");
        // menu.open();
        menu.add(setting, "camera", ["2d", "3d"]);
        menu.add(setting, "floor", floorSetting);
        menu.add(setting, "language", langSetting);
        menu.add(setting, "showPoi");
        menu.add(setting, "spriteEnable");
        menu.add(setting, "spriteKeepRotation");
        menu.add(setting, "zoom");
        menu.add(setting, "x");
        menu.add(setting, "y");
        menu.add(setting, "rotate");
        menu.add(setting, "tilt");
        menu.add(setting, "mergeMesh");
        menu.add(this.actionSetting, "showMap");
        menu.add(this.actionSetting, "deleteMap");

        return menu;
    }

    getOption() {
        const setting = this.setting;
        const mapOption = {
            camera: setting.camera, // 초기 카메라 모드 3d
            floor: setting.floor, // 적용할 층 정보
            language: setting.language, // 초기 poi 언어 설정
            showPoi: setting.showPoi, // map상에 poi 보여줄지 말지 결정 여부. default는 true
            spriteEnable: setting.spriteEnable, // POI,Marker,MyLocation,길찾기 마커를 항상 정면으로 보이게 함.
            spriteKeepRotation: setting.spriteKeepRotation, // POI,Marker,MyLocation,길찾기 마커를 sprite로 그릴때 원래 각도 유지 여부
            controlOption: {
                zoom: setting.zoom, //초기줌
                pan: {
                    //중심좌표
                    x: setting.x,
                    y: setting.y,
                },
                rotate: setting.rotate, //회전 3d, 2d
                tilt: setting.tilt, //기울기 3d
            },
            mergeMesh: setting.mergeMesh, // mergedMesh 활성화 여부
        };
        return mapOption;
    }

    removeMenu() {
        if (this.menu) {
            this.gui.removeFolder(this.menu);
            this.menu = null;
        }
    }
}
