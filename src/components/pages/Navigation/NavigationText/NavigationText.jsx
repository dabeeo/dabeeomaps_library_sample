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
  type: "recommendation",
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

const naviResponse = mapData.getRoute(des);
`}
              </code>
            </pre>
            <div className={styles.texts}>아래 메소드를 사용해 목적지 까지의 경로를 설정할 수 있습니다.</div>
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
    await map.routeSimulation.set(naviResponse, naviOption);
`}
              </code>
            </pre>
            <div className={styles.texts}>map.routeSimulation.start를 통해 모의주행 애니메이션을 실행시킬 수 있습니다.<br />
                set을 통해 경로 설정 후 실행하셔야합니다.</div>
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
    map.routeSimulation.start(animOption);`}
                </code>
            </pre>
            <div className={styles.texts}>다음 메소드를 통해 동작중인 navigation을 멈추실 수 있습니다.</div>
            <code className={styles.code}>map.routeSimulation.stop();</code>
            <div className={styles.texts}>다음 메소드를 통해 route를 삭제하실 수 있습니다</div>
            <code className={styles.code}>map.routeSimulation.clear();</code>
            <div className={styles.texts}>아래 지도에서 테스트를 해보실 수 있습니다.</div>
        </div>
    )
}

export default NavigationText;