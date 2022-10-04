export class PoisMoreMenu {
    constructor() {
        this.mapData = null;
        this.map = null;
        this.mapContainer = null;
        this.menu = null;
        this.poiList = null;
    }
    removeMenu() {
        if (this.menu) {
            this.gui.removeFolder(this.menu);
            this.menu = null;
        }
    }

    init(menu, mapData, map, mapContainer) {
        this.mapData = mapData;
        this.map = map;
        this.mapContainer = mapContainer;
        this.menu = menu.addFolder("More");
        this.initMoreSetting();
        const currentFloor = this.map.context.getCurrentFloor().id;
        this.poiList = this.mapData.dataPoi.getPois().reduce((result, cur) => {
            if (currentFloor == cur.floorId) result.push(cur.id);
            return result; },[""]);

        return this.menu;
    }
    
    initMoreSetting() {
        const menu = this.menu;

        const setting = {
            single_h_to_s: this.single_h_to_s.bind(this),
            arr_h_to_s: this.arr_h_to_s.bind(this),
            all_h_to_s: this.all_h_to_s.bind(this),
            single_s_to_h: this.single_s_to_h.bind(this),
            arr_s_to_h: this.arr_s_to_h.bind(this),
            all_s_to_h: this.all_s_to_h.bind(this),
        };

        menu.add(setting, "single_h_to_s");
        menu.add(setting, "arr_h_to_s");
        menu.add(setting, "all_h_to_s");
        menu.add(setting, "single_s_to_h");
        menu.add(setting, "arr_s_to_h");
        menu.add(setting, "all_s_to_h");
    }

    single_h_to_s(value) {
        const option = {
            outerColor: "black",
            innerColor: "red",
            scale: 3,
            ids: this.poiList[1],
        };
        console.log(this.poiList[1]);
        this.map.pois.set(option);
        setTimeout(() => {
            this.map.pois.hide(this.poiList[1]);
            console.log("hide");
        }, 1000);
        setTimeout(() => {
            this.map.pois.show(this.poiList[1]);
            console.log("show");
        }, 3000);
        setTimeout(() => {
            this.map.pois.hide(this.poiList[1]);
            console.log("hide");
        }, 5000);
        setTimeout(() => {
            this.map.pois.show([this.poiList[1], this.poiList[2], this.poiList[3]]);
            console.log("show");
        }, 7000);
        setTimeout(() => {
            this.map.pois.hide(this.poiList[1]);
            console.log("hide");
        }, 9000);
        setTimeout(() => {
            this.map.pois.show();
            console.log("show");
        }, 11000);
        setTimeout(() => {
            this.map.pois.reset();
        }, 12000);
    }

    arr_h_to_s(value) {
        const option = {
            ids: [this.poiList[1], this.poiList[2], this.poiList[3]],
            outerColor: "black",
            innerColor: "red",
            scale: 3,
        };
        this.map.pois.set(option);
        setTimeout(() => {
            this.map.pois.hide([this.poiList[1], this.poiList[2], this.poiList[3]]);
            console.log("hide");
        }, 1000);
        setTimeout(() => {
            this.map.pois.show(this.poiList[1]);
            console.log("show");
        }, 3000);
        setTimeout(() => {
            this.map.pois.hide([this.poiList[1], this.poiList[2], this.poiList[3]]);
            console.log("hide");
        }, 5000);
        setTimeout(() => {
            this.map.pois.show([this.poiList[1], this.poiList[2], this.poiList[3]]);
            console.log("show");
        }, 7000);
        setTimeout(() => {
            this.map.pois.hide([this.poiList[1], this.poiList[2], this.poiList[3]]);
            console.log("hide");
        }, 9000);
        setTimeout(() => {
            this.map.pois.show();
            console.log("show");
        }, 11000);
        setTimeout(() => {
            this.map.pois.reset();
        }, 12000);
    }

    all_h_to_s(value) {
        const option = {
            // ids: [this.poiList[1],this.poiList[2],this.poiList[3]] ,
            outerColor: "black",
            innerColor: "red",
            scale: 3,
        };
        this.map.pois.set(option);
        setTimeout(() => {
            this.map.pois.hide();
            console.log("hide");
        }, 1000);
        setTimeout(() => {
            this.map.pois.show(this.poiList[1]);
            console.log("show");
        }, 3000);
        setTimeout(() => {
            this.map.pois.hide();
            console.log("hide");
        }, 5000);
        setTimeout(() => {
            this.map.pois.show([this.poiList[1], this.poiList[2], this.poiList[3]]);
            console.log("show");
        }, 7000);
        setTimeout(() => {
            this.map.pois.hide();
            console.log("hide");
        }, 9000);
        setTimeout(() => {
            this.map.pois.show();
            console.log("show");
        }, 11000);
        setTimeout(() => {
            this.map.pois.reset();
        }, 12000);
    }

    single_s_to_h(value) {
        const option = {
            ids: [this.poiList[1]],
            outerColor: "black",
            innerColor: "red",
            scale: 3,
        };
        this.map.pois.set(option);
        setTimeout(() => {
            this.map.pois.hide();
            console.log("hide");
        }, 1000);
        setTimeout(() => {
            this.map.pois.show(this.poiList[1]);
            console.log("show");
        }, 3000);
        setTimeout(() => {
            this.map.pois.show();
        }, 4000);
        setTimeout(() => {
            this.map.pois.hide([this.poiList[1], this.poiList[2], this.poiList[3]]);
            console.log("hide");
        }, 5000);
        setTimeout(() => {
            this.map.pois.show(this.poiList[1]);
            console.log("show");
        }, 7000);
        setTimeout(() => {
            this.map.pois.show();
        }, 8000);
        setTimeout(() => {
            this.map.pois.hide(this.poiList[1]);
            console.log("hide");
        }, 9000);
        setTimeout(() => {
            this.map.pois.show(this.poiList[1]);
            console.log("show");
        }, 11000);
        setTimeout(() => {
            this.map.pois.show();
            this.map.pois.reset();
        }, 12000);
    }

    arr_s_to_h(value) {
        const option = {
            ids: [this.poiList[1], this.poiList[2], this.poiList[3]],
            outerColor: "black",
            innerColor: "red",
            scale: 3,
        };
        this.map.pois.set(option);
        setTimeout(() => {
            this.map.pois.hide();
            console.log("hide");
        }, 1000);
        setTimeout(() => {
            this.map.pois.show([this.poiList[1], this.poiList[2], this.poiList[3]]);
            console.log("show");
        }, 3000);
        setTimeout(() => {
            this.map.pois.show();
        }, 4000);
        setTimeout(() => {
            this.map.pois.hide([this.poiList[1], this.poiList[2], this.poiList[3]]);
            console.log("hide");
        }, 5000);
        setTimeout(() => {
            this.map.pois.show([this.poiList[1], this.poiList[2], this.poiList[3]]);
            console.log("show");
        }, 7000);
        setTimeout(() => {
            this.map.pois.show();
        }, 8000);
        setTimeout(() => {
            this.map.pois.hide(this.poiList[1]);
            console.log("hide");
        }, 9000);
        setTimeout(() => {
            this.map.pois.show([this.poiList[1], this.poiList[2], this.poiList[3]]);
            console.log("show");
        }, 11000);
        setTimeout(() => {
            this.map.pois.show();
            this.map.pois.reset();
        }, 12000);
    }

    all_s_to_h(value) {
        const option = {
            // ids: [this.poiList[1]] ,
            outerColor: "black",
            innerColor: "red",
            scale: 3,
        };
        this.map.pois.set(option);
        setTimeout(() => {
            this.map.pois.hide();
            console.log("hide");
        }, 1000);
        setTimeout(() => {
            this.map.pois.show();
            console.log("show");
        }, 3000);
        setTimeout(() => {
            this.map.pois.hide([this.poiList[1], this.poiList[2], this.poiList[3]]);
            console.log("hide");
        }, 5000);
        setTimeout(() => {
            this.map.pois.show();
            console.log("show");
        }, 7000);
        setTimeout(() => {
            this.map.pois.show();
        }, 8000);
        setTimeout(() => {
            this.map.pois.hide(this.poiList[1]);
            console.log("hide");
        }, 9000);
        setTimeout(() => {
            this.map.pois.show();
            console.log("show");
        }, 11000);
        setTimeout(() => {
            this.map.pois.show();
            this.map.pois.reset();
        }, 12000);
    }
}
