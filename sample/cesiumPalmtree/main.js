 //json data 구조
    // {
    //     "type":"Feature",
    //     "properties":{
    //         "tree_id":0,
    //         "health_status":{
    //             "dec":"unhealthy",
    //             "jan":"healthy",
    //             "april":"healthy"
    //         },
    //         "ndvi_value":{
    //             "dec":0.6090380427237984,
    //             "jan":0.6090380427237984,
    //             "april":0.6090380427237984
    //         },
    //         "seedling":false
    //     },
    //     "geometry":{
    //         "type":"Point",
    //         "coordinate":[118.08727674186233,4.389935417706478]
    //     }
    // },

Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmNzI0ZmNhYi1lMTU0LTQwNDUtYTRmYy1hMDJkY2NiNWVlNTMiLCJpZCI6MTcxMTcwLCJpYXQiOjE2OTc1MTI2NTF9.jaSgUdgbnyhf__JLvgaqq7F_3uIAfDd3Uss5x0IjQ0M";
const worldTerrain = Cesium.Terrain.fromWorldTerrain();
const viewer = new Cesium.Viewer("app",  {
    animation: false,
    baseLayerPicker: false,
    geocoder: false,
    scsceneModePicker: false,
    selectionIndicator: false,
    homeButton: false,

    navigationInstructionsInitiallyVisible: false,
    // global

    terrain: worldTerrain,

  });
viewer.scene.globe.depthTestAgainstTerrain = true;
const assetsList = [];
const scene = viewer.scene;

const readGeoJsonToPosition = async () =>{
    const palmtreeData = await fetch("../geojsonData/malaysia_update.geojson")
    .then(function(response) {
        return response.json();
    });
    const palmFeature = palmtreeData.features;
    const palmTreeInfo = palmFeature.map((feature)=>{
        if(feature.geometry.type == 'Point')
        // return feature.geometry.coordinate;
        return feature;
    });
    console.log(palmTreeInfo);
    return palmTreeInfo;
   
} 


const palmtreeInfoArray = await readGeoJsonToPosition();
addGeometries(palmtreeInfoArray, "dec");


async function addGeometry (info)  {
    // console.log(info);
    return new Promise((resolve, reject) => {
        viewer.entities.add({
            name: info.id,
            position: info.position,
            box: {
                dimensions: new Cesium.Cartesian3(2.0, 2.0, info.height ),
                material: info.color,
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
            },
        });
        resolve(viewer.entities);
    });
}

async function addGeometries(infoArry, type) {

    const promiseList = infoArry.map( (info, index) => {
        let color;
        let ndvi_value;
        if(type === "dec"){
            color = info.properties.health_status.dec;
            ndvi_value = info.properties.ndvi_value.dec;
        }else if(type == "jan"){
            color = info.properties.health_status.jan;
            ndvi_value = info.properties.ndvi_value.jan;
        }else if(type == "april"){
            color = info.properties.health_status.april;
            ndvi_value = info.properties.ndvi_value.april;
        }
        const pos = {
            longitude : info.geometry.coordinate[0],
            latitude : info.geometry.coordinate[1]
        };

        const treeInfo = {
            id : info.properties.tree_id,
            color : color === "healthy" ? Cesium.Color.CHARTREUSE : Cesium.Color.RED ,
            ndvi_value : ndvi_value,
            position: Cesium.Cartesian3.fromDegrees(pos.longitude, pos.latitude, 0.0),
            height: info.properties.seedling ? 2.0 : 10.0
        };

        //작은 애들 시각적으로 표시하기 위해 파란색으로
        if(info.properties.seedling){
            treeInfo.color = Cesium.Color.CYAN;
        }
        return addGeometry(treeInfo);        
    });

    try {
        const result = await Promise.all(promiseList);
        viewer.zoomTo(viewer.entities);
      } catch (e) {
        console.error('promise-all', e);
      }
}

