export class ObjectsMoreMenu {
    constructor() {
        this.mapData = null;
        this.map = null;
        this.mapContainer = null;
        this.menu = null;
        this.objectList = null; 
    }
    removeMenu() {
        if (this.menu) {
            this.gui.removeFolder(this.menu);
            this.menu = null;
        }
    }

    async init(menu, mapData, map, mapContainer) {
        this.mapData = mapData;
        this.map = map;
        this.mapContainer = mapContainer;
        this.menu = menu.addFolder("More");
        const currentFloor = this.map.context.getCurrentFloor().id;
        const objects = await this.mapData.dataObject.getObjects(currentFloor);
        this.objectList = objects.reduce((result, cur) => {
                return [...result, cur.id]; },[""]);
        this.initMoreSetting();
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

    single_h_to_s() {
        const option = {
            color: "#00ffff",
            activeDest: true,
            opacity: 0.3,
            duration: 1000,
            isRepeat: true,
            isYoyo: true,
            isAnimate: true,
            ids: [this.objectList[1]],
        };
        this.map.objects.set(option);
        setTimeout(() => {
            this.map.objects.hide(this.objectList[1]);
            console.log("hide");
        }, 1000);
        setTimeout(() => {
            this.map.objects.show(this.objectList[1]);
            console.log("show");
        }, 3000);
        setTimeout(() => {
            this.map.objects.hide(this.objectList[1]);
            console.log("hide");
        }, 5000);
        setTimeout(() => {
            this.map.objects.show([this.objectList[1], this.objectList[2], this.objectList[3]]);
            console.log("show");
        }, 7000);
        setTimeout(() => {
            this.map.objects.hide(this.objectList[1]);
            console.log("hide");
        }, 9000);
        setTimeout(() => {
            this.map.objects.show();
            console.log("show");
        }, 11000);
        setTimeout(async () => {
            await this.map.objects.reset(); 
        }, 12000);
    }

    arr_h_to_s() {
        const Option = {
            color: "#00ffff",
            activeDest: true,
            opacity: 0.3,
            duration: 1000,
            isRepeat: true,
            isYoyo: true,
            isAnimate: true,
            ids: [this.objectList[1], this.objectList[2],this. objectList[3]],
        };
        this.map.objects.set(Option);
        setTimeout(() => {
            this.map.objects.hide([this.objectList[1], this.objectList[2], this.objectList[3]]);
            console.log("hide");
        }, 1000);
        setTimeout(() => {
            this.map.objects.show(this.objectList[1]);
            console.log("show");
        }, 3000);
        setTimeout(() => {
            this.map.objects.show();
        }, 4000);
        setTimeout(() => {
            this.map.objects.hide([this.objectList[1], this.objectList[2], this.objectList[3]]);
            console.log("hide");
        }, 5000);
        setTimeout(() => {
            this.map.objects.show([this.objectList[1], this.objectList[2], this.objectList[3]]);
            console.log("show");
        }, 7000);
        setTimeout(() => {
            this.map.objects.hide([this.objectList[1], this.objectList[2], this.objectList[3]]);
            console.log("hide");
        }, 9000);
        setTimeout(() => {
            this.map.objects.show();
            console.log("show");
        }, 11000);
        setTimeout(async () => {
            await this.map.objects.reset();
        }, 12000);
    }

    all_h_to_s() {
        const Option = {
            color: "#00ffff",
            activeDest: true,
            opacity: 0.3,
            duration: 1000,
            isRepeat: true,
            isYoyo: true,
            isAnimate: true,
        };
        this.map.objects.set(Option);
        setTimeout(() => {
            this.map.objects.hide();
            console.log("hide");
        }, 1000);
        setTimeout(() => {
            this.map.objects.show(this.objectList[1]);
            console.log("show");
        }, 3000);
        setTimeout(() => {
            this.map.objects.show();
        }, 4000);
        setTimeout(() => {
            this.map.objects.hide();
            console.log("hide");
        }, 5000);
        setTimeout(() => {
            this.map.objects.show([this.objectList[1], this.objectList[2], this.objectList[3]]);
            console.log("show");
        }, 7000);
        setTimeout(() => {
            this.map.objects.show();
        }, 8000);
        setTimeout(() => {
            this.map.objects.hide();
            console.log("hide");
        }, 9000);
        setTimeout(() => {
            this.map.objects.show();
            console.log("show");
        }, 11000);
        setTimeout(async () => {
            await this.map.objects.reset();
        }, 12000);
    }

    single_s_to_h() {
        const Option = {
            color: "#00ffff",
            activeDest: true,
            opacity: 0.3,
            duration: 1000,
            isRepeat: true,
            isYoyo: true,
            isAnimate: true,
            ids: [this.objectList[1]],
        };
        this.map.objects.set(Option);
        setTimeout(() => {
            this.map.objects.hide();
            console.log("hide");
        }, 1000);
        setTimeout(() => {
            this.map.objects.show(this.objectList[1]);
            console.log("show");
        }, 3000);
        setTimeout(() => {
            this.map.objects.show();
        }, 4000);
        setTimeout(() => {
            this.map.objects.hide([this.objectList[1], this.objectList[2], this.objectList[3]]);
            console.log("hide");
        }, 5000);
        setTimeout(() => {
            this.map.objects.show(this.objectList[1]);
            console.log("show");
        }, 7000);
        setTimeout(() => {
            this.map.objects.show();
        }, 8000);
        setTimeout(() => {
            this.map.objects.hide(this.objectList[1]);
            console.log("hide");
        }, 9000);
        setTimeout(() => {
            this.map.objects.show(this.objectList[1]);
            console.log("show");
        }, 11000);
        setTimeout(async () => {
            this.map.objects.show();
            await this.map.objects.reset();
        }, 12000);
    }

    arr_s_to_h = () => {
        const Option = {
            color: "#00ffff",
            activeDest: true,
            opacity: 0.3,
            duration: 1000,
            isRepeat: true,
            isYoyo: true,
            isAnimate: true,
            ids: [this.objectList[1], this.objectList[2], this.objectList[3]],
        };
        this.map.objects.set(Option);
        setTimeout(() => {
            this.map.objects.hide();
            console.log("hide");
        }, 1000);
        setTimeout(() => {
            this.map.objects.show([this.objectList[1], this.objectList[2], this.objectList[3]]);
            console.log("show");
        }, 3000);
        setTimeout(() => {
            this.map.objects.show();
        }, 4000);
        setTimeout(() => {
            this.map.objects.hide([this.objectList[1], this.objectList[2], this.objectList[3]]);
            console.log("hide");
        }, 5000);
        setTimeout(() => {
            this.map.objects.show([this.objectList[1], this.objectList[2], this.objectList[3]]);
            console.log("show");
        }, 7000);
        setTimeout(() => {
            this.map.objects.show();
        }, 8000);
        setTimeout(() => {
            this.map.objects.hide(this.objectList[1]);
            console.log("hide");
        }, 9000);
        setTimeout(() => {
            this.map.objects.show([this.objectList[1], this.objectList[2], this.objectList[3]]);
            console.log("show");
        }, 11000);
        setTimeout(async () => {
            this.map.objects.show();
            await this.map.objects.reset();
        }, 12000);
    };

    all_s_to_h() {
        // const Option ={
        //     color: "#00ffff",
        //     ids :[this.objectList[1]]
        // activeDest: true,
        // opacity: 0.3,
        // duration: 1000,
        // isRepeat: true,
        // isYoyo: true,
        // isAnimate: true,
        // }
        // map.objects.set(Option)
        setTimeout(() => {
            this.map.objects.hide();
            console.log("hide");
        }, 1000);
        setTimeout(() => {
            this.map.objects.show();
            console.log("show");
        }, 3000);
        setTimeout(() => {
            this.map.objects.hide([this.objectList[1], this.objectList[2], this.objectList[3]]);
            console.log("hide");
        }, 5000);
        setTimeout(() => {
            this.map.objects.show();
            console.log("show");
        }, 7000);
        setTimeout(() => {
            this.map.objects.hide(this.objectList[1]);
            console.log("hide");
        }, 9000);
        setTimeout(() => {
            this.map.objects.show();
            console.log("show");
        }, 11000);
        setTimeout(async () => {
            await this.map.objects.reset();
        }, 12000);
    }
}
