export class IconMenu {
    constructor(gui) {
        this.gui = gui;
        this.iconSetting = null;
        this.option = null; 
    }

    init() {
        this.iconSetting = {
            width: "",
            height: "",
            positionZ: "",
            anchorX: "0",
            anchorY: "0",
            iconUrl: "",
            async: true,
            visibleIcon: true,
            apply : this.apply.bind(this),
            reset : this.reset.bind(this)
        };
        return this.initIconFolder();
    }
    reset() {
        this.iconSetting.async=true;
        this.iconSetting.width="";
        this.iconSetting.height="";
        this.iconSetting.positionZ="";
        this.iconSetting.anchorX="";
        this.iconSetting.anchorY="";
        this.iconSetting.iconUrl="";
        this.iconSetting.visibleIcon=true;
        
        this.option = null; 
    }

    apply() {
        let iconSetting = this.iconSetting; 

        const option = {
            iconUrl: iconSetting.iconUrl,
            width: iconSetting.width,
            height: iconSetting.height,
            positionZ: iconSetting.positionZ,
            anchor : {
                x: iconSetting.anchorX,
                y: iconSetting.anchorY,
            },
            async: iconSetting.async,
            visibleIcon: iconSetting.visibleIcon,
        }
        this.option = option; 
    }
    getOption() {
        return this.option;
    }

    initIconFolder() {
        const iconUrls = ["", "https://assets.dabeeomaps.com/image/ico/img_person-3x.png", 
        "https://assets.dabeeomaps.com/image/ico/img_end.png",
        "https://assets.dabeeomaps.com/image/ico/img_start.png"]
        const iconSetting = this.iconSetting;
        const iconGui = this.gui.addFolder("icon");
        // iconGui.open();
        iconGui.add(iconSetting, "width").listen();
        iconGui.add(iconSetting, "height").listen();
        iconGui.add(iconSetting, "positionZ").listen();
        iconGui.add(iconSetting, "anchorX").listen();
        iconGui.add(iconSetting, "anchorY").listen();
        iconGui.add(iconSetting, "async").listen();
        iconGui.add(iconSetting, "iconUrl", iconUrls).listen();
        iconGui.add(iconSetting, "visibleIcon").listen();
        iconGui.add(iconSetting, "apply");
        iconGui.add(iconSetting, "reset");

        return iconGui;
    }
}
