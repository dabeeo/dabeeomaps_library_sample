export class ControlMenu {
    constructor(gui, mapData, map) {
        this.gui = gui;
        this.map = map;
        this.mapData = mapData;
        this.transitionGui = null; 
        this.transitionSetting = null; 
    }

    init() {
        const gui = this.gui.addFolder("Control");
        this.transitionSetting = {
            transition: false,
            transition2: true,
        }

        gui.add(this.transitionSetting, "transition");

        this.initChangeZoom(gui);
        this.initMoveTo(gui);
        this.initSet(gui);
        this.initFocus(gui);
        this.initZoomIn(gui);
        this.initZoomOut(gui);
        this.initReset(gui);
        this.initztest(gui);
        this.initMtest(gui);
        this.initStest(gui);
        return gui; 
    }

    //Zoom In
    initZoomIn(gui) {
        const zoomIn = (value) => {
            const option = {
                transition: this.transitionSetting.transition,
            };
            console.log(option);
            this.map.control.zoomIn(option);
        };
        const setting = {
            zoomIn: zoomIn,
        };
        gui.add(setting, "zoomIn");
    }

    //Zoom out
    initZoomOut(gui) {
        const zoomOut = (value) => {
            const option = {
                transition: this.transitionSetting.transition,
            };
            console.log(option);
            this.map.control.zoomOut(option);
        };
        const setting = {
            zoomOut: zoomOut,
        };

        gui.add(setting, "zoomOut");
    }

    initChangeZoom(gui) {
        const changeZoom = (value) => {
            console.log(value);
            const option = {
                transition: this.transitionSetting.transition,
                zoom: setting.zoom,
            };
            console.log(option);
            this.map.control.changeZoom(option);
        };
        const setting = {
            zoom: "",
            changeZoom: changeZoom
        };
        gui.add(setting, "zoom").onFinishChange(changeZoom);
    }

    //reset
    initReset(gui) {
        const reset = (value) => {
            const option = {
                transition: this.transitionSetting.transition,
            };
            console.log(option);
            this.map.control.reset(option);
        };
        const setting = {
            reset: reset,
        };
        gui.add(setting, "reset");
    }

    initztest(gui){
        const ztest = (value) => {
            const option = {
                transition: this.transitionSetting.transition,
            };
            this.map.control.zoomIn(option);
            setTimeout(()=>{
                this.map.control.zoomOut(option);
            },1000)
            const option2 = {
                transition: this.transitionSetting.transition2,
            };
            setTimeout(()=>{
                this.map.control.zoomIn(option2);
            },3000)
            setTimeout(()=>{
                this.map.control.zoomOut(option2);
            },4000)
        };
        const setting = {
            ztest: ztest,
        };
        gui.add(setting, "ztest");
    }

    //initMoveTo
    initMoveTo(gui) {
        const moveTo = (value) => {
            const option = {
                transition: this.transitionSetting.transition,
                position: {x: setting.x, y: setting.y},
            };
            console.log(option);
            this.map.control.moveTo(option);
        };
        const setting = {
            x: "",
            y: "",
            moveTo: moveTo,
        };
        const menu = gui.addFolder("Move To");
        // menu.open();
        menu.add(setting, "x");
        menu.add(setting, "y");
        menu.add(setting, "moveTo");
    }

    initMtest(gui){
        const Mtest = (value) => {
            const option = {
                transition: this.transitionSetting.transition,
                position: {x: 1000, y: 1000},
            };
            const option2 = {
                transition: this.transitionSetting.transition,
                position: {x: 2000, y: 2000},
            };
            const option3 = {
                transition: this.transitionSetting.transition2,
                position: {x: 1000, y: 1000},
            };
            const option4 = {
                transition: this.transitionSetting.transition2,
                position: {x: 2000, y: 2000},
            };
            setTimeout(()=>{
                this.map.control.moveTo(option);
            },1000)
            setTimeout(()=>{
                this.map.control.moveTo(option2);
            },3000)
            setTimeout(()=>{
                this.map.control.moveTo(option3);
            },5000)
            setTimeout(()=>{
                this.map.control.moveTo(option4);
            },7000)
            this.map.control.moveTo(option);
        };
        const setting = {
            Mtest: Mtest,
        };
        gui.add(setting, "Mtest");
    }

    //initSet

    initSet(gui) {
        const set = (value) => {
            const option={};
            for (let key in setting) {
                if (setting[key] !='')     option[key] = Number(setting[key]);
            }
            option.transition = this.transitionSetting.transition;
            console.log(option);
            this.map.control.set(option);
        };

        const setting = {
            rotation: "",
            tilt: "",
            zoom: "",
        };
        const settingActonSet = {
            set: set,
        }
        const menu = gui.addFolder("Set");
        // menu.open();
        menu.add(setting, "rotation");
        menu.add(setting, "tilt",);
        menu.add(setting, "zoom",);
        menu.add(settingActonSet, "set");
    }

    initStest(gui){
        const Stest = (value) => {
            const option={
                transition: this.transitionSetting.transition,
                zoom:20 ,rotation:45, tilt:10
            };
            const option2={
                transition: this.transitionSetting.transition,
                zoom:24 ,rotation:180, tilt:50
            };
            const option3={
                transition: this.transitionSetting.transition2,
                zoom:20 ,rotation:45, tilt:10
            };
            const option4={
                transition: this.transitionSetting.transition2,
                zoom:24 ,rotation:180, tilt:50
            };
            setTimeout(()=>{
                this.map.control.set(option);
            },1000)
            setTimeout(()=>{
                this.map.control.set(option2);
            },3000)
            setTimeout(()=>{
                this.map.control.set(option3);
            },5000)
            setTimeout(()=>{
                this.map.control.set(option4);
            },7000)
        }
        const setting = {
            Stest: Stest,
        };
        gui.add(setting, "Stest");
    }
    
    initFocus (gui) {
        const focusTo = value => {
            if (settingFocusTo.type === "OBJECT") {
                this.mapContainer.addEventListener("object-click", function (e) {
                    console.log("click one or multiple objects to focus ");
                });
                return;
            }
            const focusToOption = {
                focus: {
                    type: settingFocusTo.type,
                    // ids: objectIds
                },
                transition: this.transitionSetting.transition,
                padding: {
                    top: settingFocusTo.top,
                    left: settingFocusTo.left,
                    bottom: settingFocusTo.bottom,
                    right: settingFocusTo.right,
                }
            }
            console.log(focusToOption);
            this.map.control.focusTo(focusToOption);

            
                // this.mapContainer.addEventListener("object-click", function (e) {
                //     console.log("object click ", e.detail);
                //     let id = e.detail[0].id;
                //     console.log("id : ", id);
                //     map.control.focusTo({
                //         focus:{
                //             type:'OBJECT',
                //             ids: [id]
                //             // ids: ['OB-mxanpdYA1T2410', 'OB-aN7fGeVoze1959', 'OB-ccjURqW8hq1959']
                //         },
                //         transition:true,
                //         padding:{
                //             top: 0,
                //             left: 0,
                //             bottom: 0,
                //             right: 0,
                //         }
                //     })
                // });
            

        }
        const settingFocusTo = {
            'type': 'OBJECT_ALL',
            'top': 0,
            'left': 0,
            'bottom': 0,
            'right': 0,
            'focusTo': focusTo,
            // 'clearObjects' :clearObejcts
        }
        const focusToMenu = gui.addFolder('Focus To');
        // focusToMenu.open();
        // const focusType = ['OBJECT_ALL', 'OBJECT', 'NAVIGATION'];
        const focusType = ['OBJECT_ALL','OBJECT'];
        focusToMenu.add(settingFocusTo, "type", focusType);
        focusToMenu.add(settingFocusTo, "top", 0, 2000);
        focusToMenu.add(settingFocusTo, "left", 0, 2000);
        focusToMenu.add(settingFocusTo, "bottom", 0, 2000);
        focusToMenu.add(settingFocusTo, "right", 0, 2000);
        focusToMenu.add(settingFocusTo, "focusTo");
    }

}
