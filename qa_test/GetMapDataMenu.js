import { maps } from "./mapList.js";

export class GetMapDataMenu {
    constructor( dabeeoMaps, mapContainer, mapInfo, mapOption, context, menuClass) {
        this.dabeeoMaps  = dabeeoMaps; 
        this.mapContainer = mapContainer;
        this.mapInfo = mapInfo;
        this.mapOption = mapOption;
        this.context = context;
        this.menuClass = menuClass; 
        this.menu = null; 
        this.gui = null; 
        this.setting = null; 

    }
    removeMenu () {
        if (this.menu) {
            this.menuClass.removeMenu(); 
            this.context.removeMenu();
            this.gui.removeFolder(this.menu);
         
            this.menu = null; 
        }
    }

    async getMapData (value) {

        if (value < 0) {
            alert("map을 선택하세요. ");
            return;
        }
        this.removeMenu();

        const option = {
            clientId: maps[value].clientId,
            clientSecret: maps[value].clientSecret,
            serverType: "SERVER_REAL",
        };
        //mapData 가져오기

        const mapData = await this.dabeeoMaps.getMapData(option);

        this.menu = this.gui.addFolder("mapMenu");
        this.mapInfo.init(this.menu, mapData);
        this.mapOption.init(this.menu, mapData, this.mapContainer);
        const map = await this.mapOption.showMap(value);
    }

    async getMap (value) {

        this.removeMenu();

        const option = {
            clientId: this.setting.clientId,
            clientSecret: this.setting.clientSecret,
            serverType: "SERVER_REAL",
        };
        //mapData 가져오기

        const mapData = await this.dabeeoMaps.getMapData(option);

        this.menu = this.gui.addFolder("mapMenu");
        this.mapInfo.init(this.menu, mapData);
        this.mapOption.init(this.menu, mapData, this.mapContainer);
        const map = await this.mapOption.showMap(value);
    }

    init(gui) {
        this.gui = gui; 
        this.setting = {
            mapIndex: -1,
            clientId: "",
            clientSecret : "",
            getMapData: this.getMapData.bind(this),
            getMap:this.getMap.bind(this),
        };
        const mapSetting = {
            선택: -1,
            사무실: 0,
            이케아: 1,
            삼성서울병원전경: 2,
            삼성서울병원실내: 3,
        }
        const setting = this.setting; 
        const getMapClient = gui.addFolder("get Map by client info ");
        getMapClient.add(setting, "clientId");
        getMapClient.add(setting, "clientSecret");
        getMapClient.add(setting, "getMap");
        gui.add(setting, "mapIndex", mapSetting).onChange(this.getMapData.bind(this));
        return this.menu; 
    }

}
