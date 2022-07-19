import { useEffect } from 'react';
import styles from './MarkerText.module.scss';

const MarkerTextEn = () => {

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
            <div className={styles.miniTitle}>You can create or delete markers at desired coordinates.</div>
            <p>
                You can position each marker and assign the desired icon to each marker.<br />
                If you do not enter any other values ​​except for position, the default value is used.<br />
                It receives an argument in the form of an array to designate multiple markers.<br />
                When drawing markers on only one floor, floor information is omitted, but if you want to display markers on multiple floors at once, you must designate a floor ID for each marker.<br />
                Even if the map is expressed in 2D, the coordinates of the markers must be given in 3D. This is because the map data is basically in 3D.<br />
                The properties of the marker are as in the example below.
            </p>
            <pre>
                <code className={styles.code}>
{`
    position: {
            x: number,                      // marker's x-coordinate
            y: number,                      // marker's y-coordinate
            z: number                       // marker's z-coordinate
    },
    image: './img_marker_blue-3x.png',      // icon image
    size: {
        width: number                       // icon width
        height: number                      // icon height 
    },
    floorId: string,                        // Designate a layer for each marker. If not specified, only the currently visible floor is displayed.
    data: any,                              // Information to return when a marker is clicked
    async: true,                            // Whether the marker's size will always show the same size regardless of zoom. If true, they always appear the same size. default is false
    tagInfo: object,                        // dom tag information linked to the marker.
    isKeep: boolean                         // Whether or not it persists across floor changes. default value is false`}
                </code>
            </pre>
            <div className={styles.texts}>The method to draw a marker is as follows.</div>
            <pre>
                <code className={styles.code}>
{`
    map.markers.draw({
        marker: [
            {
                position: { x: 100, y: 200, z: 10 },
                async: true
                isKeep: true,
            },
        ],
    })
`}
                </code>
            </pre>
            <div className={styles.texts}>The methods related to marker deletion are as follows. Delete all markers on the map.</div>
            <pre>
                <code className={styles.code}>
                    map.markers.clear();
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
            <div className={styles.texts}>Here is a running example</div>
        </div>
    )
}

export default MarkerTextEn;