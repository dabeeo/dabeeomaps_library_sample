export class TagMenu {
    constructor(gui, mapData, map, mapContainer) {
        this.gui = gui;
        this.map = map;
        this.mapData = mapData; 
        this.mapContainer = mapContainer; 
    }
    createTag= ()=> {
        const tag = document.createElement('div');
        tag.style.width = '100px';
        tag.style.height = '50px';
        tag.style.backgroundColor = 'grey';
        tag.style.textAlign = "center",
        tag.textContent = 'test';
        return tag;
    }
    init() {
        function set(value) {
            const tag =this.createTag ();
            console.log(value);
            const option = {
                position : {
                    x: setting.x,
                    y: setting.y, 
                    z: setting.z
                },
                tag : tag,
                floorId : setting.floor
            };
            console.log(option);
            const item = this.map.tag.set(option);
            console.log(item);
            tag.addEventListener('click', () => {
                this.map.tag.clear(item.id); // id에 해당하는 태그 삭제 메소드
            });
        }
        const clear = (value) => {
            this.map.tag.clearAll();          // 모든 태그 삭제 메소드
        }
        const setMarkerTag = async (value) => {
            const tag = this.createTag ();
            const list = await this.map.markers.set({      // 생성된 marker들의 ID List를 저장합니다.
                marker: [
                    {
                        x: 1000,
                        y: 1000,
                    }
                ]
            });
    
            const item = this.map.tag.setMarkerTag({ parentId: list[0], pos: 'BOTTOM', tag: tag });
            tag.addEventListener('click', () => {
                this.map.tag.clear(item.id); // id에 해당하는 태그 삭제 메소드
            });
            let markerTag = null;
            this.mapContainer.addEventListener('marker-click', (e) => {
                this.map.markers.clear(e.detail[0].userData.id);//클릭삭제
                // markerTag = this.map.tag.setMarkerTag({ parentId: e.detail[0].userData.id, pos: 'TOP', tag: tag})//클릭생성
            });
        }

        const setPoiTag = async (value) => {
            const tag = this.createTag ();
            const poi = this.mapData.dataPoi.getPois()[0];
            this.mapContainer.addEventListener('poi-click', (e) => {
                    console.log('poi click 에 대한 결과값', e.detail);
                    if (e.detail[0]) {
                        this.map.tag.setPOITag({ parentId: e.detail[0].id, pos: 'LEFT', tag: tag});
                    }
                });         
        }

        const setting = {
            x: "1000",
            y: "2000",
            z: "100",
            floor: "",
            set: set.bind(this),
            clear : clear,
            setMarkerTag : setMarkerTag,
            setPoiTag : setPoiTag,
        };
        const menu = this.gui.addFolder("tag");

        const floorSetting = this.mapData.dataFloor.getFloors().reduce((prev, cur) => {
            return {...prev, [cur.name[0].text]: cur.id};
        }, {"not defined":""});

        // menu.open();
        menu.add(setting, "x");
        menu.add(setting, "y");
        menu.add(setting, "z");
        menu.add(setting, "floor", floorSetting);
        menu.add(setting, "set");
        menu.add(setting, "clear");
        menu.add(setting, "setMarkerTag");
        menu.add(setting, "setPoiTag");
        return menu;
    }
}
