import styles from './NavigationText.module.scss';

const NavigationText = () => {
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
        </div>
    )
}

export default NavigationText;