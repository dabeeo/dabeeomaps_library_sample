import * as THREE from 'three';
import Stats from 'three/addons/libs/stats.module.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'


let container: HTMLElement;
let stats: Stats;
let renderer : THREE.WebGLRenderer;
// let material: THREE.Material;
let mesh: THREE.InstancedMesh;
let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;

let controls: OrbitControls;
let radius: number = 300;

let treeInfoArray: Array<any>;
let type = 'dec';
let width = window.innerWidth;
let height = window.innerHeight;
let plane: THREE.Mesh;
const loader = new GLTFLoader();
const textureLoader = new THREE.TextureLoader()
const dracoLoader = new DRACOLoader();
const texture = textureLoader.load("/map/map_light.png");

const heightMap = textureLoader.load("/map/heightmap_light.png");

dracoLoader.setDecoderPath( '/draco/' );
dracoLoader.setDecoderConfig({type: 'js'}); // (Optional) Override detection of WASM support.

dracoLoader.preload();

function init() {
  renderer = new THREE.WebGLRenderer( { antialias: true } );

  container = document.createElement( 'div' );
  document.body.appendChild( container );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( width, height );
  renderer.shadowMap.enabled = true;
  container.appendChild( renderer.domElement );


  camera = new THREE.PerspectiveCamera( 75, width / height, 0.001, 1000 );
  camera.position.set(0,0,10);
  // camera.rotateX((90 * Math.PI) / 180);

  scene = new THREE.Scene();
  // scene.background = new THREE.Color( 0xffffff );
	// const light = new THREE.AmbientLight( 0xffffff);
  const light = new THREE.DirectionalLight(0xffffff, 2);

  light.position.set( 0, 0, 10);
  scene.add( light );
  controls = new OrbitControls( camera, renderer.domElement );
  controls.maxPolarAngle = 180 * Math.PI / 180;
  controls.maxAzimuthAngle = 0;

  controls.screenSpacePanning = true //so that panning up and down doesn't zoom in/out
  //controls.addEventListener('change', render)



  // controls.target.( degrees * Math.PI / 180 )
  stats = new Stats();
  container.appendChild( stats.dom );

  window.addEventListener( 'resize', onWindowResize );

  return true;
}

function onWindowResize() {

  width = window.innerWidth;
  height = window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize( width, height );

}

function animate() {

  requestAnimationFrame( animate );

  controls.update();
  stats.update();

  render();

}

function render() {

  // const time = performance.now() * 0.0005;

  // material.uniforms[ 'time' ].value = time;

  // mesh.rotation.x = time * 0.2;
  // mesh.rotation.y = time * 0.4;

  renderer.render( scene, camera );

}



async function initGltfData(){
  let model;
  loader.setDRACOLoader(dracoLoader);
  await loader.loadAsync( 'model/model.glb').then(( gltf ) => {
  
    model = gltf.scene;
    model.rotation.x = (90 * Math.PI/180);
    // model.scale (new THREE.Vector3(0.01, 0.01, 0.01));

  }).catch((err)=> {
    console.log( 'An error happened', err );

  });

  return model; 
}

const settingBasic = ()=> {

  const instanceMeshSeedling = initMesh(seedlingArry, true);
  const instanceMeshStandard = initMesh(standardArry, false);
  group.add(instanceMeshStandard, instanceMeshSeedling);


}

const settingGltf = async () => {
  const instanceMeshStandard = await loadGlftModel(standardArry, false);
  const instanceMeshSeedling = await loadGlftModel(seedlingArry, true);
  group.add(instanceMeshStandard, instanceMeshSeedling);

}
init();
const object = await initGltfData();
const threeGroup = new THREE.Group();
clean();
initMap();

const { seedlingArry, standardArry } = await initData();
const group = new THREE.Group();
settingGltf();
// console.log(group)
// camera.lookAt(group.position);
scene.add(group);
animate();


function clean() {

  const meshes: Array<THREE.Mesh> = [];

  scene.traverse( function ( object: any) {

      if ( object.isMesh ) meshes.push( object );

  } );

  for ( let i = 0; i < meshes.length; i ++ ) {
    const mesh: any = meshes[ i ];
    mesh.material.dispose();
    mesh.geometry.dispose();
    scene.remove( mesh );
  }

}

function geolocationCoordToMeterCoord(center_lat: number, center_lon: number, target_lat: number, target_lon: number): { x: number; y: number } {
  let calcX = measure(center_lat, center_lon, center_lat, target_lon);
  if (target_lon < center_lon) {
      calcX *= -1;
  }
  let calcY = measure(center_lat, center_lon, target_lat, center_lon);
  if (target_lat < center_lat) {
      calcY *= -1;
  }
  return {
      x: calcX,
      y: calcY,
  };
}

// 위경도를 기준으로 미터단위 거리 측정
function measure(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6378.137; // Radius of earth in KM
  const dLat = (lat2 * Math.PI) / 180 - (lat1 * Math.PI) / 180;
  const dLon = (lon2 * Math.PI) / 180 - (lon1 * Math.PI) / 180;
  const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d * 1000; // meters
}

// Converts a point [longitude, latitude] in degrees to a THREE.Vector3.
function vertex(refPoint: Array<2>, poiPoint: Array<2>) {
  const refLatitude = refPoint[0];
  const refLongitude = refPoint[1];
  // Point of interest in geographic coordinates
  const poiLatitude = poiPoint[0];
  const poiLongitude = poiPoint[1];
  

  let { x , y } = geolocationCoordToMeterCoord(refLatitude,refLongitude, poiLatitude,  poiLongitude);

  //-90도 만큼 회전
  const cos = Math.cos((-90 * Math.PI) / 180);
  const sin = Math.sin((-90 * Math.PI) / 180);
  const rx = cos * (x - 0) - (sin * (y - 0) + 0);
  const ry = cos * (y - 0) + (sin * (x - 0) + 0);

  //지도랑 same size
  /*
  let afterX = rx * 0.63;
  //축 방향 반대
  let afterY = -ry * 1.318;
  */

  let afterX = rx * 0.003;
  //축 방향 반대
  let afterY = -ry * 0.0035;

  // plane.get
  return new THREE.Vector3(afterX, afterY, 0.5);
}

function initMap() {
    //지도랑 same size
  // const planeGeometry = new THREE.PlaneGeometry(7500, 7500, 1000, 1000) //, 360, 180)

  const planeGeometry = new THREE.PlaneGeometry(10, 10, 2048, 2048) //, 360, 180);

  const geometry = new THREE.BufferGeometry();
  geometry.index = planeGeometry.index;
  geometry.attributes = planeGeometry.attributes;


  const material = new THREE.MeshStandardMaterial({
    // color: 'red',
    map: texture,
    displacementMap : heightMap,
    flatShading: true
    // normalMap: heightMap,
    // normalScale: new THREE.Vector2()
  });

  // const envTexture = new THREE.CubeTextureLoader().load(["img/px_50.png", "img/nx_50.png", "img/py_50.png", "img/ny_50.png", "img/pz_50.png", "img/nz_50.png"])
  // const envTexture = new THREE.CubeTextureLoader().load(["img/px_eso0932a.jpg", "img/nx_eso0932a.jpg", "img/py_eso0932a.jpg", "img/ny_eso0932a.jpg", "img/pz_eso0932a.jpg", "img/nz_eso0932a.jpg"])
  // envTexture.mapping = THREE.CubeReflectionMapping
  // material.envMap = envTexture
  
  //const specularTexture = new THREE.TextureLoader().load("img/earthSpecular.jpg")
  // material.specularMap = specularTexture

  // material.wireframe = true;
  // material.transparent = false;
  // material.depthTest = true;
  // material.depthWrite = true;
  // material.side = THREE.DoubleSide;

  // material.displacementScale = 0.42;
  // material.displacementBias = -0.46;

  
  plane = new THREE.Mesh(geometry, material);
  //지도 맞춤
  // plane.position.x = -2.5;
  // plane.position.y = -5.5;


  scene.add(plane);
  
}

async function loadGlftModel(treeInfoArray: any, isSeedling: boolean){
 

  // scene.add(object);
  
  
  const instanceCount = treeInfoArray.length;
  const material = new THREE.MeshStandardMaterial();

  object.traverse( ( child ) => {
    if ( child.isMesh ) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.geometry.rotateX(45 * Math.PI/180);
      child.geometry.scale(0.05, 0.05, 0.1);
      material.transparent = false;
      
      const instanceMesh = new THREE.InstancedMesh( child.geometry, material, instanceCount );
      instanceMesh.instanceMatrix.setUsage( THREE.DynamicDrawUsage ); // will be updated every frame
      instanceMesh.castShadow = true;
      instanceMesh.receiveShadow = true;
      for ( let i = 0; i < instanceCount; i ++ ) {
        const matrix = new THREE.Matrix4();
        matrix.setPosition(treeInfoArray[i].pos);
        if(isSeedling) 
          matrix.scale(new THREE.Vector3(0.5, 0.5, 0.3) );
        else 
          matrix.scale(new THREE.Vector3(0.7, 0.7, 0.7) );

        instanceMesh.setMatrixAt( i, matrix );

        if(child.name === "Palm4_1")
        // if(child.name === "PALM")
          instanceMesh.setColorAt( i, treeInfoArray[i].color);
        else{
          instanceMesh.setColorAt( i,  new THREE.Color(0xA52A2A));         
        }
      }
      threeGroup.add(instanceMesh);
      // child.material = new THREE.MeshStandardMaterial();
      // child.castShadow = true;
      // child.receiveShadow = true;
      // child.isInstancedMesh = true;
      // child.instanceMatrix = new THREE.InstancedBufferAttribute( new Float32Array( instanceCount * 16 ), 16 );
      // child.count = instanceCount;
    }
  });

  // boxes.userData.physics = { mass: 1 }; //정보 여기다 넣으면 될듯

// camera.lookAt(object.position)

  return threeGroup;

}


function initMesh(treeInfoArray: any, isSeedling: boolean) {
  
  //나중 material

  /*
    material = new THREE.RawShaderMaterial( {
      uniforms: {
        'map': { value: new THREE.TextureLoader().load( 'textures/sprites/circle.png' ) },
        'time': { value: 0.0 }
      },
  
      vertexShader: document.getElementById( 'vshader' ) !== undefined ? document.getElementById( 'vshader' )?.textContent :  '',
      fragmentShader: document.getElementById( 'fshader' )?.textContent,
      depthTest: true,
      depthWrite: true
    });
  */
 /*
  const baseTreeGeometry = new THREE.BoxGeometry( 1, 1, 10 );
  const geometry = new THREE.InstancedBufferGeometry();
  geometry.index = baseTreeGeometry.index;
  geometry.attributes = baseTreeGeometry.attributes;
  material = new THREE.MeshStandardMaterial();
  mesh = new THREE.InstancedMesh( baseTreeGeometry, material, palmtreeCount );
*/

  const palmtreeCount = treeInfoArray.length; //palmtree 개수
  material = new THREE.MeshStandardMaterial();

  const height = isSeedling ? 0.005 : 0.05;
  const geometryBox = new THREE.BoxGeometry( 0.005, 0.005, height );

  const boxes = new THREE.InstancedMesh( geometryBox, material, palmtreeCount );
  boxes.instanceMatrix.setUsage( THREE.DynamicDrawUsage ); // will be updated every frame
  boxes.castShadow = true;
  boxes.receiveShadow = true;

  // boxes.userData.physics = { mass: 1 }; //정보 여기다 넣으면 될듯

  for ( let i = 0; i < palmtreeCount; i ++ ) {
    const matrix = new THREE.Matrix4();

    matrix.setPosition(treeInfoArray[i].pos);
    boxes.setMatrixAt( i, matrix );
    boxes.setColorAt( i, treeInfoArray[i].color);
  }
  // scene.add( boxes );
  return boxes;
  // const translateArray = new Float32Array( palmtreeCount * 3 ); //translate? position setting 부분인듯?

  // for ( let i = 0, i3 = 0, l = palmtreeCount; i < l; i ++, i3 += 3 ) {
  //   translateArray[ i3 + 0 ] = treeArray[i].pos.x;
  //   translateArray[ i3 + 1 ] = treeArray[i].pos.y;
  //   translateArray[ i3 + 2 ] = treeArray[i].pos.z;
  // }
  // geometry.setAttribute( 'translate', new THREE.InstancedBufferAttribute( translateArray, 3 ) );

  
  // for ( let i = 0; i < palmtreeCount; i ++ ) {
  //   const matrix = new THREE.Matrix4();

  //   let scale = new THREE.Vector3(1, 1, 1);
  //   if(treeInfoArray[i].isSeedling){
  //     scale = new THREE.Vector3(100, 100, 100)
  //   }

//됬었던 것
/*
	// 	matrix.compose( treeInfoArray[i].pos, new THREE.Quaternion(), scale );
  //   mesh.setMatrixAt( i, matrix );

  //   mesh.setColorAt( i, treeInfoArray[i].color);
  //   let need = mesh.instanceColor;
  //   let insMat = mesh.instanceMatrix;
  //   if(need){
  //     need.needsUpdate = true;
  //   }
  //   if(insMat) insMat.needsUpdate = true;

  // }
  // console.log(mesh)
  // scene.add( mesh );  
  */
}

function setLod() {
  const lod = new THREE.LOD();

  for( let i = 0; i < 3; i++ ) {
      const geometry = new THREE.IcosahedronGeometry( 10, 3 - i )
      const mesh = new THREE.Mesh( geometry, material );
      lod.addLevel( mesh, i * 10 );
  }
  scene.add( lod );

}

function setBase(array: any[]){
  return array.reduce((p, c) => p + c, 0) / array.length;
}

async function initData() {
    const palmtreeData = await fetch("../geojsonData/malaysia_update.geojson")
    .then(function(response) {
        return response.json();
    });
    const palmFeature = palmtreeData.features;
    const featureArray = palmFeature.map((feature: any)=>{
        if(feature.geometry.type == 'Point')
        return feature;
    });
    const langArry = featureArray.map((feature: { geometry: { coordinate: any[]; }; })=> {
      return feature.geometry.coordinate[0];
    });
    const latArry = featureArray.map((feature: { geometry: { coordinate: any[]; }; })=> {
      return feature.geometry.coordinate[1];
    });

    const base = [setBase(langArry), setBase(latArry)];
    console.log("basee", base);
 
    // 118.0816871612478
    // 4.379409469546306


    const seedlingArry: { id: any; color: THREE.Color; ndvi_value: any; pos: THREE.Vector3; }[] = [];
    const standardArry: { id: any; color: THREE.Color; ndvi_value: any; pos: THREE.Vector3; }[] = [];
    
    featureArray.forEach((data: any) => {
      let color;
      let ndvi_value;
      if(type === "dec"){
          color = data.properties.health_status.dec;
          ndvi_value = data.properties.ndvi_value.dec;
      }else if(type == "jan"){
          color = data.properties.health_status.jan;
          ndvi_value = data.properties.ndvi_value.jan;
      }else if(type == "april"){
          color = data.properties.health_status.april;
          ndvi_value = data.properties.ndvi_value.april;
      }

      const position = vertex( base , data.geometry.coordinate);

      const treeInfo = {
          id : data.properties.tree_id,
          color : color === "healthy" ? new THREE.Color(0x00ff00) : new THREE.Color(0xFF0000) ,
          ndvi_value : ndvi_value,
          pos: position,
      };
      if(data.properties.seedling){
        treeInfo.color = new THREE.Color(0x00FFFF);
        seedlingArry.push(treeInfo);
      }else standardArry.push(treeInfo);
      
    });
    console.log(featureArray.length);
    return {
      seedlingArry: seedlingArry,
      standardArry: standardArry,
    }
    // camera.lookAt( mesh.position);

}

