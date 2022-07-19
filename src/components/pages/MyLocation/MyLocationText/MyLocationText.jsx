import { useEffect } from 'react';
import styles from './MyLocationText.module.scss';

const MyLocationText = () => {

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
        <div className={styles.myLocationText}>
            <div className={styles.title}>내 위치 마커 표시하기</div>
            <div className={styles.miniTitle}>map.mylocation으로 내 위치를 표시하거나 지울 수 있습니다.</div>
            <p>
                내 위치 마커의 위치를 지정하고 마커 아이콘의 속성과 애니메이션 효과를 설정할 수 있습니다.<br />
                내 위치 마커 아이콘의 속성을 지정하지 않는 경우 디폴트 값으로 표시되며 애니메이션 효과는 활성화되지 않습니다.<br />
            </p>
            <div className={styles.texts}>내 위치 마커의 속성과 그리는 예제는 아래와 같습니다.</div>
            <pre>
                <code className={styles.code}>
{`const locationOption = {
    x: number,                                          // 내 위치 x 좌표
    y: number,                                          // 내 위치 y 좌표
    z: number,                                          // 내 위치 z 좌표
    onActive: boolean,                                  // 타층 이동후 다시 돌아왔을 때 표시 여부
    isKeep: boolean,                                    // 층 변경시에도 유지되는 지에 대한 여부. default값은 false
    icon: {                                             // 내 위치 마커의 아이콘 속성
        image: string,                                  // 내 위치 마커의 이미지
        size: { width: number, height: number }         // 내 위치 마커 아이콘의 크기
    },
    animate: boolean | {                                // 내 위치 마커 애니메이션 효과 속성
        color: string,                                  // 내 위치 마커의 색상
        opacity: number,                                // 내 위치 마커의 투명도
        desireScale: number                             // 내 위치 마커의 최대 크기
    }
}

map.mylocation.draw(locationOption);
`}
                </code>
            </pre>
            <div className={styles.texts}>내 위치 마커 삭제 예제는 다음과 같습니다.</div>
            <pre>
                <code className={styles.code}>
                    map.mylocation.clear();
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
  <div id='viewport' class="viewport">
    <div class="inputContainer">
      <input type="text" placeholder="x" class="pointX" />
      <input type='text' placeholder="y" class="pointY" />
      <input type='text' placeholder="z" class="pointZ" />
    </div>
    <div class="addLocation">add</div>
    <div class="removeLocation">remove</div>
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

      document.querySelector('.addLocation').addEventListener('click', function() {
        const x = document.querySelector('.pointX').value ? Number(document.querySelector('.pointX').value) : 1000;
        const y = document.querySelector('.pointY').value ? Number(document.querySelector('.pointY').value) : 1000;
        const z = document.querySelector('.pointZ').value ? Number(document.querySelector('.pointZ').value) : 1000;

        const location = {
            x: x, 
            y: y, 
            z: z,
            animate: {
                color: "#00ff00",
                opacity: 0.4,
                desireScale: 4,
            },
        };

        map.mylocation.draw(location);
      });

      document.querySelector('.removeLocation').addEventListener('click', function() {
        map.mylocation.clear();
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

export default MyLocationText;