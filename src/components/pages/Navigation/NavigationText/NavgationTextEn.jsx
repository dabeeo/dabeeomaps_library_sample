import { useEffect } from 'react';
import styles from './NavigationText.module.scss';

const NavigationTextEn = () => {

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

    return(
        <div className={styles.navigationText}>
            <div className={styles.title}>Navigation</div>
            <div className={styles.miniTitle}>You can set the route from the origin to the destination on the map and receive guidance.</div>
            <p>
                After setting the route on the map, you can set the simulation driving animation that draws and moves the route.<br />
            </p>
            <div className={styles.texts}>You can set options for the route via map.routeSimulation.set.</div>
            <pre>
                <code className={styles.code}>
                    {`
    const naviOption = {
        lineColor:"#ff00ff",        // Specifies the color of the navigation driving line
        lineSpotSize: number,       // Specifies the thickness of the points on the driving line. Applies when the driving line property is dotted line.
        lineZ : number,             // Specifies the z-axis value of the travel line.
        speedRate: number,          // Designation of simulated driving speed. For example, if 1.5 is specified, the speed is 1.5 times faster than the default.
        solidLineEnabled: true,     // Determines the properties of the driving line. When false, it is drawn with a dotted line, and when true, it is drawn with a solid line. default is false.
        solidLineWidth: number      // The thickness of the solid line. default is 1
    }

    map.routeSimulation.set(naviOption);
                    `}
                </code>
            </pre>
            <div className={styles.texts}>You can set the route via map.routeSimulation.setRoute. You have to use it asynchronously.</div>
            <pre>
                <code className={styles.code}>
                    {`
    routeOption = {
        origin: {                               // Starting point
            poiId: [Origin POI ID] or position: { x: number, y: number, z: number},
            floorId: [Floor ID of origin]
        },
        destination:  {                         // destination
            poiId: [Destination POI ID] or position: { x: number, y: number, z: number},
            floorId: [Floor ID of destination]
        },
        type: "recommendation",                 // Inter-floor movement path (recommendation - recommended, stairs - stairs, elevator - elevator)
        waypoints: [                            // waypoint
            {
                poiId: [Waypoint POI ID] or position: { x: number, y: number, z: number},
                floorId: [Floor ID of waypoints]
            }
        ],
        retResponse: boolean                    // Option for the return value, if set to true, the required time and distance are returned. If false, only the required time is returned.
    }

    map.routeSimulation.setRoute(routeOption);
                    `}
                </code>
            </pre>
            <p>
                You can run simulation driving animations through map.routeSimulation.draw.<br />
                It must be executed after setting the route through setRoute.
            </p>
            <pre>
                <code className={styles.code}>
                    {`
    const animOption = {
        destOption: {                   //  destination option
            activeDest: boolean,        //  active or not
            color: "#00ffff",           //  The color value you want to change
            opacity: number,            //  Transparency value you want to change
            isAnimate: boolean,         //  Whether to apply color animation effects
            duration: number,           //  Time to complete animation in milliseconds, the default is 1000
            isRepeat: boolean,          //  Whether the animation repeats true is repeat, false is repeat x. default is false
            isYoyo: boolean             //  When the animation is complete, if the isRepeat option is true, the repeat method, if true, the reverse order is performed, and the default is false.
        },
        zoom: number,                   //  Zoom Level during animation operation
        changeFloorDelay: number        //  Delay time when changing floors
    }
    map.routeSimulation.draw(animOption);`}
                </code>
            </pre>
            <div className={styles.texts}>You can stop navigation while it is running through the following method</div>
            <code className={styles.code}>map.routeSimulation.stop();</code>
            <div className={styles.texts}>You can delete a route using the following method</div>
            <code className={styles.code}>map.routeSimulation.clear();</code>
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
  <div id='viewport' class="viewport">
    <div class="routeBtn">Route</div>
    <div class="navBtn">Navigation</div>
    <div class="stopBtn">Stop</div>
    <div class="clearBtn">Clear</div>
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
      const mapContainer = document.getElementById('viewport');
      const mapOption = Object.assign({ canvasFitTo: mapContainer});
      const map = await dabeeoMaps.showMap(mapContainer, mapOption, mapData);

      const route = {
        origin: {
          poiId : "PO-4JvSQCWHC2270", // 남자화장실 (11층)
          floorId: "FL-t4vqgyek3jnb8146"
        },
        destination:  {
          poiId : "PO-M02DvTVjp8449", // 회의실1 (11층)
          floorId: "FL-t4vqgyek3jnb8146"
        },
        type: "recommendation",
        // type: "stairs",
        // type: "elevator",
        waypoints: [
          {
            poiId : "PO-NMvw3E0pe1690", // 플랫폼사업부 회의실 (11층)
            floorId: "FL-t4vqgyek3jnb8146"
          },
          {
            poiId : "PO-bG8eepPeB2502", // 여자화장실 (2층)
            floorId: "FL-vf3q07spbmsw8132" 
          }
        ],
        retResponse: true
      }

      document.querySelector('.routeBtn').addEventListener('click', function() {
        const naviOption = {
            lineColor:"#ff00ff",
            lineSpotSize: 12,
            lineZ : 200,
            speedRate: 50,
            solidLineEnabled: true,
            solidLineWidth: 3
        }

        map.routeSimulation.set(naviOption);
        map.routeSimulation.setRoute(route);
      });

      document.querySelector('.navBtn').addEventListener('click', function() {
        const animOption = {
            destOption:{
                activeDest: true,
                color: "#00ffff",
                opacity: 0.3,
                isAnimate: true,
                duration: 1200,
                isRepeat: true,
                isYoyo: false
            },
        };

        map.routeSimulation.draw(animOption);
      });

      document.querySelector('.stopBtn').addEventListener('click', function() {
        map.routeSimulation.stop();
      });

      document.querySelector('.clearBtn').addEventListener('click', function() {
        map.routeSimulation.clear();
      })
    });

  }
</script>
</html>`}
                </code>
            </pre>
            <div className={styles.texts}>Use getNavigation() to return a list of directions for directions.</div>
            <code className={styles.code}>map.routeSimulation.getNavigation();</code>
            <div className={styles.texts}>You can test it on the map below</div>
        </div>
    )
}

export default NavigationTextEn;