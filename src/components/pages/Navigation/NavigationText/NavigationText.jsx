import { useEffect } from 'react';
import styles from './NavigationText.module.scss';

const NavigationText = () => {

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
            <div className={styles.miniTitle}>지도에 출발지에서 목적지까의 경로를 설정하고 안내받을 수 있습니다.</div>
            <p>
                지도상에 경로를 설정한 뒤 해당 경로를 드로잉하고 이동하는 모의주행 애니메이션을 설정할 수 있습니다.<br />
                
            </p>
            <div className={styles.texts}>dabeeoMap.routeSimulation.set을 통해 경로의 옵션을 설정할 수 있습니다.</div>
            <pre>
                <code className={styles.code}>
                    {`
    const naviOption = {
        lineColor:"#ff00ff",            // navigation 주행 라인의 색상을 지정
        lineSpotSize: number,           // 주행선의 점의 굵기를 지정합니다. 주행선의 속성이 점선일 경우 적용됩니다.
        lineZ : number,                 // 주행선의 z축 값을 지정합니다.
        speedRate: number,              // 모의주행 속도 지정. 예를 들어 1.5로 지정한 경우 default대비 1.5배 속도
        solidLineEnabled: true,         // 주행라인의 속성을 결정합니다. false일 때는 점선, true일 때는 실선으로 그려집니다. default는 false. 
        solidLineWidth: number          // 실선의 굵기입니다. default는 1
    }

    map.routeSimulation.set(naviOption);
                    `}
                </code>
            </pre>
            <div className={styles.texts}>map.routeSimulation.setRoute를 통해 경로를 설정할 수 있습니다. 비동기 처리하셔서 사용해야합니다.</div>
            <pre>
                <code className={styles.code}>
                    {`
    routeOption = {
        origin: {                               // 출발지
            poiId: [출발지 POI ID] or position: { x: number, y: number, z: number},
            floorId: [출발지의 층 ID]
        },
        destination:  {                         // 도착지
            poiId: [도착지 POI ID] or position: { x: number, y: number, z: number},
            floorId: [도착지의 층 ID]
        },
        type: "recommendation",                 // 층간이동경로(recommendation - 추천, stairs - 계단, elevator - 엘리베이터)
        waypoints: [                            // 경유지
            {
                poiId: [경유지 POI ID] or position: { x: number, y: number, z: number},
                floorId: [경유지의 층 ID]
            }
        ],
        retResponse: boolean                    // 반환값에 대한 옵션, true로 하는 경우 소요시간과 거리 반환받음. false인 경우 소요시간만 반환받음.
    }

    map.routeSimulation.setRoute(routeOption);
                    `}
                </code>
            </pre>
            <p>
                map.routeSimulation.draw를 통해 모의주행 애니메이션을 실행시킬 수 있습니다.<br />
                setRoute를 통해 경로 설정 후 실행하셔야합니다.
            </p>
            <pre>
                <code className={styles.code}>
                    {`
    const animOption = {
        destOption: {                   //  도착지 옵션
            activeDest: boolean,        //  active 여부
            color: "#00ffff",           //  변경하고자 하는 색상값
            opacity: number,            //  변경하고자하는 투명도 값
            isAnimate: boolean,         //  색상 애니메이션 효과 적용 여부
            duration: number,           //  애니메이션 complete까지의 시간 ms단위로 default는 1000입니다
            isRepeat: boolean,          //  애니메이션 반복 여부 true는 반복, false는 반복하지 않습니다. default는 false
            isYoyo: boolean             //  애니메이션이 complete됬을때 isRepeat 옵션이 true인 경우 반복, false인 경우 역순 진행되며 default = false
        },
        zoom: number,                   // 애니메이션 동작 시 zoom Level
        changeFloorDelay: number        // 층 변경시 delay time
    }
    map.routeSimulation.draw(animOption);`}
                </code>
            </pre>
            <div className={styles.texts}>다음 메소드를 통해 동작중인 navigation을 멈추실 수 있습니다.</div>
            <code className={styles.code}>map.routeSimulation.stop();</code>
            <div className={styles.texts}>다음 메소드를 통해 route를 삭제하실 수 있습니다</div>
            <code className={styles.code}>map.routeSimulation.clear();</code>
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
            <div className={styles.texts}>getNavigation()을 사용하시면 길찾기의 경로 리스트를 반환 받으실 수 있습니다.</div>
            <code className={styles.code}>map.routeSimulation.getNavigation();</code>
            <div className={styles.texts}>아래 지도에서 테스트를 해보실 수 있습니다.</div>
        </div>
    )
}

export default NavigationText;