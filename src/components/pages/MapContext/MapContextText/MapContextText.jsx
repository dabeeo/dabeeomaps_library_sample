import { useEffect } from 'react';
import styles from './MapContextText.module.scss';

const MapContextText = () => {

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
        <div className={styles.mapContextText}>
            <div className={styles.title}>MapContext</div>
            <div className={styles.miniTitle}>ID 또는 code를 사용해 Map을 수정할 수 있습니다.</div>
            <p>
                현재 Map의 층을 바꾸고 싶으실 때 바꿀 층의 ID를 이용해 층을 바꾸실 수 있습니다.<br />
                각 object 또는 poi가 가지고 있는 groupCode를 사용해서 관련 정보를 찾을 수 있습니다.<br />
                정보가 필요한 groupCode로 메소드를 호출 시 관련 정보를 얻으실 수 있습니다.<br />
            </p>
            <div className={styles.texts}>층 전환은 다음 메소드를 호출하시면 됩니다.</div>
            <code className={styles.code}>map.context.changeFloor([변경할 층 ID]);</code>
            <div className={styles.texts}>다음 메소드를 호출하시면 해당하는 ID의 POI를 Hide시킬 수 있습니다.</div>
            <code className={styles.code}>map.context.hide([POI ID]);</code>
            <div className={styles.texts}>다음 메소드를 호출하시면 해당하는 ID의 POI를 Show시킬 수 있습니다.</div>
            <code className={styles.code}>map.context.show([POI ID]);</code>
            <div className={styles.texts}>다음 메소드를 호출하시면 map을 지우실 수 있습니다.</div>
            <code className={styles.code}>map.context.cleanup();</code>
            <div className={styles.middleTitle}>GroupCode</div>
            <div className={styles.texts}>다음 예제로 groupCode에 관한 정보를 얻으실 수 있습니다.</div>
            <pre>
                <code className={styles.code}>
                    const layerGroup = map.context.getLayerGroup();
                </code>
            </pre>
            <div className={styles.miniTitle}>findItemChildCode</div>
            <div className={styles.reserved}>입력받은 code의 하위 code들 반환</div>
            <pre>
                <code className={styles.code}>
                    layerGroup.findItemChildCode([GroupCode]);
                </code>
            </pre>
            <div className={styles.miniTitle}>findItemAllChildCode</div>
            <div className={styles.texts}>입력받은 code의 모든 하위 code들 반환</div>
            <pre>
                <code className={styles.code}>
                    layerGroup.findItemAllChildCode([GroupCode]);
                </code>
            </pre>
            <div className={styles.miniTitle}>findItemParentCode</div>
            <div className={styles.texts}>입력받은 code의 상위 code 반환</div>
            <pre>
                <code className={styles.code}>
                    layerGroup.findItemParentCode([GroupCode]);
                </code>
            </pre>
            <div className={styles.miniTitle}>findRootParent</div>
            <div className={styles.texts}>입력받은 code의 root code 반환</div>
            <pre>
                <code className={styles.code}>
                    layerGroup.findRootParent([GroupCode]);
                </code>
            </pre>
            <div className={styles.miniTitle}>showByCode</div>
            <div className={styles.texts}>입력받은 code의 groupCode를 가지는 object와 그 모든 하위 요소들을 map에 표시.</div>
            <pre>
                <code className={styles.code}>
                    map.context.showByCode([GroupCode]);
                </code>
            </pre>
            <div className={styles.miniTitle}>hideByCode</div>
            <div className={styles.texts}>입력받은 code의 groupCode를 가지는 object와 그 모든 하위 요소들을 map에서 숨김.</div>
            <pre>
                <code className={styles.code}>
                    map.context.hideByCode([GroupCode]);
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
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id='viewport' class="viewport">
    <select id='contextInputer' class="contextInputer">
      <option value="1">changeFloor</option>
      <option value="2">display by Id</option>
      <option value="3">GroupCode</option>
    </select>
    <div class="changeFloorContainer" >
      <select class="changeFloorInputer"></select>
      <div class="floorBtn">change</div>
    </div>
    <div class="displayBy" style="display: none;">
      <select class="displayInputer"></select>
      <div class="displayShow">show</div>
      <div class="displayHide">hide</div>
    </div>
    <div class="layerContainer" style="display: none;">
      <select id='layerInputer' class="layerInputer"></select>
      <div class="showBtn">show</div>
      <div class="hideBtn">hide</div>
    </div>
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
      const mapContainer = document.querySelector('#viewport');
      const map = await dabeeoMaps.showMap(mapContainer, mapOption, mapData);

      document.querySelector('.contextInputer').addEventListener('change', function(e) {
        if (e.target.value === '1') {
          document.querySelector('.changeFloorContainer').style.display = 'block';
          document.querySelector('.displayBy').style.display = 'none';
          document.querySelector('.layerContainer').style.display = 'none';
        }

        if (e.target.value === '2') {
          document.querySelector('.changeFloorContainer').style.display = 'none';
          document.querySelector('.displayBy').style.display = 'block';
          document.querySelector('.layerContainer').style.display = 'none';
        }

        if (e.target.value === '3') {
          document.querySelector('.changeFloorContainer').style.display = 'none';
          document.querySelector('.displayBy').style.display = 'none';
          document.querySelector('.layerContainer').style.display = 'block';
        }
      });

      mapData.payload.floors.map((floor) => {
        const option = document.createElement('option');
        option.value = floor.id;
        option.innerText = floor.id;
        document.querySelector('.changeFloorInputer').appendChild(option);

        floor.pois.map((poi) => {
          const option = document.createElement('option');
          option.value = poi.id;
          option.innerText = poi.id;
          document.querySelector('.displayInputer').appendChild(option);
        });
      });

      document.querySelector('.floorBtn').addEventListener('click', function() {
        map.context.changeFloor(document.querySelector('.changeFloorInputer').value);
      });

      document.querySelector('.displayShow').addEventListener('click', function() {
        map.context.show(document.querySelector('.displayInputer').value);
      });

      document.querySelector('.displayHide').addEventListener('click', function() {
        map.context.hide(document.querySelector('.displayInputer').value);
      })
      
      const codes = map.context.getLayerGroup().codes;
      const codeArray = [];
      getCodes(codes, codeArray);

      const layerInput = document.querySelector('#layerInputer');
      codeArray.map((v) => {
        const option = document.createElement('option');
        option.value = v;
        option.innerText = v;
        layerInput.appendChild(option);
      });

      document.querySelector('.showBtn').addEventListener('click', function() {
        map.context.showByCode(document.querySelector('#layerInputer').value);
      });

      document.querySelector('.hideBtn').addEventListener('click', function() {
        map.context.hideByCode(document.querySelector('#layerInputer').value);
      });
    });

    function getCodes(list, array) {
        list.forEach((v) => {
            array.push(v.code);

            if (v.child.length > 0) {
                getCodes(v.child, array);
            }
        });
    }
  }
</script>
</html>`}
                </code>
            </pre>
            <div className={styles.texts}>실행 예제는 다음과 같습니다.</div>
            
        </div>
    )
}

export default MapContextText;