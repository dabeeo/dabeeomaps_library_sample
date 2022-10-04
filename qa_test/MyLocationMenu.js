export class MyLocationMenu {
    constructor() {
        this.gui = null;
        this.mapData = null;
        this.map = null;
        this.mapContainer = null;
        this.menu = null;
        this.setting = null;
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
        this.menu = this.gui.addFolder("My Location Menu");

        let animateApplyFlag = false; 
        let iconApplyFlag = false; 
        let anchorApplyFlag = false; 

        const set = () => {
            const option = Object.assign({}, setting);
            if (iconApplyFlag) {
                option.iconOption = iconSetting;
                if (anchorApplyFlag) 
                    option.iconOption.anchor = anchorSetting;
            }
            if (animateApplyFlag) {
                option.animate = animateSetting;
            }
            console.log(option);
            
            map.mylocation.set(option);
        };
        const clear = () => {
            map.mylocation.clear();
        };
        let animateController = null; 
        const animateApply  = () => {
            animateApplyFlag = !animateApplyFlag; 
            if (animateApplyFlag) animateController = animateController.name("animte Reset");
            else animateController = animateController.name("animate Apply");

        }
        let iconController = null; 
        const iconApply  = () => {
            iconApplyFlag = !iconApplyFlag;
            if (iconApplyFlag) iconController = iconController.name("icon Reset");
            else iconController = iconController.name("icon Apply");
        }
        let anchorController = null; 
        const anchorApply  = () => {
            anchorApplyFlag = !anchorApplyFlag; 
            if (anchorApplyFlag) anchorController = anchorController.name("anchor Reset");
            else anchorController = anchorController.name("anchor Apply");
        }
        const setting = {
            x: "3000",
            y: "1000",
            onActive: true,
        };

        const animateSetting =  {
            color: "#00ff00",
            opacity: 0.4,
            desireScale: 4,
        };
   
        const iconSetting =  {
            positionZ: "",
            iconUrl: "",
            width: "",
            height: "",
        };

        const anchorSetting = {
            x: 0.5,
            y: 0.5,
        }

        const actionSetting = {
            set: set,
            clear: clear,
            animateApply:animateApply,
            iconApply:iconApply,
            anchorApply:anchorApply,
        };
        const menu = this.menu;
        menu.add(setting, "x");
        menu.add(setting, "y");
        menu.add(setting, "onActive");
        const animateMenu = menu.addFolder("Animate setting");
        animateMenu.addColor(animateSetting, "color");
        animateMenu.add(animateSetting, "opacity");
        animateMenu.add(animateSetting, "desireScale");
        animateController =animateMenu.add(actionSetting, "animateApply");

        const iconMenu= menu.addFolder("Icon setting");
        iconMenu.add(iconSetting, "positionZ");
        iconMenu.add(iconSetting, "iconUrl", ["","https://assets.dabeeomaps.com/image/ico/img_person-3x.png"]);
        iconMenu.add(iconSetting, "width");
        iconMenu.add(iconSetting, "height");
        iconController = iconMenu.add(actionSetting, "iconApply");

        const anchorMenu = menu.addFolder("anchor setting");
        anchorMenu.add(anchorSetting, "x");
        anchorMenu.add(anchorSetting, "y");
        anchorController = anchorMenu.add(actionSetting, "anchorApply");

        menu.add(actionSetting, "set");
        menu.add(actionSetting, "clear");

        return menu;
    }
}
