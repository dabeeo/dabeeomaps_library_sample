import { Panel } from "./gui.js";
import { Wind3D } from "./wind3D.js";
var demo = false;
const mode = {
  debug: demo ? false : true,
};

const panel = new Panel();
const wind3D = new Wind3D(panel, mode);
