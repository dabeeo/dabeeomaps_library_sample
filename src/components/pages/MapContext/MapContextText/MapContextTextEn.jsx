import { useEffect } from 'react';
import styles from './MapContextText.module.scss';

const MapContextTextEn = () => {

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
            <div className={styles.miniTitle}>You can edit the Map using ID or code.</div>
            <p>
                When you want to change the floor of the current map, you can change the floor using the ID of the floor you want to change.<br />
                You can find related information by using the groupCode that each object or poi has.<br />
                When you call a method with groupCode that needs information, you can get related information.<br />
            </p>
            <div className={styles.texts}>To switch floors, call the following method.</div>
            <code className={styles.code}>map.context.changeFloor([변경할 층 ID]);</code>
            <div className={styles.texts}>You can hide the POI of the corresponding ID by calling the following method.</div>
            <code className={styles.code}>map.context.hide([POI ID]);</code>
            <div className={styles.texts}>If you call the following method, you can show the POI of the corresponding ID.</div>
            <code className={styles.code}>map.context.show([POI ID]);</code>
            <div className={styles.texts}>You can delete the map by calling the following method.</div>
            <code className={styles.code}>map.context.cleanup();</code>
            <div className={styles.middleTitle}>GroupCode</div>
            <div className={styles.texts}>You can get information about groupCode with the following example.</div>
            <pre>
                <code className={styles.code}>
                    const layerGroup = map.context.getLayerGroup();
                </code>
            </pre>
            <div className={styles.miniTitle}>findItemChildCode</div>
            <div className={styles.reserved}>Returns the sub-codes of the input code</div>
            <pre>
                <code className={styles.code}>
                    layerGroup.findItemChildCode([GroupCode]);
                </code>
            </pre>
            <div className={styles.miniTitle}>findItemAllChildCode</div>
            <div className={styles.texts}>Returns all sub-codes of the input code</div>
            <pre>
                <code className={styles.code}>
                    layerGroup.findItemAllChildCode([GroupCode]);
                </code>
            </pre>
            <div className={styles.miniTitle}>findItemParentCode</div>
            <div className={styles.texts}>Returns the upper code of the input code</div>
            <pre>
                <code className={styles.code}>
                    layerGroup.findItemParentCode([GroupCode]);
                </code>
            </pre>
            <div className={styles.miniTitle}>findRootParent</div>
            <div className={styles.texts}>Returns the root code of the input code</div>
            <pre>
                <code className={styles.code}>
                    layerGroup.findRootParent([GroupCode]);
                </code>
            </pre>
            <div className={styles.miniTitle}>showByCode</div>
            <div className={styles.texts}>The object with the groupCode of the input code and all its sub-elements are displayed on the map.</div>
            <pre>
                <code className={styles.code}>
                    map.context.showByCode([GroupCode]);
                </code>
            </pre>
            <div className={styles.miniTitle}>hideByCode</div>
            <div className={styles.texts}>The object with the groupCode of the input code and all its sub-elements are hidden from the map.</div>
            <pre>
                <code className={styles.code}>
                    map.context.hideByCode([GroupCode]);
                </code>
            </pre>
            <div className={styles.texts}>Here is the running example code.</div>
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
            <div className={styles.texts}>A running example is</div>
            
        </div>
    )
}

export default MapContextTextEn;