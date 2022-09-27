export class MapOption {
    constructor(gui, mapData) {
        this.gui = gui;
        this.mapData = mapData;
        this.setting = null;
    }

    init() {
        this.setting = this.initSetting();
        const menu = this.initMenu();
        return menu;
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
        return this.setting;
    }
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
}
