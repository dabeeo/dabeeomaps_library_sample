var demo = Cesium.defaultValue(demo, false);

export const fileOptions = {
  dataDirectory
    : "../../public/windData/",
  dataFile: "demo.nc",
  glslDirectory:  "glsl/",
};

export const defaultParticleSystemOptions = {
  maxParticles: 110 * 110,
  particleHeight: 30.0,
  fadeOpacity: 0.996,
  dropRate: 0.02,
  dropRateBump: 0.02,
  speedFactor: 4.0,
  lineWidth: 6.0,
};

const globeLayers = [
  {
    name: "2018.09.16.00:00",
    type: "WorldTerrain",
    fileName: "demo.nc",
  },
  { name: "2024.01.08.00:00", type: "2401080000", fileName: "2401080000.nc" },
  { name: "2024.01.08.06:00", type: "2401080600", fileName: "2401080600.nc" },
  { name: "2024.01.08.12:00", type: "2401081200", fileName: "2401081200.nc" },

];

const defaultLayerOptions = {
  globeLayer: globeLayers[0],
  WMS_URL:
    "https://www.ncei.noaa.gov/data/global-forecast-system/access/grid-004-0.5-degree/analysis/202307/20230726/gfs_4_20230726_0000_000.grb2",
};

export class Panel {
  constructor() {
    this.maxParticles = defaultParticleSystemOptions.maxParticles;
    this.particleHeight = defaultParticleSystemOptions.particleHeight;
    this.fadeOpacity = defaultParticleSystemOptions.fadeOpacity;
    this.dropRate = defaultParticleSystemOptions.dropRate;
    this.dropRateBump = defaultParticleSystemOptions.dropRateBump;
    this.speedFactor = defaultParticleSystemOptions.speedFactor;
    this.lineWidth = defaultParticleSystemOptions.lineWidth;
    this.globeLayer = defaultLayerOptions.globeLayer;
    this.cameraToRecon = () => {
      var event = new CustomEvent("cameraToRecon");
      window.dispatchEvent(event);
    };
    this.cameraToSeoul = () => {
      var event = new CustomEvent("cameraToSeoul");
      window.dispatchEvent(event);
    };
    this.WMS_URL = defaultLayerOptions.WMS_URL;

    var layerNames = [];
    globeLayers.forEach(function (layer) {
      layerNames.push(layer.name);
    });
    this.layerToShow = layerNames[0];

    var onParticleSystemOptionsChange = function () {
      var event = new CustomEvent("particleSystemOptionsChanged");
      window.dispatchEvent(event);
    };

    const that = this;
    var onLayerOptionsChange = function () {
      for (var i = 0; i < globeLayers.length; i++) {
        if (that.layerToShow == globeLayers[i].name) {
          that.globeLayer = globeLayers[i];
          break;
        }
      }
      var event = new CustomEvent("layerOptionsChanged");
      window.dispatchEvent(event);
    };

    // const onCameraChange = function () {};
    // add:function(){ alert("clicked")

    window.onload = function () {
      this.gui = new dat.GUI({ autoPlace: false });

      this.gui
        .add(that, "maxParticles", 100, 110 * 110, 1)
        .onFinishChange(onParticleSystemOptionsChange);
      this.gui
        .add(that, "particleHeight", 0.1, 100, 0.01)
        .onFinishChange(onParticleSystemOptionsChange);
      this.gui
        .add(that, "fadeOpacity", 0.9, 0.999, 0.001)
        .onFinishChange(onParticleSystemOptionsChange);
      // this.gui
      //   .add(that, "dropRate", 0.0, 0.1)
      //   .onFinishChange(onParticleSystemOptionsChange);
      // this.gui
      //   .add(that, "dropRateBump", 0, 0.2)
      //   .onFinishChange(onParticleSystemOptionsChange);
      this.gui
        .add(that, "speedFactor", 0.01, 4, 0.001)
        .onFinishChange(onParticleSystemOptionsChange);
      this.gui
        .add(that, "lineWidth", 0.01, 8.0, 0.001)
        .onFinishChange(onParticleSystemOptionsChange);

      this.gui
        .add(that, "layerToShow", layerNames)
        .onFinishChange(onLayerOptionsChange);

      this.gui.add(that, "cameraToRecon").onFinishChange();
      this.gui.add(that, "cameraToSeoul").onFinishChange();

      var panelContainer = document
        .getElementsByClassName("cesium-widget")
        .item(0);
      this.gui.domElement.classList.add("myPanel");

      console.log("gui", this.gui);

      panelContainer.appendChild(this.gui.domElement);
    };
  }

  getUserInput() {
    // make sure maxParticles is exactly the square of particlesTextureSize
    var particlesTextureSize = Math.ceil(Math.sqrt(this.maxParticles));
    this.maxParticles = particlesTextureSize * particlesTextureSize;

    return {
      particlesTextureSize: particlesTextureSize,
      maxParticles: this.maxParticles,
      particleHeight: this.particleHeight,
      fadeOpacity: this.fadeOpacity,
      dropRate: this.dropRate,
      dropRateBump: this.dropRateBump,
      speedFactor: this.speedFactor,
      lineWidth: this.lineWidth,
      globeLayer: this.globeLayer,
      WMS_URL: this.WMS_URL,
    };
  }
}
