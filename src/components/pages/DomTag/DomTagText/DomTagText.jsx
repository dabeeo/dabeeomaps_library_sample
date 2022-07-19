import { useEffect } from 'react';
import styles from './DomTagText.module.scss';

const DomTagText = () => {

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
        <div className={styles.domTagText}>
            <div className={styles.title}>HTML Tag(Dom Element)</div>
            <div className={styles.miniTitle}>marker나 POI position에 tag를 생성 또는 삭제할 수 있습니다.</div>
            <p>
                marker를 생성할 때나 메소드 호출로 원하는 POI 위치상에 HTML Tag를 생성할 수 있습니다.<br />
                marker 생성과 함께 Tag 생성을 원하실 경우 생성 시 추가 옵션을 지정하시면 됩니다.<br />
                이미 생성된 marker나 POI 위치에 생성을 원하시면 메소드 호출을 통해 해당 object에 HTML Tag를 생성할 수 있습니다.<br />
                생성된 태그를 삭제하실려면 생성된 태그의 id를 통해 삭제하실 수 있습니다.
            </p>
            <div className={styles.texts}>마커 위치에 생성시 필요한 옵션은 다음과 같습니다.</div>
            <pre>
                <code className={styles.code}>
                    {`
    tag: HTMLElement, map에 표시할 HTML element
    width: number, // 입력한 tag의 부모 element의 넓이
    height: number, // 입력한 tag의 부모 Element의 높이
    pos: 'TOP' | 'BOTTOM' | 'LEFT' | 'RIGHT' | 'CENTER' |  // Dom tag가 생성될 위치,
    isResize: true // zoom, map 이동에 따른 동적 사이즈 처리 여부.
    `}
                </code>
            </pre>
            <div className={styles.texts}>마커 위치 생성 예제는 다음과 같습니다.</div>
            <pre>
                <code className={styles.code}>
{`
    const tag = document.createElement('div'); // 지도상에 표시할 태그
    tag.style.width = '100%';
    tag.style.height = '100%';
    tag.textContent = 'test';

    map.markers.draw({
        marker: [
            {
                position: { x: 3000, y: 1000, z: 400 }, // 마커 위치
                tagInfo: {                              // 태그 정보를 담고 있는 object. 없을 경우 태그 생성안함
                    tag: tag,
                    width: 300,
                    height: 100,
                    pos: 'TOP',
                    isResize: true,
                }
            }
        ]
    })`}
                </code>
            </pre>
            <div className={styles.texts}>마커를 이미 생성한 뒤 또는 POI위치에 생성을 원하실 경우 예제는 다음과 같습니다. Marker의 id는 해당 marker의 userData를 통해 얻으실 수 있습니다.</div>
            <pre>
                <code className={styles.code}>
{`
    const tag = document.createElement('div'); // 지도상에 표시할 태그
    tag.style.width = '100%';
    tag.style.height = '100%';
    tag.textContent = 'test';

    map.tag.addTag(type['poi' || 'marker'], 원하는 좌표의 POI ID 또는 marker ID, tag , 300, 200, 'TOP', true, floorId); 
    // type : 'marker' or 'poi', id, tag, width, height, pos, isResize, floorId
`}
                </code>
            </pre>
            <div className={styles.texts}>마커 또는 POI와 연동된 tag를 찾고 싶다면 다음 메소드를 호출하시면 됩니다.</div>
            <code className={styles.code}>map.tag.findTag(id) // poi 또는 marker.userData.id</code>
            <div className={styles.texts}>tag를 삭제하는 메소드 호출은 다음과 같습니다.</div>
            <code className={styles.code}>map.tag.removeTag(id);</code>
            <div className={styles.texts}>전체 tag를 삭제하는 메소드는 다음과 같습니다.</div>
            <code className={styles.code}>map.tag.removeAllTag()</code>
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
    <div class="addPOI">addPOI</div>
    <div class="addMarker">addMarker</div>
    <div class="delete">delete</div>
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

      document.querySelector('.addPOI').addEventListener('click', function() {
        const tag = document.createElement('div'); 
        tag.style.width = '100%';
        tag.style.height = '100%';
        tag.style.backgroundColor = 'rgba(0, 0, 255, 1)';
        tag.style.color = 'white';
        tag.textContent = 'poi Tag';

        map.tag.addTag('poi', 'PO-NMvw3E0pe1690', tag , 300, 100, 'LEFT', true, 'FL-t4vqgyek3jnb8146');
      });

      document.querySelector('.addMarker').addEventListener('click', function() {
        const tag = document.createElement('div'); 
        tag.style.width = '100%';
        tag.style.height = '100%';
        tag.style.backgroundColor = 'rgba(0, 255, 0, 1)';
        tag.textContent = 'marker Tag';

        map.markers.draw({
            marker: [
                {
                    position: { x: 3000, y: 1000, z: 400 }, 
                    tagInfo: {  
                        tag: tag,
                        width: 200,
                        height: 200,
                        pos: 'LEFT',
                        isResize: true,
                    }
                }
            ]
        });
      });

      document.querySelector('.delete').addEventListener('click', function() {
        map.markers.clear();
        map.tag.removeAllTag();
      });
    });
  }
</script>
</html>`}
            </code>
        </pre>
            <div className={styles.texts}>해당 메소드들의 동작 예제는 다음과 같습니다.</div>
        </div>
    )
}

export default DomTagText;