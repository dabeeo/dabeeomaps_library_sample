import { useEffect } from 'react';
import styles from './ControlsText.module.scss';

const ControlsText = () => {

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
            <div className={styles.miniTitle}>camera를 control하여 원하는 위치를 보거나 zoom을 control 할 수 있습니다.</div>
            <p>
                Dabeeo maps library에서는 사용자 camera를 컨트롤 하여<br></br>
                원하는 위치에 카메라가 위치하거나 zoom을 조정할 수 있는 메소드들을 제공하고 있습니다.<br />
            </p>
            <div className={styles.texts}>2D / 3D 전환을 원할시 아래 메소드를 이용하시면 됩니다.</div>
            <code className={styles.code}>map.control.changeCamera("3D"); // 2D | 3D 중 원하는 차원을 입력하시면 됩니다</code>
            <div className={styles.text}>아래 메소드는 카메라를 원하는 좌표로 이동시키는 동작을 합니다.</div>
            <pre>
                <code className={styles.code}>
{`const position = { x: number, y: number };              // 이동하고자 하는 좌표의 x, y값
map.control.moveTo(position);
`}
                </code>
            </pre>
            <div className={styles.text}>아래 메소드는 카메라에 적용된 모든 rotation, title, position값을 처음 상태로 초기화 합니다.</div>
            <code className={styles.code}>map.control.reset();</code>
            <div className={styles.text}>아래 메소드를 호출하면 원하는 카메라의 rotation, tilt, zoom을 적용시킬 수 있습니다</div>
            <pre>
                <code className={styles.code}>
{`const control = {
    rotation : number,                                  // camera의 rotation 값
    tilt: number,                                       // camera의 tilt 값
    zoom: number                                        // camera의 zoom의 percent value
};

map.control.set(control);
`}
                </code>
            </pre>
            <div className={styles.text}>아래 메소드를 활용하여 zoom을 수정하실 수도 있습니다.</div>
            <pre>
                <code className={styles.code}>
{`map.control.changeZoom(number);                   // zoomLevel(percent) 100(%)가 현재 zoomLevel 
map.control.zoomIn();                             // zoom In
map.control.zoomOut();                            // zoom Out
`}
                </code>
            </pre>
            <div className={styles.texts}>실행 예제 코드는 다음과 같습니다.</div>
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
            <div className={styles.text}>아래 지도에서 적용 예시를 확인해보실 수 있습니다.</div>
        </div>
    )
}

export default ControlsText;