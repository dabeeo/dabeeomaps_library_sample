export class ObjectsMenu {
    constructor(gui, mapData, map, mapContainer) {
        this.gui = gui;
        this.mapData = mapData;
        this.map = map;
        this.mapContainer = mapContainer;
    }
    init() {

        let objectSetting = null; 
        this.mapContainer.addEventListener("floor-changed", (e) => {
            console.log("floor-changed 에 대한 결과값", e.detail);
            const currentFloor = e.detail.id;
            const objectList = objects.reduce((result, cur) => {
                if (currentFloor == cur.floorId) result.push(cur.id);
                return result;
            }, [""]);
            objectSetting = objectSetting.options(objectList);
            // console.log(objectList);
        });

        const objects = this.mapData.dataObject.getObjects();
        const currentFloor = this.map.context.getCurrentFloor().id;
        const objectList = objects.reduce((result, cur) => {
            if (currentFloor == cur.floorId) result.push(cur.id);
            return result;
        }, [""]);
        // console.log(objectList);

        const map = this.map;
        const set = () => {
            const option = Object.assign({}, setting);
            if (actionSetting.ids) {
                option.ids = [actionSetting.ids];
            }
            console.log(option);
            map.objects.set(option);
        };
        const reset = () => {
            if (actionSetting.ids) {
                map.objects.reset(actionSetting.ids);
            } else {
                map.objects.reset();
            }
        };
        const hide = () => {
            if (actionSetting.ids) {
                map.objects.hide(actionSetting.ids);
            } else {
                map.objects.hide();
            }
        };
        const show = () => {
            if (actionSetting.ids) {
                map.objects.show(actionSetting.ids);
            } else {
                map.objects.show();
            }
        };

        const single_h_to_s = () => {
                        const Option ={
                            color: "#00ffff",
                            activeDest: true,
                            opacity: 0.3,
                            duration: 1000,
                            isRepeat: true,
                            isYoyo: true,
                            isAnimate: true,
                            ids :[objectList[1]]
                        }
                        map.objects.set(Option)
                        setTimeout(()=>{
                            map.objects.hide(objectList[1]);
                            console.log("hide")
                        },1000)
                        setTimeout(()=>{
                            map.objects.show(objectList[1]);
                            console.log("show")
                        },3000);
                        setTimeout(()=>{
                            map.objects.hide(objectList[1]);
                            console.log("hide")
                        },5000)
                        setTimeout(()=>{
                            map.objects.show([objectList[1],objectList[2],objectList[3]]);
                            console.log("show")
                        },7000)
                        setTimeout(()=>{
                            map.objects.hide(objectList[1]);
                            console.log("hide")
                        },9000)
                        setTimeout(()=>{
                            map.objects.show();
                            console.log("show")
                        },11000)
                        setTimeout(()=>{
                            map.objects.reset();
                        },12000)
                    }
            
                    const arr_h_to_s = () => {
                        const Option ={
                            color: "#00ffff",
                            activeDest: true,
                            opacity: 0.3,
                            duration: 1000,
                            isRepeat: true,
                            isYoyo: true,
                            isAnimate: true,
                            ids :[objectList[1],objectList[2],objectList[3]]
                        }
                        map.objects.set(Option)
                        setTimeout(()=>{
                            map.objects.hide([objectList[1],objectList[2],objectList[3]]);
                            console.log("hide")
                        },1000)
                        setTimeout(()=>{
                            map.objects.show(objectList[1]);
                            console.log("show")
                        },3000);
                        setTimeout(()=>{
                            map.objects.show();
                        },4000)
                        setTimeout(()=>{
                            map.objects.hide([objectList[1],objectList[2],objectList[3]]);
                            console.log("hide")
                        },5000)
                        setTimeout(()=>{
                            map.objects.show([objectList[1],objectList[2],objectList[3]]);
                            console.log("show")
                        },7000)
                        setTimeout(()=>{
                            map.objects.hide([objectList[1],objectList[2],objectList[3]]);
                            console.log("hide")
                        },9000)
                        setTimeout(()=>{
                            map.objects.show();
                            console.log("show")
                        },11000)
                        setTimeout(()=>{
                            map.objects.reset();
                        },12000)
                    }
            
                    const all_h_to_s = () => {
                        const Option ={
                            color: "#00ffff",
                            activeDest: true,
                            opacity: 0.3,
                            duration: 1000,
                            isRepeat: true,
                            isYoyo: true,
                            isAnimate: true,
                        }
                        map.objects.set(Option)
                        setTimeout(()=>{
                            map.objects.hide();
                            console.log("hide")
                        },1000)
                        setTimeout(()=>{
                            map.objects.show(objectList[1]);
                            console.log("show")
                        },3000);
                        setTimeout(()=>{
                            map.objects.show();
                        },4000)
                        setTimeout(()=>{
                            map.objects.hide();
                            console.log("hide")
                        },5000)
                        setTimeout(()=>{
                            map.objects.show([objectList[1],objectList[2],objectList[3]]);
                            console.log("show")
                        },7000)
                        setTimeout(()=>{
                            map.objects.show();
                        },8000)
                        setTimeout(()=>{
                            map.objects.hide();
                            console.log("hide")
                        },9000)
                        setTimeout(()=>{
                            map.objects.show();
                            console.log("show")
                        },11000)
                        setTimeout(()=>{
                            map.objects.reset();
                        },12000)
                    }
            
                    const single_s_to_h = () => {
                        const Option ={
                            color: "#00ffff",
                            activeDest: true,
                            opacity: 0.3,
                            duration: 1000,
                            isRepeat: true,
                            isYoyo: true,
                            isAnimate: true,
                            ids :[objectList[1]]
                        }
                        map.objects.set(Option)
                        setTimeout(()=>{
                            map.objects.hide();
                            console.log("hide")   
                        },1000)
                        setTimeout(()=>{
                            map.objects.show(objectList[1]);
                            console.log("show")
                        },3000)
                        setTimeout(()=>{
                            map.objects.show();
                        },4000)
                        setTimeout(()=>{
                            map.objects.hide([objectList[1],objectList[2],objectList[3]]);
                            console.log("hide")  
                        },5000)
                        setTimeout(()=>{
                            map.objects.show(objectList[1]);
                            console.log("show")
                        },7000)
                        setTimeout(()=>{
                            map.objects.show();
                        },8000)
                        setTimeout(()=>{
                            map.objects.hide(objectList[1]);
                            console.log("hide")
                        },9000)
                        setTimeout(()=>{
                            map.objects.show(objectList[1]);
                            console.log("show")
                        },11000)
                        setTimeout(()=>{
                            map.objects.show();
                            map.objects.reset();
                        },12000)
                    }
            
                    const arr_s_to_h = () => {
                        const Option ={
                            color: "#00ffff",
                            activeDest: true,
                            opacity: 0.3,
                            duration: 1000,
                            isRepeat: true,
                            isYoyo: true,
                            isAnimate: true,
                            ids :[objectList[1],objectList[2],objectList[3]]
                        }
                        map.objects.set(Option)
                        setTimeout(()=>{
                            map.objects.hide();
                            console.log("hide")   
                        },1000)
                        setTimeout(()=>{
                            map.objects.show([objectList[1],objectList[2],objectList[3]]);
                            console.log("show")
                        },3000)
                        setTimeout(()=>{
                            map.objects.show();
                        },4000)
                        setTimeout(()=>{
                            map.objects.hide([objectList[1],objectList[2],objectList[3]]);
                            console.log("hide")  
                        },5000)
                        setTimeout(()=>{
                            map.objects.show([objectList[1],objectList[2],objectList[3]]);
                            console.log("show")
                        },7000)
                        setTimeout(()=>{
                            map.objects.show();
                        },8000)
                        setTimeout(()=>{
                            map.objects.hide(objectList[1]);
                            console.log("hide")
                        },9000)
                        setTimeout(()=>{
                            map.objects.show([objectList[1],objectList[2],objectList[3]]);
                            console.log("show")
                        },11000)
                        setTimeout(()=>{
                            map.objects.show();
                            map.objects.reset();
                        },12000)
                    }
            
                    const all_s_to_h = () => {
                        // const Option ={
                        //     color: "#00ffff",
                        //     ids :[objectList[1]]
                            // activeDest: true,
                            // opacity: 0.3,
                            // duration: 1000,
                            // isRepeat: true,
                            // isYoyo: true,
                            // isAnimate: true,
                        // }
                        // map.objects.set(Option)
                        setTimeout(()=>{
                            map.objects.hide();
                            console.log("hide")   
                        },1000)
                        setTimeout(()=>{
                            map.objects.show();
                            console.log("show")
                        },3000)
                        setTimeout(()=>{
                            map.objects.hide([objectList[1],objectList[2],objectList[3]]);
                            console.log("hide")  
                        },5000)
                        setTimeout(()=>{
                            map.objects.show();
                            console.log("show")
                        },7000)
                        setTimeout(()=>{
                            map.objects.hide(objectList[1]);
                            console.log("hide")
                        },9000)
                        setTimeout(()=>{
                            map.objects.show();
                            console.log("show")
                        },11000)
                        setTimeout(()=>{
                            map.objects.reset();
                        },12000)
                    }
                        

        const single_h_to_s = () => {
                        const Option ={
                            color: "#00ffff",
                            activeDest: true,
                            opacity: 0.3,
                            duration: 1000,
                            isRepeat: true,
                            isYoyo: true,
                            isAnimate: true,
                            ids :[objectList[1]]
                        }
                        map.objects.set(Option)
                        setTimeout(()=>{
                            map.objects.hide(objectList[1]);
                            console.log("hide")
                        },1000)
                        setTimeout(()=>{
                            map.objects.show(objectList[1]);
                            console.log("show")
                        },3000);
                        setTimeout(()=>{
                            map.objects.hide(objectList[1]);
                            console.log("hide")
                        },5000)
                        setTimeout(()=>{
                            map.objects.show([objectList[1],objectList[2],objectList[3]]);
                            console.log("show")
                        },7000)
                        setTimeout(()=>{
                            map.objects.hide(objectList[1]);
                            console.log("hide")
                        },9000)
                        setTimeout(()=>{
                            map.objects.show();
                            console.log("show")
                        },11000)
                        setTimeout(()=>{
                            map.objects.reset();
                        },12000)
                    }
            
                    const arr_h_to_s = () => {
                        const Option ={
                            color: "#00ffff",
                            activeDest: true,
                            opacity: 0.3,
                            duration: 1000,
                            isRepeat: true,
                            isYoyo: true,
                            isAnimate: true,
                            ids :[objectList[1],objectList[2],objectList[3]]
                        }
                        map.objects.set(Option)
                        setTimeout(()=>{
                            map.objects.hide([objectList[1],objectList[2],objectList[3]]);
                            console.log("hide")
                        },1000)
                        setTimeout(()=>{
                            map.objects.show(objectList[1]);
                            console.log("show")
                        },3000);
                        setTimeout(()=>{
                            map.objects.show();
                        },4000)
                        setTimeout(()=>{
                            map.objects.hide([objectList[1],objectList[2],objectList[3]]);
                            console.log("hide")
                        },5000)
                        setTimeout(()=>{
                            map.objects.show([objectList[1],objectList[2],objectList[3]]);
                            console.log("show")
                        },7000)
                        setTimeout(()=>{
                            map.objects.hide([objectList[1],objectList[2],objectList[3]]);
                            console.log("hide")
                        },9000)
                        setTimeout(()=>{
                            map.objects.show();
                            console.log("show")
                        },11000)
                        setTimeout(()=>{
                            map.objects.reset();
                        },12000)
                    }
            
                    const all_h_to_s = () => {
                        const Option ={
                            color: "#00ffff",
                            activeDest: true,
                            opacity: 0.3,
                            duration: 1000,
                            isRepeat: true,
                            isYoyo: true,
                            isAnimate: true,
                        }
                        map.objects.set(Option)
                        setTimeout(()=>{
                            map.objects.hide();
                            console.log("hide")
                        },1000)
                        setTimeout(()=>{
                            map.objects.show(objectList[1]);
                            console.log("show")
                        },3000);
                        setTimeout(()=>{
                            map.objects.show();
                        },4000)
                        setTimeout(()=>{
                            map.objects.hide();
                            console.log("hide")
                        },5000)
                        setTimeout(()=>{
                            map.objects.show([objectList[1],objectList[2],objectList[3]]);
                            console.log("show")
                        },7000)
                        setTimeout(()=>{
                            map.objects.show();
                        },8000)
                        setTimeout(()=>{
                            map.objects.hide();
                            console.log("hide")
                        },9000)
                        setTimeout(()=>{
                            map.objects.show();
                            console.log("show")
                        },11000)
                        setTimeout(()=>{
                            map.objects.reset();
                        },12000)
                    }
            
                    const single_s_to_h = () => {
                        const Option ={
                            color: "#00ffff",
                            activeDest: true,
                            opacity: 0.3,
                            duration: 1000,
                            isRepeat: true,
                            isYoyo: true,
                            isAnimate: true,
                            ids :[objectList[1]]
                        }
                        map.objects.set(Option)
                        setTimeout(()=>{
                            map.objects.hide();
                            console.log("hide")   
                        },1000)
                        setTimeout(()=>{
                            map.objects.show(objectList[1]);
                            console.log("show")
                        },3000)
                        setTimeout(()=>{
                            map.objects.show();
                        },4000)
                        setTimeout(()=>{
                            map.objects.hide([objectList[1],objectList[2],objectList[3]]);
                            console.log("hide")  
                        },5000)
                        setTimeout(()=>{
                            map.objects.show(objectList[1]);
                            console.log("show")
                        },7000)
                        setTimeout(()=>{
                            map.objects.show();
                        },8000)
                        setTimeout(()=>{
                            map.objects.hide(objectList[1]);
                            console.log("hide")
                        },9000)
                        setTimeout(()=>{
                            map.objects.show(objectList[1]);
                            console.log("show")
                        },11000)
                        setTimeout(()=>{
                            map.objects.show();
                            map.objects.reset();
                        },12000)
                    }
            
                    const arr_s_to_h = () => {
                        const Option ={
                            color: "#00ffff",
                            activeDest: true,
                            opacity: 0.3,
                            duration: 1000,
                            isRepeat: true,
                            isYoyo: true,
                            isAnimate: true,
                            ids :[objectList[1],objectList[2],objectList[3]]
                        }
                        map.objects.set(Option)
                        setTimeout(()=>{
                            map.objects.hide();
                            console.log("hide")   
                        },1000)
                        setTimeout(()=>{
                            map.objects.show([objectList[1],objectList[2],objectList[3]]);
                            console.log("show")
                        },3000)
                        setTimeout(()=>{
                            map.objects.show();
                        },4000)
                        setTimeout(()=>{
                            map.objects.hide([objectList[1],objectList[2],objectList[3]]);
                            console.log("hide")  
                        },5000)
                        setTimeout(()=>{
                            map.objects.show([objectList[1],objectList[2],objectList[3]]);
                            console.log("show")
                        },7000)
                        setTimeout(()=>{
                            map.objects.show();
                        },8000)
                        setTimeout(()=>{
                            map.objects.hide(objectList[1]);
                            console.log("hide")
                        },9000)
                        setTimeout(()=>{
                            map.objects.show([objectList[1],objectList[2],objectList[3]]);
                            console.log("show")
                        },11000)
                        setTimeout(()=>{
                            map.objects.show();
                            map.objects.reset();
                        },12000)
                    }
            
                    const all_s_to_h = () => {
                        // const Option ={
                        //     color: "#00ffff",
                        //     ids :[objectList[1]]
                            // activeDest: true,
                            // opacity: 0.3,
                            // duration: 1000,
                            // isRepeat: true,
                            // isYoyo: true,
                            // isAnimate: true,
                        // }
                        // map.objects.set(Option)
                        setTimeout(()=>{
                            map.objects.hide();
                            console.log("hide")   
                        },1000)
                        setTimeout(()=>{
                            map.objects.show();
                            console.log("show")
                        },3000)
                        setTimeout(()=>{
                            map.objects.hide([objectList[1],objectList[2],objectList[3]]);
                            console.log("hide")  
                        },5000)
                        setTimeout(()=>{
                            map.objects.show();
                            console.log("show")
                        },7000)
                        setTimeout(()=>{
                            map.objects.hide(objectList[1]);
                            console.log("hide")
                        },9000)
                        setTimeout(()=>{
                            map.objects.show();
                            console.log("show")
                        },11000)
                        setTimeout(()=>{
                            map.objects.reset();
                        },12000)
                    }
                        

        const single_h_to_s = () => {
                        const Option ={
                            color: "#00ffff",
                            activeDest: true,
                            opacity: 0.3,
                            duration: 1000,
                            isRepeat: true,
                            isYoyo: true,
                            isAnimate: true,
                            ids :[objectList[1]]
                        }
                        map.objects.set(Option)
                        setTimeout(()=>{
                            map.objects.hide(objectList[1]);
                            console.log("hide")
                        },1000)
                        setTimeout(()=>{
                            map.objects.show(objectList[1]);
                            console.log("show")
                        },3000);
                        setTimeout(()=>{
                            map.objects.hide(objectList[1]);
                            console.log("hide")
                        },5000)
                        setTimeout(()=>{
                            map.objects.show([objectList[1],objectList[2],objectList[3]]);
                            console.log("show")
                        },7000)
                        setTimeout(()=>{
                            map.objects.hide(objectList[1]);
                            console.log("hide")
                        },9000)
                        setTimeout(()=>{
                            map.objects.show();
                            console.log("show")
                        },11000)
                        setTimeout(()=>{
                            map.objects.reset();
                        },12000)
                    }
            
                    const arr_h_to_s = () => {
                        const Option ={
                            color: "#00ffff",
                            activeDest: true,
                            opacity: 0.3,
                            duration: 1000,
                            isRepeat: true,
                            isYoyo: true,
                            isAnimate: true,
                            ids :[objectList[1],objectList[2],objectList[3]]
                        }
                        map.objects.set(Option)
                        setTimeout(()=>{
                            map.objects.hide([objectList[1],objectList[2],objectList[3]]);
                            console.log("hide")
                        },1000)
                        setTimeout(()=>{
                            map.objects.show(objectList[1]);
                            console.log("show")
                        },3000);
                        setTimeout(()=>{
                            map.objects.show();
                        },4000)
                        setTimeout(()=>{
                            map.objects.hide([objectList[1],objectList[2],objectList[3]]);
                            console.log("hide")
                        },5000)
                        setTimeout(()=>{
                            map.objects.show([objectList[1],objectList[2],objectList[3]]);
                            console.log("show")
                        },7000)
                        setTimeout(()=>{
                            map.objects.hide([objectList[1],objectList[2],objectList[3]]);
                            console.log("hide")
                        },9000)
                        setTimeout(()=>{
                            map.objects.show();
                            console.log("show")
                        },11000)
                        setTimeout(()=>{
                            map.objects.reset();
                        },12000)
                    }
            
                    const all_h_to_s = () => {
                        const Option ={
                            color: "#00ffff",
                            activeDest: true,
                            opacity: 0.3,
                            duration: 1000,
                            isRepeat: true,
                            isYoyo: true,
                            isAnimate: true,
                        }
                        map.objects.set(Option)
                        setTimeout(()=>{
                            map.objects.hide();
                            console.log("hide")
                        },1000)
                        setTimeout(()=>{
                            map.objects.show(objectList[1]);
                            console.log("show")
                        },3000);
                        setTimeout(()=>{
                            map.objects.show();
                        },4000)
                        setTimeout(()=>{
                            map.objects.hide();
                            console.log("hide")
                        },5000)
                        setTimeout(()=>{
                            map.objects.show([objectList[1],objectList[2],objectList[3]]);
                            console.log("show")
                        },7000)
                        setTimeout(()=>{
                            map.objects.show();
                        },8000)
                        setTimeout(()=>{
                            map.objects.hide();
                            console.log("hide")
                        },9000)
                        setTimeout(()=>{
                            map.objects.show();
                            console.log("show")
                        },11000)
                        setTimeout(()=>{
                            map.objects.reset();
                        },12000)
                    }
            
                    const single_s_to_h = () => {
                        const Option ={
                            color: "#00ffff",
                            activeDest: true,
                            opacity: 0.3,
                            duration: 1000,
                            isRepeat: true,
                            isYoyo: true,
                            isAnimate: true,
                            ids :[objectList[1]]
                        }
                        map.objects.set(Option)
                        setTimeout(()=>{
                            map.objects.hide();
                            console.log("hide")   
                        },1000)
                        setTimeout(()=>{
                            map.objects.show(objectList[1]);
                            console.log("show")
                        },3000)
                        setTimeout(()=>{
                            map.objects.show();
                        },4000)
                        setTimeout(()=>{
                            map.objects.hide([objectList[1],objectList[2],objectList[3]]);
                            console.log("hide")  
                        },5000)
                        setTimeout(()=>{
                            map.objects.show(objectList[1]);
                            console.log("show")
                        },7000)
                        setTimeout(()=>{
                            map.objects.show();
                        },8000)
                        setTimeout(()=>{
                            map.objects.hide(objectList[1]);
                            console.log("hide")
                        },9000)
                        setTimeout(()=>{
                            map.objects.show(objectList[1]);
                            console.log("show")
                        },11000)
                        setTimeout(()=>{
                            map.objects.show();
                            map.objects.reset();
                        },12000)
                    }
            
                    const arr_s_to_h = () => {
                        const Option ={
                            color: "#00ffff",
                            activeDest: true,
                            opacity: 0.3,
                            duration: 1000,
                            isRepeat: true,
                            isYoyo: true,
                            isAnimate: true,
                            ids :[objectList[1],objectList[2],objectList[3]]
                        }
                        map.objects.set(Option)
                        setTimeout(()=>{
                            map.objects.hide();
                            console.log("hide")   
                        },1000)
                        setTimeout(()=>{
                            map.objects.show([objectList[1],objectList[2],objectList[3]]);
                            console.log("show")
                        },3000)
                        setTimeout(()=>{
                            map.objects.show();
                        },4000)
                        setTimeout(()=>{
                            map.objects.hide([objectList[1],objectList[2],objectList[3]]);
                            console.log("hide")  
                        },5000)
                        setTimeout(()=>{
                            map.objects.show([objectList[1],objectList[2],objectList[3]]);
                            console.log("show")
                        },7000)
                        setTimeout(()=>{
                            map.objects.show();
                        },8000)
                        setTimeout(()=>{
                            map.objects.hide(objectList[1]);
                            console.log("hide")
                        },9000)
                        setTimeout(()=>{
                            map.objects.show([objectList[1],objectList[2],objectList[3]]);
                            console.log("show")
                        },11000)
                        setTimeout(()=>{
                            map.objects.show();
                            map.objects.reset();
                        },12000)
                    }
            
                    const all_s_to_h = () => {
                        // const Option ={
                        //     color: "#00ffff",
                        //     ids :[objectList[1]]
                            // activeDest: true,
                            // opacity: 0.3,
                            // duration: 1000,
                            // isRepeat: true,
                            // isYoyo: true,
                            // isAnimate: true,
                        // }
                        // map.objects.set(Option)
                        setTimeout(()=>{
                            map.objects.hide();
                            console.log("hide")   
                        },1000)
                        setTimeout(()=>{
                            map.objects.show();
                            console.log("show")
                        },3000)
                        setTimeout(()=>{
                            map.objects.hide([objectList[1],objectList[2],objectList[3]]);
                            console.log("hide")  
                        },5000)
                        setTimeout(()=>{
                            map.objects.show();
                            console.log("show")
                        },7000)
                        setTimeout(()=>{
                            map.objects.hide(objectList[1]);
                            console.log("hide")
                        },9000)
                        setTimeout(()=>{
                            map.objects.show();
                            console.log("show")
                        },11000)
                        setTimeout(()=>{
                            map.objects.reset();
                        },12000)
                    }
                        

        const setting = {
            activeDest: false,
            color: "#ff0000",
            opacity: 0.3,
            isAnimate: true,
            duration: 1000,
            isRepeat: true,
            isYoyo: true,
        };

        const actionSetting = {
            ids: "",
            set: set,
            reset: reset,
            hide: hide,
            show: show,
            single_h_to_s: single_h_to_s,
            arr_h_to_s: arr_h_to_s,
            all_h_to_s: all_h_to_s,
            single_s_to_h: single_s_to_h,
            arr_s_to_h : arr_s_to_h,
            all_s_to_h: all_s_to_h
        };
        const menu = this.gui.addFolder("object menu");
        menu.add(setting, "activeDest");
        menu.addColor(setting, "color");
        menu.add(setting, "opacity");
        menu.add(setting, "isAnimate");
        menu.add(setting, "duration");
        menu.add(setting, "isRepeat");
        menu.add(setting, "isYoyo");
        objectSetting = menu.add(actionSetting, "ids", objectList);
        menu.add(actionSetting, "set");
        menu.add(actionSetting, "reset");
        menu.add(actionSetting, "hide");
        menu.add(actionSetting, "show");
        menu.add(actionSetting, "single_h_to_s");
        menu.add(actionSetting, "arr_h_to_s");
        menu.add(actionSetting, "all_h_to_s");
        menu.add(actionSetting, "single_s_to_h");
        menu.add(actionSetting, "arr_s_to_h");
        menu.add(actionSetting, "all_s_to_h");
        return menu;
    }
}
