import Util from "./util.js";
import DataProcess from "./dataProcess.js";
import { ParticleSystem } from "./particleSystem.js";
import { defaultParticleSystemOptions, fileOptions } from "./gui.js";

export class Wind3D {
  constructor(panel, mode) {
    // console.log(panel);
    var options = {
      // use Sentinel-2 instead of the default Bing Maps because Bing Maps sessions is limited
      contextOptions: {
        requestWebgl1: true,
      },
      imageryProvider: new Cesium.IonImageryProvider({ assetId: 2275207 }),
      baseLayerPicker: false,
      geocoder: true,
      infoBox: false,
      fullscreenElement: "cesiumContainer",
      // useBrowserRecommendedResolution can be set to false to improve the render quality
      // useBrowserRecommendedResolution: false,
      scene3DOnly: true,
    };

    if (mode.debug) {
      options.useDefaultRenderLoop = false;
    }
    // Cesium.buildModuleUrl.setBaseUrl("./Cesium"); // 모듈의 기본 URL 설정

    Cesium.Ion.defaultAccessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlZjExOWQwMC1kYzAxLTRkMWItODlkYi1lZTBlZDMwODUxMDkiLCJpZCI6MTc0MDU5LCJpYXQiOjE3MDI0Mjk2OTd9.kXkbjmi5g_uc2C1W792H1eyzEYFcD7MJ2btivj4For0";

    this.viewer = new Cesium.Viewer("cesiumContainer", options);
    this.scene = this.viewer.scene;
    this.camera = this.viewer.camera;
    this.panel = panel;
    this.mode = mode;
    this.ellipsoid = this.scene.globe.ellipsoid;
    this.primitivesArray = [];
    this.particleSystem = null;
    // 처음 카메라 포지션의 Z를 위경도 상의 height로 설정
    this.initHeight = this.ellipsoid.cartesianToCartographic(
      this.camera.position
    ).height;

    this.viewerParameters = {
      //위도 범위 경도 범위
      lonRange: new Cesium.Cartesian2(),
      latRange: new Cesium.Cartesian2(),
      pixelSize: 0.0,
    };
    // use a smaller earth radius to make sure distance to camera > 0
    this.globeBoundingSphere = new Cesium.BoundingSphere(
      Cesium.Cartesian3.ZERO,
      0.99 * 6378137.0 // 반지름
    );
    // this.updateViewerParameters();
    this.imageryLayers = this.viewer.imageryLayers;

    this.setTileset();
    this.setGlobeLayer(this.panel.getUserInput());
    this.setupEventListeners();

    if (this.mode.debug) {
      this.debug();
    }
    setTimeout(
      () =>
        this.viewer.camera.flyTo({
          destination: Cesium.Cartesian3.fromDegrees(
            127.0363431764427,
            37.585353994499876,
            7800
          ),
        }),
      4000
    );
  }

  addData(fileName) {
    fileOptions.dataFile = fileName;
    DataProcess.loadData().then((data) => {
      this.particleSystem = new ParticleSystem(
        this.scene.context,
        data,
        this.panel.getUserInput(),
        this.viewerParameters
      );
      this.addPrimitives();
    });
  }

  addPrimitives() {
    // the order of primitives.add() should respect the dependency of primitives
    this.primitivesArray[0] = this.scene.primitives.add(
      this.particleSystem.particlesComputing.primitives.getWind
    );
    this.primitivesArray[1] = this.scene.primitives.add(
      this.particleSystem.particlesComputing.primitives.updateSpeed
    );
    this.primitivesArray[2] = this.scene.primitives.add(
      this.particleSystem.particlesComputing.primitives.updatePosition
    );
    this.primitivesArray[3] = this.scene.primitives.add(
      this.particleSystem.particlesComputing.primitives.postProcessingPosition
    );
    this.primitivesArray[4] = this.scene.primitives.add(
      this.particleSystem.particlesComputing.primitives.postProcessingSpeed
    );
    this.primitivesArray[5] = this.scene.primitives.add(
      this.particleSystem.particlesRendering.primitives.segments
    );
    this.primitivesArray[6] = this.scene.primitives.add(
      this.particleSystem.particlesRendering.primitives.trails
    );
    this.primitivesArray[7] = this.scene.primitives.add(
      this.particleSystem.particlesRendering.primitives.screen
    );
  }
  removePrimitives() {
    this.primitivesArray.forEach((primitive) =>
      this.scene.primitives.remove(primitive)
    );
    this.primitivesArray = [];
  }

  updateViewerParameters() {
    // 타원체의 대략적인 가시 직사각형을 계산합니다.
    var viewRectangle = this.camera.computeViewRectangle(
      this.scene.globe.ellipsoid
    );
    var lonLatRange = Util.viewRectangleToLonLatRange(viewRectangle);
    this.viewerParameters.lonRange.x = lonLatRange.lon.min;
    this.viewerParameters.lonRange.y = lonLatRange.lon.max;
    this.viewerParameters.latRange.x = lonLatRange.lat.min;
    this.viewerParameters.latRange.y = lonLatRange.lat.max;

    var pixelSize = this.camera.getPixelSize(
      this.globeBoundingSphere,
      this.scene.drawingBufferWidth,
      this.scene.drawingBufferHeight
    );
    console.log("pixelSize To meters", pixelSize);
    if (pixelSize > 0) {
      this.viewerParameters.pixelSize = pixelSize;
    }
  }

  async setGlobeLayer(userInput) {
    var globeLayer = userInput.globeLayer;
    //layer 변경시 고대 지역으로 flyTo
    this.updateViewerParameters();
    this.addData(globeLayer.fileName);
  }

  async setTileset() {
    this.viewer.imageryLayers.addImageryProvider(
      await Cesium.createWorldImageryAsync()
    );
    const assetsList = [
      2386135,
      2387624,
      2387625,
      2387627,
      2387628,
      2387629,
      2387632,
      2387633,
      2387634,
      2387635,
      2387639,
      2387647,
      2387650,
      2387651,
      2387652,
      2387655,
      2387719,
      2387720,
      2387721,
      2387723,
      2387724,
      2387725,
      2387728,
      2387735,
      2387737,
      2387775,
      2387776,
      2387777,
      2387778,
      2387779,
      2387780,
      2387781,
      2387782,
      2387792,
      2387794,
      2387796,
      2387797,
      2387798,
      2387800,
      2387802,
      2387803,
      2387804,
      2387805,
      2387806,
      2387855,
      2387856,
      2387858,
      2387861,
      2387862,
      2387863,
      2387864,
      2387865,
      2387902,
      2387903,
      2387905,
      2387906,
      2387911,
      2387912,
      2387913,
      2387970,
      2387972,
      2387974,
      2387978,
      2387979,
      2387980,
      2388059,
      2388060,
      2388063,
      2388064,
      2388065,
      2388066,
      2388067,
      2388068,
      2388069,
      2388170,
      2388171,
      2388172,
      2388175,
      2388176,
      2388177,
      2388178,
      2388179,
      2388180,
      2388183,
      2388184,
      2388185,
      2388187,
      2388188,
      2388189,
      2388191,
      2388192,
      2388195,
      2388197,
      2388198,
      2388200,
      2388201,
      2388204,
      2388209,
      2388210,
      2388211,
      2388212,
      2388213,
      2388214,
      2388215,
      2388216,
      2388217,
      2388218,
      2388219,
      2388220,
      2388221,
      2388222,
      2388223,
      2388224,
      2388225,
      2388226,
      2388227,
      2387852, //고려대학교 지역
    ];

    // const assetsList = [2411664];
    let promiseArry = [];
    try {
      promiseArry = assetsList.map(async (asset, index) => {
        // const resource = await Cesium.IonResource.fromAssetId(asset);
        const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(asset, {
          dynamicScreenSpaceError: false,
          dynamicScreenSpaceErrorDensity: 0.00278,
          dynamicScreenSpaceErrorFactor: 4.0,
          dynamicScreenSpaceErrorHeightFalloff: 0.01,
          // debugWireframe: true,
          // debugShowBoundingVolume: true,
          // showCreditsOnScreen: true,
          skipLevelOfDetail: true, //email 내용
          baseScreenSpaceError: 2000, //email 내용 //이전8000
          skipScreenSpaceErrorFactor: 20, //이전8
          skipLevels: 1,
          // immediatelyLoadDesiredLevelOfDetail: false,
          // loadSiblings: false,
          // cullWithChildrenBounds: false,
          // DynamicScreenSpaceErrorHeightFalloff: 1.0,
          // maximumScreenSpaceError: 30, //이전8
        });
        // console.log(tileset);
        const extras = tileset.asset.extras;

        if (
          Cesium.defined(extras) &&
          Cesium.defined(extras.ion) &&
          Cesium.defined(extras.ion.defaultStyle)
        ) {
          tileset.style = new Cesium.Cesium3DTileStyle(extras.ion.defaultStyle);
        }

        return this.scene.primitives.add(tileset);
      });
      try {
        Promise.all(promiseArry);
      } catch (e) {
        console.error("promise-all error", e);
      }
    } catch (error) {
      console.log(error);
    }
  }

  getViewHeight() {
    if (this.viewer) {
      let height = this.ellipsoid.cartesianToCartographic(
        this.camera.position
      ).height;
      return height;
    }
  }
  // max = 26224244.XXXXXX, tilt 399 , min 151

  getMaxNumByHeight(viewHeight) {
    // y=kx+b   k=defaultParticleNum/initHeight
    const k = defaultParticleSystemOptions.maxParticles / this.initHeight;
    if (viewHeight > 20000000) {
      return Math.ceil(k * viewHeight + 2000);
    } else if (viewHeight > 15000000) {
      return Math.ceil(k * viewHeight + viewHeight / 1500);
    } else if (viewHeight > 10000000) {
      return Math.ceil(k * viewHeight + viewHeight / 500);
    } else if (viewHeight > 5000000) {
      return Math.ceil(k * viewHeight + viewHeight / 400);
    } else if (viewHeight > 1000000) {
      return Math.ceil(k * viewHeight + viewHeight / 125);
    } else if (viewHeight > 100000) {
      return Math.ceil(k * viewHeight + viewHeight / 100);
    } else if (viewHeight > 50000) {
      return Math.ceil(k * viewHeight + viewHeight / 80);
    } else if (viewHeight > 10000) {
      return Math.ceil(k * viewHeight + viewHeight / 50);
    } else if (viewHeight > 5000) {
      return Math.ceil(k * viewHeight + viewHeight / 30);
    } else if (viewHeight > 1000) {
      return Math.ceil(k * viewHeight + viewHeight / 8);
    } else if (viewHeight > 500) {
      return Math.ceil(k * viewHeight + viewHeight / 2);
    } else {
      return Math.ceil(k * viewHeight + viewHeight);
    }
  }
  getLineWidthByHeight(viewHeight) {
    if (viewHeight > 10000) {
      return defaultParticleSystemOptions.lineWidth;
    } else if (viewHeight > 8000) {
      return 2.5;
    } else if (viewHeight > 7000) {
      return 2.0;
    } else if (viewHeight > 5000) {
      return 1.8;
    } else if (viewHeight > 4000) {
      return 1.3;
    } else if (viewHeight > 3000) {
      return 1.0;
    } else if (viewHeight > 2000) {
      return 0.6;
    } else if (viewHeight > 1000) {
      return 0.3;
    } else if (viewHeight > 100) {
      return 0.14;
    } else {
      return 0.06;
    }
  }

  getOpacityByHeight(viewHeight) {
    if (viewHeight > 60000) {
      return defaultParticleSystemOptions.fadeOpacity;
    } else if (viewHeight > 30000) {
      return 0.98;
    } else if (viewHeight > 15000) {
      return 0.96;
    } else if (viewHeight > 7000) {
      return 0.95;
    } else if (viewHeight > 3000) {
      return 0.94;
    } else if (viewHeight > 1000) {
      return 0.93;
    } else {
      return 0.92;
    }
  }

  getSpeedFactorByHeight(viewHeight) {
    if (viewHeight > 2000) {
      return defaultParticleSystemOptions.speedFactor;
    } else if (viewHeight > 1000) {
      return 1.4;
    } else if (viewHeight > 500) {
      return 1.0;
    } else {
      return 0.8;
    }
  }

  setupEventListeners() {
    const that = this;

    this.camera.moveStart.addEventListener(function () {
      that.primitivesArray.forEach((primitive) => (primitive.show = false));
      // that.scene.primitives.show = false;
      console.log(that.primitivesArray.length);
    });

    this.camera.moveEnd.addEventListener(function () {
      const viewHeight = that.getViewHeight();
      let maxParticles = that.getMaxNumByHeight(viewHeight);
      let lineWidth = that.getLineWidthByHeight(viewHeight);
      let fadeOpacity = that.getOpacityByHeight(viewHeight);
      let speedFactor = that.getSpeedFactorByHeight(viewHeight);
      that.panel.maxParticles = maxParticles;
      that.panel.lineWidth = lineWidth;
      that.panel.fadeOpacity = fadeOpacity;
      that.panel.speedFactor = speedFactor;
      console.log(that.panel.getUserInput());
      that.particleSystem.applyUserInput(that.panel.getUserInput());

      that.updateViewerParameters();
      that.particleSystem.applyViewerParameters(that.viewerParameters);
      // that.scene.primitives.show = true;
      // setTimeout();
      that.primitivesArray.forEach((primitive) => (primitive.show = true));

      for (var i in gui.__controllers) {
        gui.__controllers[i].updateDisplay();
      }
    });

    var resized = false;
    window.addEventListener("resize", function () {
      resized = true;
      that.scene.primitives.show = false;
      // that.scene.primitives.removeAll();
      that.removePrimitives();
    });

    this.scene.preRender.addEventListener(function () {
      if (resized) {
        that.particleSystem.canvasResize(that.scene.context);
        resized = false;
        that.addPrimitives();
        that.scene.primitives.show = true;
      }
    });

    window.addEventListener("particleSystemOptionsChanged", function () {
      that.particleSystem.applyUserInput(that.panel.getUserInput());
    });

    window.addEventListener("cameraToRecon", function () {
      that.viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(
          127.0363431764427,
          37.585353994499876,
          7800
        ),
      });
    });

    window.addEventListener("cameraToSeoul", function () {
      that.viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(
          126.991703,
          37.552802,
          57800
        ),
      });
    });

    window.addEventListener("layerOptionsChanged", async function () {
      that.removePrimitives();
      that.setGlobeLayer(that.panel.getUserInput());
      // that.updateViewerParameters();
    });
  }

  debug() {
    const that = this;

    var animate = function () {
      that.viewer.resize();
      that.viewer.render();
      requestAnimationFrame(animate);
    };

    var spector = new SPECTOR.Spector();
    spector.displayUI();
    spector.spyCanvases();

    animate();
  }
}
