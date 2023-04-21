import { mapList } from './mapList.js';

export class GetMapData {
    constructor(dabeeoMaps, mapContainer, mapInfo, mapOption, context, menuClass) {
        this.dabeeoMaps = dabeeoMaps;
        this.mapContainer = mapContainer;
        this.mapInfo = mapInfo;
        this.mapOption = mapOption;
        this.context = context;
        this.menuClass = menuClass;
        this.menu = null;
        this.gui = null;
        this.setting = null;
    }
    removeMenu() {
        if (this.menu) {
            if (this.menuClass !== null) this.menuClass.removeMenu();
            this.context.removeMenu();
            this.gui.removeFolder(this.menu);

            this.menu = null;
        }
    }

    async getMapData(value) {
        if (value < 0) {
            alert('map을 선택하세요. ');
            return;
        }
        this.removeMenu();

        const option = {
            clientId: mapList[value].clientId,
            clientSecret: mapList[value].clientSecret,
            serverType: 'SERVER_REAL',
        };
        //mapData 가져오기

        const mapData = await this.dabeeoMaps.getMapData(option);

        this.menu = this.gui.addFolder('지도 메뉴');
        // this.mapInfo.init(this.menu, mapData);
        this.mapOption.init(this.menu, mapData, this.mapContainer);
        const map = await this.mapOption.showMap(value);
    }

    async getMap(value) {
        this.removeMenu();

        const option = {
            clientId: this.setting.clientId,
            clientSecret: this.setting.clientSecret,
            serverType: 'SERVER_REAL',
        };
        //mapData 가져오기

        const mapData = await this.dabeeoMaps.getMapData(option);

        this.menu = this.gui.addFolder('지도 메뉴');
        // this.mapInfo.init(this.menu, mapData);
        this.mapOption.init(this.menu, mapData, this.mapContainer);
        const map = await this.mapOption.showMap(value);
    }

    init(gui) {
        this.gui = gui;
        this.setting = {
            mapIndex: -1,
            clientId: '',
            clientSecret: '',
            getMapData: this.getMapData.bind(this),
            getMap: this.getMap.bind(this),
        };
        let mapSetting = {
            선택: -1,
        };
        mapList.forEach((element, index) => {
            mapSetting[element.name] = index;
        });
        const setting = this.setting;
        const getMapClient = gui.addFolder('맵 정보 지정하여 가져오기');
        getMapClient.add(setting, 'clientId');
        getMapClient.add(setting, 'clientSecret');
        getMapClient.add(setting, 'getMap');
        gui.add(setting, 'mapIndex', mapSetting).name('지도선택').onChange(this.getMapData.bind(this));
        return this.menu;
    }
}
