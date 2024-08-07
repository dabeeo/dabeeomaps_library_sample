import styles from '../GetText/GetText.module.scss';

const NavigationText = (
    <div className={styles.getStartedText}>
        <div className={styles.title}>Navigation</div>
        <div className={styles.miniTitle}>
            지도에 출발지에서 목적지까지의 경로를 구한 뒤, 경로를 지도에 그리고, 경로에 대한 안내를 텍스트로 표시하며, 모의주행을 실행할 수 있습니다.
        </div>
        <p>
            경로를 그리기 위해서는 먼저 경로를 찾아야 합니다. 아래의 순서대로 이용합니다.
            <br />
            1. 경로를 먼저 구합니다. <br />
            1.1 출발지와 목적지는 poi Id로 주거나 좌표로 입력하여도 됩니다. <br />
            1.2 경유지는 옵션으로 설정할 수 있습니다. <br />
            1.3 층 이동수단(엘리베이터, 계단등)을 복수개로 지정할 수 있으며 지정하지 않는 경우 추천경로(가장 짧은 경로)로 설정됩니다. <br />
            2. 경로요청에 대한 응답을 받습니다. <br />
            2.1 경로요청에 대한 응답중에 경로를 텍스트로 설명한 정보가 있습니다. 이를 이용하여 경로에 대한 설명을 표시할 수 있습니다. (예: 10m 후 좌회전) <br />
            2.2 응답에서 원하는 층이동수단을 선택하여 경로를 지도에 그립니다. <br />
            2.3 이 때 주행선에 대한 옵션을 지정할 수 있습니다. <br />
            3. 경로가 그려진 후 모의주행을 실행할 수 있으며 모의주행에 대한 옵션을 함께 지정할 수 있습니다. <br />
            <br />
            옵션에 대한 자세한 사항은 API Reference를 참조하기 바랍니다.
        </p>

        <div className={styles.texts}>해당 목적지까지의 경로를 받은 후에 경로를 지도에 그리는 예제는 간단히 아래와 같습니다. 비동기방식으로 동작합니다.</div>
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

        <div className={styles.texts}>
            <br /> 해당 목적지까지의 경로를 받은 후에 경로에 대한 정보(예: 10m 걷기 후 좌회전) 는 아래 속성에 저장되어 있습니다. 이를 이용하여 경로에 대한
            설명을 안내할 수 있습니다.
        </div>
        <p>
            {' '}
            naviResponse.recommendation.navigationList내에 아래와 같은 정보가 있습니다. 사용방법은 예제를 참조하세요
            <br />
        </p>
        <pre>
            <code className={styles.code}>
                {`
distance: 0                     //현지점부터 다음지점까지의 거리
floorId: "FL-t4vqgyek3jnb8146"  //현지점의 층아이디
move: async function            //현지점으로 카메라를 이동시키는 함수 (호출시 카메라 이동)
direction : "직진"               //현지점에서의 방향
poi: poi 정보                    //현지점에 poi가 연결된 경우 poi 데이터
transportation: "걷기"           //현지점에서 다음 지점까지의 이동방법 (걷기, 엘리베이터, 에스컬레이터 등(타층으로 이동시) )
`}
            </code>
        </pre>
        <div className={styles.texts}>목적지까지의 경로에 대한 정보를 구합니다.</div>
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
        <div className={styles.texts}>반환받은 경로정보를 이용하여 경로를 지도에 그릴 수 있습니다.</div>
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
        <div className={styles.texts}>
            map.routeSimulation.start를 통해 모의주행 애니메이션을 실행시킬 수 있습니다.
            <br />
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
            duration: number,           //  도착지 애니메이션 complete까지의 시간 ms단위로 default는 1000입니다
            isRepeat: boolean,          //  도착지 애니메이션 반복 여부 true는 반복, false는 반복하지 않습니다. default는 false
            isYoyo: boolean             //  도착지 애니메이션이 complete됬을때 isRepeat 옵션이 true인 경우 반복, false인 경우 역순 진행되며 default = false
        },
        zoom: number,                   // 모의주행 동작 시 zoom Level. 설정시 카메라가 모의주행 아이콘을 따라 함께 이동합니다.
        changeFloorDelay: number        // 층 변경시 delay time.  
        speedRate: number,              // 모의주행 속도 
        removeIcon: true,               // 모의주행을 멈추거나 종료시 모의주행 아이콘 표출 여부, default는 true 

    }
    map.routeSimulation.start(animOption);`}
            </code>
        </pre>
    </div>
);

export default NavigationText;
