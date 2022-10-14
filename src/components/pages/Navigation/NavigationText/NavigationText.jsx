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
            <div className={styles.miniTitle}>지도에 출발지에서 목적지까의 경로를 설정하고 모의주행을 실행할 수 있습니다.</div>
            <p>
                경로를 그리기 위해서는 먼저 경로를 찾아야 합니다. 경로를 찾은 후 찾은 경로를 지도에 그리는 순서로 이용해야 합니다.<br />
                1. 경로를 찾을 때 출발지와 목적지는 (경유지는 옵션) poi Id로 주거나 좌표로 입력하여도 됩니다. <br />
                2. 이 때 층이동수단을 복수개로 지정할 수 있으며 지정하지 않는 경우 추천경로(가장 짧은 경로)로 설정됩니다. <br />
                3. 경로요청에 대한 응답을 받은 후 층이동수단을 선택하여 경로를 지도에 그릴 수 있습니다. <br/>
                4. 이 때 주행선에 대한 옵션을 지정할 수 있습니다. <br />
                5. 경로가 그려진 후 모의주행을 실행할 수 있으며 모의주행에 대한 옵션을 함께 지정할 수 있습니다. <br />
                <br />
                옵션에 대한 자세한 사항은 Document를 참조바랍니다.
            </p>
            
            <div className={styles.texts}>해당 목적지까지의 경로를 받은 후에 경로를 지도에 그리는 방법은 간단히 설명하자면 아래와 같습니다. 경로를 구하는 위해 서버에 접속하게 되므로 비동기방식으로 호출됩니다. </div>
            <pre>
              <code className={styles.code}>
{`
const naviResponse = await mapData.getRoute(des);                 //경로 구하기
await map.routeSimulation.set(naviResponse.recommendation, naviOption);    //추천경로 그리기
map.routeSimulation.start(animOption);                      //모의주행 시작
map.routeSimulation.stop();                                 //모의주행 멈춤
map.routeSimulation.clear()                                 //경로 지우기
`}
              </code>
            </pre>

            <div className={styles.texts}>해당 목적지까지의 경로를 받은 후에 경로에 대한 정보(예: 10m 걷기 후 좌회전) 는 아래 속성에 저장되어 있습니다. 이를 이용하여 경로에 대한 설명을 안내할 수 있습니다.</div>
            <pre>
              <code className={styles.code}>{`naviResponse.navigationList`}</code>
            </pre>
            <div className={styles.texts}>아래 메소드를 사용해 해당 목적지까지의 경로에 대한 정보를 반환 받을 수 있습니다.</div>
            <pre>
              <code className={styles.code}>
{`const des = {
  origin: {
    poiId : "PO-4JvSQCWHC2270", // 남자화장실 (11층)
    floorId: "FL-t4vqgyek3jnb8146",
  },
  destination:  {
    poiId : "PO-M02DvTVjp8449", // 회의실1 (11층)
    floorId: "FL-t4vqgyek3jnb8146",
  },
  type: ["recommendation", "elevator"],//복수개의 경로 요청 
  waypoints: [
    {
      poiId : "PO-NMvw3E0pe1690", // 플랫폼사업부 회의실 (11층)
      floorId: "FL-t4vqgyek3jnb8146",
    },
    {
      poiId : "PO-WgCv1-qBo8094", // 사업전략부 (11층)
      floorId: "FL-t4vqgyek3jnb8146",
    }
  ],
}
//Position으로 설정하는 경우 
const des ={
    origin: {
      position: { x: 3000, y: 1000, },
      floorId: "FL-rhg41w7x6vy15369"
    },
    destination:  {
      position: { x: 1000, y: 4000,  },
      floorId: "FL-rhg41w7x6vy15369"
    },
    type: ["recommendation","stairs"], //복수개의 경로 요청 
    waypoints: [
      {
        position: { x: 2500, y: 2500,},
        floorId: "FL-rhg41w7x6vy15369"
      },
      {
        position: { x: 1000, y: 1300, },
        floorId: "FL-rhg41w7x6vy15369"
      }
    ],
  },

const naviResponse = await mapData.getRoute(des);
`}
              </code>
            </pre>
            <div className={styles.texts}>아래 메소드를 사용해 목적지 까지의 경로를 지도에 그릴 수 있습니다.</div>
            <div className={styles.texts}>출발지 마커, 경유지 마커와 주행선, 목적지 마커와 주행선 옵션을 설정할 수 있습니다.</div>
            <pre>
              <code className={styles.code}>
{`  // route 설정
    const naviOption = {
        origin: {
            markerOptions: {
                // iconUrl: 'https://assets.dabeeomaps.com/image/btn_floor_up.png',
                width: 150,
                height: 150,
                positionZ: 100,
                visibleIcon: true,
            }
        }, // 출발지 아이콘 및 주행선
        destination: {
            markerOptions: {
                // iconUrl: 'https://assets.dabeeomaps.com/image/btn_floor_up.png',
                width: 150,
                height: 150,
                positionZ: 100,
                visibleIcon: false,
            },
            lineOptions: {
                lineColor: "#ffbb00",
                solidLineEnabled: true,
                solidLineWidth: 20,
            },
        }, // 도착지 아이콘 및 주행선
        wayPoints: [
            {
                markerOptions: {
                    iconUrl: 'https://assets.dabeeomaps.com/image/btn_floor_up.png',
                    width: 150,
                    height: 150,
                    positionZ: 100,
                    visibleIcon: false,
                },
                lineOptions: {
                    lineColor: "#ff00ff",
                    solidLineEnabled: true,
                    solidLineWidth: 30,
                },
            },
            {
                markerOptions: {
                    iconUrl: 'https://assets.dabeeomaps.com/image/btn_floor_down_on.png',
                    width: 150,
                    height: 150,
                    positionZ: 100,
                    visibleIcon: true,
                },
                lineOptions: {
                    lineColor: "#00ff53",
                    lineSpotSize: 10,
                    lineSpotInterval: 30,
                    lineSpotAnimate: true,
                    lineSpotAnimateSpeed: 0.08,
                },
            },
        ], // 경유지 아이콘 및 주행선
        defaultLineOption: {
            lineColor: "#0000ff",
            solidLineEnabled: true,
            solidLineWidth: 10,
        }, // 기본 주행선 옵션
        lineDivide: true, // 네비게이션 선 분할여부 결정 (false 인 경우, defaultLineOption 만 사용)
        lineZ: 100,
    }
    //응답받은 경로중에 지도에 표출할 경로를 지정
    await map.routeSimulation.set(naviResponse.recommendation, naviOption);
`}
              </code>
            </pre>
            <div className={styles.texts}>map.routeSimulation.start를 통해 모의주행 애니메이션을 실행시킬 수 있습니다.<br />
            </div>
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
        speedRate: number,              // 모의주행 속도 
        removeIcon: true,               // 모의주행을 멈추거나 종료시 모의주행 아이콘 표출 여부, default는 true 

    }
    map.routeSimulation.start(animOption);`}
                </code>
            </pre>
        </div>
    )
}

export default NavigationText;