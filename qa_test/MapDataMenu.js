export class MapDataMenu {
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
        this.menu= this.gui.addFolder("MapData");
        this.initFindPoi(this.menu);
        return this.menu;
    }
    
    initFindPoi(gui) {

        let poisMenu = null;

        const changePoi = async (value) => {
            console.log(value);
            const option = {
                ids: value,
                outerColor: "red",
                innerColor: "blue",
                scale: 1.5,
            };
            const pois = this.mapData.dataPoi.find(value, {type: "iD"});
            // await this.map.context.changeFloor(pois.floorId);
            // await this.map.pois.reset();
            console.log(option);
            this.map.pois.set(option);
        };

        function findByTitle(value) {
            const pois = this.mapData.dataPoi.find(value, {type: "title"}).reduce((result, cur) => { return  {...result, [cur.title]: cur.id} }, {});
            poisMenu = poisMenu.options(pois).onChange(changePoi);
        }
        function findByID(value) {
            const pois = this.mapData.dataPoi.find(value, {type: "iD"});
            poisMenu = poisMenu.options({[pois.title]:pois.id}).onChange(changePoi);
        }

        function findByFloorId(value) {
            const pois = this.mapData.dataPoi.find(value, {type: "floorId"}).reduce((result, cur) => { return  {...result, [cur.title]: cur.id} }, {});
            poisMenu = poisMenu.options(pois).onChange(changePoi);;
        }
        function findByGroupCode(value) {
            const pois = this.mapData.dataPoi.find(value, {type: "groupCode"}).reduce((result, cur) => { return  {...result, [cur.title]: cur.id} }, {});
            poisMenu = poisMenu.options(pois).onChange(changePoi);
        }

        const floorList = this.mapData.dataFloor.getFloors().reduce((prev, cur) => { return [...prev, cur.id] }, []);
        const poiList = this.mapData.dataPoi.getPois().reduce((result, cur) => { return [...result, cur.id] }, []);
        const groupList = this.mapData.dataGroupCode.findAll();

        const setting = {
            findByTitle: "",
            findByID: "",
            findByFloorId: "",
            findByGroupCode: "",
            poi: "",
        };
        const menu = gui.addFolder("find Poi");
        // menu.open();
        menu.add(setting, "findByTitle").onFinishChange(findByTitle.bind(this));
        menu.add(setting, "findByID", poiList).onChange(findByID.bind(this));
        menu.add(setting, "findByFloorId", floorList).onChange(findByFloorId.bind(this));
        menu.add(setting, "findByGroupCode", groupList).onChange(findByGroupCode.bind(this));

        poisMenu = menu.add(setting, "poi").onChange(changePoi);
    }
    removeMenu() {
        if (this.menu) {
            this.gui.removeFolder(this.menu);
            this.menu = null;
        }
    }
    
}
