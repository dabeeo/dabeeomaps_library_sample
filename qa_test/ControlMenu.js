export class ControlMenu {
    constructor() {
        this.gui = null;
        this.mapData = null;
        this.map = null;
        this.mapContainer = null;
        this.menu = null; 
        this.transitionSetting = null; 
    }
    removeMenu() {
        if (this.menu) {
            this.gui.removeFolder(this.menu);
            this.menu = null;
        }
    }
    init(gui, mapData, map, mapContainer) {
        this.gui = gui;
        this.mapData = mapData;
        this.map = map;
        this.mapContainer = mapContainer;
        this.menu= this.gui.addFolder("Control");
        this.initTransition(this.menu);
        this.initSetOption(this.menu);
        this.initChangeZoom(this.menu);
        this.initMoveTo(this.menu);
        this.initSet(this.menu);
        this.initFocus(this.menu);
        this.initZoomIn(this.menu);
        this.initZoomOut(this.menu);
        this.initReset(this.menu);
        this.initztest(this.menu);
        this.initMtest(this.menu);
        this.initStest(this.menu);
        return this.menu;
    }

    initTransition(gui) {
        this.transitionSetting = {
            transition: false,
            transition2: true,
        };        
        gui.add(this.transitionSetting, "transition");
    }
    initSetOption(gui) {
        const setOption = (value) => {
            const option = {};
            const controlRangeOption = {};

            let zoomOption = {};
            for (let key in zoomSetting) if (zoomSetting[key] != "") zoomOption[key] = Number(zoomSetting[key]);
            if (Object.keys(zoomOption).length) controlRangeOption.zoom = zoomOption;

            let rotateOption = {};
            for (let key in rotateSetting) if (rotateSetting[key] != "") rotateOption[key] = Number(rotateSetting[key]);
            if (Object.keys(rotateOption).length) controlRangeOption.rotate = rotateOption;

            let tiltOption = {};
            for (let key in tiltSetting) if (tiltSetting[key] != "") tiltOption[key] = Number(tiltSetting[key]);
            if (Object.keys(tiltOption).length) controlRangeOption.tilt = tiltOption;

            if (Object.keys(controlRangeOption).length) option.controlRangeOption = controlRangeOption;

            mouseSetting.buttonOption = buttonSetting;
            option.mouseOption = mouseSetting;  
            option.touchOption = touchSetting;

            console.log(option);
            this.map.control.setOption(option);
        };

        const menu = gui.addFolder("SetOption");
        const controlRangeMenu = menu.addFolder("controlRange");
        controlRangeMenu.open();

        const zoomSetting = {
            min: "",
            max: "",
        };
        const zoomMenu = controlRangeMenu.addFolder("zoom");
        // zoomMenu.open();
        zoomMenu.add(zoomSetting, "min");
        zoomMenu.add(zoomSetting, "max");

        const rotateSetting = {
            min: "",
            max: "",
        };
        const rotateMenu = controlRangeMenu.addFolder("rotate");
        // rotateMenu.open();
        rotateMenu.add(rotateSetting, "min");
        rotateMenu.add(rotateSetting, "max");

        const tiltSetting = {
            min: "",
            max: "",
        };
        const tiltMenu = controlRangeMenu.addFolder("tilt");
        // tiltMenu.open();
        tiltMenu.add(tiltSetting, "min");
        tiltMenu.add(tiltSetting, "max");
        const actionSetting = {
            setOption: setOption,
        };

        const mouseSetting= {
            enableZoom: true,
            enableRotate: true,
            enablePan: true,
            enableTilt: true,
        }
        const mouseMenu = menu.addFolder("mouse");
        // mouseMenu.open(); 
        mouseMenu.add(mouseSetting, "enableZoom");
        mouseMenu.add(mouseSetting, "enableRotate");
        mouseMenu.add(mouseSetting, "enablePan");
        mouseMenu.add(mouseSetting, "enableTilt");

        const buttonSetting = {
            left: 'PAN',
            middle: 'ZOOM',
            right: 'ROTATE'
        }
        const buttonSettingOption = ["PAN", "ZOOM", "ROTATE"]
        const buttonMenu = mouseMenu.addFolder("button");
        // buttonMenu.open();
        buttonMenu.add(buttonSetting, "left",  buttonSettingOption);        
        buttonMenu.add(buttonSetting, "middle", buttonSettingOption );        
        buttonMenu.add(buttonSetting, "right", buttonSettingOption );     

        const touchSetting = {
            enableZoom: true,
            enableRotate: true,
            enablePan: true,
            enableTilt: true,
        }
        const touchMenu = menu.addFolder("touch");
        // touchMenu.open(); 
        touchMenu.add(touchSetting, "enableZoom");
        touchMenu.add(touchSetting, "enableRotate");
        touchMenu.add(touchSetting, "enablePan");
        touchMenu.add(touchSetting, "enableTilt");

        menu.add(actionSetting, "setOption");
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
            changeZoom: changeZoom,
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

    initztest(gui) {
        const ztest = (value) => {
            const option = {
                transition: this.transitionSetting.transition,
            };
            this.map.control.zoomIn(option);
            setTimeout(() => {
                this.map.control.zoomOut(option);
            }, 1000);
            const option2 = {
                transition: this.transitionSetting.transition2,
            };
            setTimeout(() => {
                this.map.control.zoomIn(option2);
            }, 3000);
            setTimeout(() => {
                this.map.control.zoomOut(option2);
            }, 4000);
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

    initMtest(gui) {
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
            setTimeout(() => {
                this.map.control.moveTo(option);
            }, 1000);
            setTimeout(() => {
                this.map.control.moveTo(option2);
            }, 3000);
            setTimeout(() => {
                this.map.control.moveTo(option3);
            }, 5000);
            setTimeout(() => {
                this.map.control.moveTo(option4);
            }, 7000);
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
            const option = {};
            for (let key in setting) {
                if (setting[key] != "") option[key] = Number(setting[key]);
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
        };
        const menu = gui.addFolder("Set");
        // menu.open();
        menu.add(setting, "rotation");
        menu.add(setting, "tilt");
        menu.add(setting, "zoom");
        menu.add(settingActonSet, "set");
    }

    initStest(gui) {
        const Stest = (value) => {
            const option = {
                transition: this.transitionSetting.transition,
                zoom: 20,
                rotation: 45,
                tilt: 10,
            };
            const option2 = {
                transition: this.transitionSetting.transition,
                zoom: 24,
                rotation: 180,
                tilt: 50,
            };
            const option3 = {
                transition: this.transitionSetting.transition2,
                zoom: 20,
                rotation: 45,
                tilt: 10,
            };
            const option4 = {
                transition: this.transitionSetting.transition2,
                zoom: 24,
                rotation: 180,
                tilt: 50,
            };
            setTimeout(() => {
                this.map.control.set(option);
            }, 1000);
            setTimeout(() => {
                this.map.control.set(option2);
            }, 3000);
            setTimeout(() => {
                this.map.control.set(option3);
            }, 5000);
            setTimeout(() => {
                this.map.control.set(option4);
            }, 7000);
        };
        const setting = {
            Stest: Stest,
        };
        gui.add(setting, "Stest");
    }

    initFocus(gui) {
        const focusTo = (value) => {
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
                },
            };
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
        };
        const settingFocusTo = {
            type: "OBJECT_ALL",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            focusTo: focusTo,
            // 'clearObjects' :clearObejcts
        };
        const focusToMenu = gui.addFolder("Focus To");
        // focusToMenu.open();
        // const focusType = ['OBJECT_ALL', 'OBJECT', 'NAVIGATION'];
        const focusType = ["OBJECT_ALL", "OBJECT"];
        focusToMenu.add(settingFocusTo, "type", focusType);
        focusToMenu.add(settingFocusTo, "top", 0, 2000);
        focusToMenu.add(settingFocusTo, "left", 0, 2000);
        focusToMenu.add(settingFocusTo, "bottom", 0, 2000);
        focusToMenu.add(settingFocusTo, "right", 0, 2000);
        focusToMenu.add(settingFocusTo, "focusTo");
    }
}
