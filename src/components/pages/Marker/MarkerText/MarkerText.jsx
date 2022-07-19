import { useEffect } from 'react';
import styles from './MarkerText.module.scss';

const MarkerText = () => {

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
        <div className={styles.markerText}>
            <div className={styles.title}>Marker</div>
            <div className={styles.miniTitle}>원하는 좌표에 marker를 생성, 삭제할 수 있습니다.</div>
            <p>
                각 마커의 위치를 지정하고 각 마커에 원하는 아이콘을 지정할 수 있습니다.<br />
                position을 제외한 나머지 값들을 입력하지 않을 경우 디폴트로 제공되는 값을 사용합니다.<br />
                여러 개의 마커를 지정하기 위하여 배열 형태로 인자를 받습니다.<br />
                한층에만 마커를 그릴 경우에는 층정보를 생략하나, 여러층에 한꺼번에 마커를 표시하고자하는 경우는 각 마커에 층아이디를 지정해줘야 합니다.<br />
                지도를 2D로 표현하더라도 마커의 좌표는 3D로 줘야합니다. 기본적으로 지도데이터가 3D로 되어 있기 떄문입니다.<br />
                마커의 속성은 아래 예제와 같습니다.
            </p>
            <pre>
                <code className={styles.code}>
{`
    position: {
            x: number,                      // 마커의 x좌표
            y: number,                      // 마커의 y좌표
            z: number                       // 마커의 z좌표
    },
    image: './img_marker_blue-3x.png',      // 아이콘 이미지
    size: {
        width: number,                      // 아이콘의 넓이
        height: number                      // 아이콘의 높이 
    },
    floorId: string,                        // 각 마커의 층을 지정. 지정하지않을 경우 현재 보이는 층에만 표시,
    data: any,                              // 마커를 클릭했을 때 반환할 정보
    async: true,                            // 마커의 크기가 줌에 관계없이 항상 동일한 크기로 보여줄지 여부. true인 경우네는 항상 동일한 크기로 보임. default 값은 false
    tagInfo: object,                        // 마커와 연동되는 dom tag정보.
    isKeep: boolean                         // 층 변경시에도 유지되는 지에 대한 여부. default값은 false`}
                </code>
            </pre>
            <div className={styles.texts}>marker 그리는 메소드는 다음과 같습니다.</div>
            <pre>
                <code className={styles.code}>
{`
    map.markers.draw({
        marker: [
            {
                position: { x: 100, y: 200, z: 10 },
                async: true,
                isKeep: true,
            },
        ],
    })
`}
                </code>
            </pre>
            <div className={styles.texts}>marker 삭제 관련 메소드는 다음과 같습니다. map상에 존재하는 모든 marker를 삭제합니다.</div>
            <pre>
                <code className={styles.code}>
                    map.markers.clear();
                </code>
            </pre>
            <div className={styles.texts}>실행 코드 예제는 다음과 같습니다.</div>
            <pre>
                <code className={styles.code}>
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id='viewport' class="viewport">
    <div class="inputContainer">
      <input type="text" placeholder="x" class="pointX" />
      <input type='text' placeholder="y" class="pointY" />
      <input type='text' placeholder="z" class="pointZ" />
    </div>
    <div class="addMarker">add</div>
    <div class="clearMarker">clear</div>
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

      document.querySelector('.addMarker').addEventListener('click', function() {
        const x = document.querySelector('.pointX').value ? Number(document.querySelector('.pointX').value) : 1000;
        const y = document.querySelector('.pointY').value ? Number(document.querySelector('.pointY').value) : 1000;
        const z = document.querySelector('.pointZ').value ? Number(document.querySelector('.pointZ').value) : 1000;

        map.markers.draw({
            marker: [
                {
                    position: { x: x, y: y, z: z },
                    async: true,
                    isKeep: true,
                },
            ],
        })
      });

      document.querySelector('.clearMarker').addEventListener('click', function() {
        map.markers.clear();
      });
    });
  }
</script>
</html>`}
                </code>
            </pre>
            <div className={styles.texts}>실행 예제는 다음과 같습니다.</div>
        </div>
    )
}

export default MarkerText;