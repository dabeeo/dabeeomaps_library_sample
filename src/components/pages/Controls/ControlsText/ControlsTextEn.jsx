import { useEffect } from 'react';
import styles from './ControlsText.module.scss';

const ControlTextEn = () => {

    useEffect(() => {
        let codeElement = document.querySelectorAll("code");
            if (!codeElement) return;
            codeElement.forEach((data) => {
                let text = data.innerHTML;
                let text1 = text.replace(/&lt;/gi, "<");
                let text2 = text1.replace(/&gt;/gi, ">");
                let text3 = text2.replace(/[<>]/g, `<span>$&</span>`);
                let text4 = text3.replace(/['"]([^'"]*)["']/g, `<span class=${styles.value}>$&</span>`);
                let text5 = text4.replace(
                    / var | if | return| let | const | function | new | window| document| for /g,
                    `<span class=${styles.reserved}>$&</span>`,
                );
                let text6 = text5.replace(/[{}()]/g, `<span class=${styles.special}>$&</span>`);
                let text7 = text6.replace(/\/\/.+/g, `<span class=${styles.comment}>$&</span>`);
                data.innerHTML = text7;
            });
    }, []);

    return (
        <div className={styles.cameraControlText}>
            <div className={styles.title}>Controls</div>
            <div className={styles.miniTitle}>You can control the camera to see the desired location or control the zoom.</div>
            <p>
                In Dabeeo maps library, you can control your camera to<br></br>
                provides methods to position the camera at a desired location or adjust zoom.<br />
            </p>
            <div className={styles.texts}>If you want a 2D / 3D conversion, you can use the methods below.</div>
            <code className={styles.code}>map.control.changeCamera("3D"); // You can enter any dimension you want 2D | 3D.</code>
            <div className={styles.text}>The method below moves the camera to the desired coordinates.</div>
            <pre>
                <code className={styles.code}>
{`const position = { x: number, y: number };              // The x and y values of the coordinates you want to move
map.control.moveTo(position);
`}
                </code>
            </pre>
            <div className={styles.text}>The method below initializes all rotation, title, and position values applied to the camera to the initial state.</div>
            <code className={styles.code}>map.control.reset();</code>
            <div className={styles.text}>By invoking the methods below, you can apply rotation, tilt, zoom level of the desired camera</div>
            <pre>
                <code className={styles.code}>
{`const control = {
    rotation : number,                                  // rotation value of camera
    tilt: number,                                       // title value of camera
    zoomLevel: number                                   // zoomLevel value of camera
};

map.control.set(control);
`}
                </code>
            </pre>
            <div className={styles.text}>You can also edit zoom by using the method below.</div>
            <pre>
                <code className={styles.code}>
{`map.control.changeZoom(number);                   // zoomLevel(percent) 100(%) is the current zoomLevel
map.control.zoomIn();                             // zoom In
map.control.zoomOut();                            // zoom Out
`}
                </code>
            </pre>
            <div className={styles.texts}>The execution example code is as follows</div>
            <pre>
                <code className={styles.code}>
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id='viewport' class="viewport"></div>
  <select class="dimensionSelect">
    <option value="2D">2D</option>
    <option value="3D" selected>3D</option>
  </select>
  <div class="moveToContainer">
    <input type='text' placeholder="x" class="moveToX" />
    <input type='text' placeholder="y" class="moveToY" />
    <div class="moveTo">moveTo</div>
  </div>
  <div class="resetBtn">reset</div>
  <div class="setContainer">
    <input type="text" placeholder="rotation" class="rotation" />
    <input type='text' placeholder="tilt" class="tilt" />
    <input type="text" placeholder="zoom" class="zoom" />
    <div class="set">set</div>
  </div>
  <div class="changeZoomContainer">
    <input type='text' placeholder="zoom" class="changeZoom" />
    <div class="changeZoomBtn">changeZoom</div>
  </div>
  <div class="zoomContainer">
    <div class="zoomIn">zoomIn</div>
    <div class="zoomOut">zoomOut</div>
  </div>
</body>
<script type="text/javascript" src='https://assets.dabeeomaps.com/upload/library/dabeeomaps-4.0.0.js'></script>
<script>
  window.onload = function() {
    const dabeeoMaps = new dabeeo.Maps();
    dabeeoMaps.getMapData({
      clientId: "75hb8YSnAokb-sZ04aDR91",
      clientSecret: "0f7ad84f160c7b3fd1849a7920af718b",
    }).then( async (mapData) => {
      const mapOption = Object.assign({});
      const mapContainer = document.getElementById('viewport');
      const map = await dabeeoMaps.showMap(mapContainer, mapOption, mapData);

      document.querySelector('.dimensionSelect').addEventListener('change', function(e) {
        map.control.changeCamera(e.target.value);
      });

      document.querySelector('.moveTo').addEventListener('click', function() {
        const x = document.querySelector('.moveToX').value ? document.querySelector('.moveToX').value : 0;
        const y = document.querySelector('.moveToY').value ? document.querySelector('.moveToY').value : 0;

        map.control.moveTo({ x: Number(x), y: Number(y)});
      });

      document.querySelector('.resetBtn').addEventListener('click', function() {
        map.control.reset();
      });

      document.querySelector('.set').addEventListener('click', function() {
        const rotation = document.querySelector('.rotation').value ? document.querySelector('.rotation').value : 0;
        const tilt = document.querySelector('.tilt').value ? document.querySelector('.tilt').value : 0;
        const zoom = document.querySelector('.zoom').value ? document.querySelector('.zoom').value : 0;
      
        map.control.set({ rotation: rotation, tilt: tilt, zoom: zoom });
      });

      document.querySelector('.changeZoomBtn').addEventListener('click', function() {
        const zoom = document.querySelector('.changeZoom').value ? document.querySelector('.changeZoom').value : 0;
        map.control.changeZoom(zoom);
      });

      document.querySelector('.zoomIn').addEventListener('click', function() {
        map.control.zoomIn();
      });

      document.querySelector('.zoomOut').addEventListener('click', function() {
        map.control.zoomOut();
      })
    });
  }
</script>
</html>`}
                </code>
            </pre>
            <div className={styles.text}>You can check the application example on the map below.</div>
        </div>
    )
}

export default ControlTextEn;