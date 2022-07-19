import { useEffect } from 'react';
import styles from './DomTagText.module.scss';

const DomTagTextEn = () => {

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
            <div className={styles.miniTitle}>You can create or delete tags at markers or POI positions.</div>
            <p>
                You can create an HTML tag on the desired POI location when creating a marker or by calling a method.<br />
                If you want to create a tag along with creating a marker, you can specify additional options when creating it.<br />
                If you want to create a marker or POI location that has already been created, you can create an HTML Tag on the object by calling the method.<br />
                To delete a created tag, you can delete it through the ID of the created tag.
            </p>
            <div className={styles.texts}>The options required when creating at the marker location are as follows.</div>
            <pre>
                <code className={styles.code}>
                    {`
    tag: HTMLElement,                                       // HTML element to display on map
    width: number,                                          // The width of the parent element of the entered tag
    height: number,                                         // The height of the parent element of the entered tag
    pos: 'TOP' | 'BOTTOM' | 'LEFT' | 'RIGHT' | 'CENTER' |   // The location where the dom tag will be created,
    isResize: true                                          // Whether to handle dynamic size according to zoom and map movement.
    `}
                </code>
            </pre>
            <div className={styles.texts}>Here's an example of creating a marker position.</div>
            <pre>
                <code className={styles.code}>
{`
    const tag = document.createElement('div');          // tags to be displayed on the map
    tag.style.width = '100%';
    tag.style.height = '100%';
    tag.textContent = 'test';

    map.markers.draw({
        marker: [
            {
                position: { x: 3000, y: 1000, z: 400 }, // marker position
                tagInfo: {                              // An object containing tag information. If not, tag is not created.
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
            <div className={styles.texts}>If you want to create a marker at the POI location after already creating a marker, the example is as follows. The id of the marker can be obtained through the userData of the corresponding marker.</div>
            <pre>
                <code className={styles.code}>
{`
    const tag = document.createElement('div');                          // tags to be displayed on the map
    tag.style.width = '100%';
    tag.style.height = '100%';
    tag.textContent = 'test';

    map.tag.addTag(type['poi' || 'marker'],[POI ID || marker ID], tag , 300, 200, 'TOP', true, floorId); 
    // type : 'marker' or 'poi', id, tag, width, height, pos, isResize, floorId
`}
                </code>
            </pre>
            <p>
                If you want to delete it, you can input the poi ID in the case of a poi, but in the case of a marker, you must use the position value of the marker to get an ID created by itself.<br />
                You can proceed with deletion with that ID.
            </p>
            <div className={styles.texts}>If you want to find a tag linked to a marker or POI, call the following method.</div>
            <code className={styles.code}>map.tag.findTag(id) // poi 또는 marker.userData.id</code>
            <div className={styles.texts}>The method call to delete a tag is</div>
            <code className={styles.code}>map.tag.removeTag(id);</code>
            <div className={styles.texts}>The method to delete all tags is as follows.</div>
            <code className={styles.code}>map.tag.removeAllTag()</code>
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
            <div className={styles.texts}>An example of how these methods work is as follows.</div>
        </div>
    )
}

export default DomTagTextEn;