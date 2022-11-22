import styles from '../GetText/GetText.module.scss';

const MyLocationText = (
    <div className={styles.getStartedText}>
        <div className={styles.title}>내 위치 마커(GPS) 표시하기</div>
        <div className={styles.miniTitle}>map.mylocation으로 내 위치를 표시하거나 지울 수 있습니다. GPS에 연동할 수도 있습니다.</div>
        <p>
            내 위치 마커의 위치를 지정하고 마커 아이콘의 속성과 애니메이션 효과를 설정할 수 있습니다.
            <br />
            내 위치 마커 아이콘의 속성을 지정하지 않는 경우 디폴트 값으로 표시되며 애니메이션 효과는 활성화되지 않습니다.
            <br />
            GPS를 활성화하면 내 위치 마커가 gps로 수신한 위치에 연동됩니다.
            <br />
        </p>
        <div className={styles.texts}>내 위치 마커의 속성과 그리는 예제는 아래와 같습니다.</div>
        <pre>
            <code className={styles.code}>
                {`const locationOption = {
    x: 2500,                                        // 내 위치 x 좌표
    y: 1000,                                        // 내 위치 y 좌표
    iconOption: {                                   // 내 위치 z 좌표
      iconUrl: "https://assets.dabeeomaps.com/image/ico/img_person-3x.png", 
      width: 200,                                   // 내 위치 마커의 넓이
      height: 200,                                  // 내 위치 마커의 높이
    },
    onActive: true,                                 // 타층 이동후 다시 돌아왔을 때 표시 여부
    animate: {                                      // 내 위치 마커 애니메이션 효과 속성
      color: string,                                // 내 위치 마커의 색상
      opacity: number,                              // 내 위치 마커의 투명도
      desireScale: number                           // 내 위치 마커의 최대 크기
      duration: 1500,                               // 내 위치 마커 애니메이션 주기
    },
    gpsOption: {
      leftCourseDistance: 50,                       // 경로이탈 여부 (ON_PATH 와 OUT_OF_PATH) 판단기준
      willArriveRadius: 100,                        // 도착 예정 범위 반경
      arrivedRadius: 50,                            // 도착 범위 반경
    }    
  };

map.mylocation.set(locationOption);
`}
            </code>
        </pre>
        <div className={styles.texts}>내 위치 마커를 삭제합니다.</div>
        <pre>
            <code className={styles.code}>map.mylocation.clear();</code>
        </pre>
        <div className={styles.texts}>잠시 내 위치 마커를 hide/show하기 위해서 아래와 같이 사용하면 됩니다.</div>
        <pre>
            <code className={styles.code}>
                {`map.mylocation.hide(); //내 위치 마커를 감춤.
map.mylocation.show(); // 지도영역으로 돌아오면 내 위치 마커를 보여줌.`}
            </code>
        </pre>
        <div className={styles.miniTitle}>gps를 기준으로 내위치 마커를 연동시킬 수 있습니다.</div>
        <div className={styles.texts}>GPS에 따라 내위치 마커를 연동시키기 위해서는 아래와 같이 활성화/비활성화합니다.</div>
        <pre>
            <code className={styles.code}>
                {`map.mylocation.start();
map.mylocation.stop();`}
            </code>
        </pre>
        <div className={styles.texts}>현재의 GPS에 따른 좌표(지도)를 얻기 위해서는 아래 메소드를 호출하십시오. 좌표는 지도 좌표로 변환되어 반환됩니다.</div>
        <pre>
            <code className={styles.code}>{`const currentPosition = map.mylocation.getCurrentPosition(); // 현재 GPS 수신 좌표를 반환`}</code>
        </pre>

        <div className={styles.miniTitle}>gps를 기준으로 현재 위치, 목적지 도달, 경로에 대한 정보를 받을 수 있습니다.</div>
        <div className={styles.texts}>길찾기 경로에 대하여 연동시키기 위하여는 아래와 같이 tracking을 활성화/비활성화를 하면 됩니다. </div>
        <pre>
            <code className={styles.code}>
                {`const naviResponse = await mapData.getRoute(routeOptions.gongdeok); // 경로데이터 가져오기
map.mylocation.trackingOn(naviResponse.recommendation); // tracking-move, tracking-complete 이벤트 활성화
map.mylocation.trackingOff(); // tracking-move, tracking-complete 이벤트 비활성화
`}
            </code>
        </pre>
        <div className={styles.miniTitle}>gps와 관련하여 아래와 같은 이벤트가 발생됩니다.</div>
        <div className={styles.texts}>지도 영역을 벗어난 경우 mylocation-map-out 이벤트가 발생합니다.</div>
        <div className={styles.texts}>지도 영역으로 들어온 경우 mylocation-map-in 이벤트가 발생합니다.</div>
        <div className={styles.texts}>GPS tracking을 start했을 때 목적지에 도달한 경우 tracking-complete 이벤트가 발생합니다.</div>
        <div className={styles.texts}>위치가 변경될 때마다 경로에 대한 정보를 tracking-move 이벤트로 전달합니다.</div>

        <pre>
            <code className={styles.code}>
                {`                  
// 길찾기경로의 목적지 부근에 내위치 마커가 도달한 경우 이벤트 발생 
mapContainer.addEventListener('tracking-complete', (e) => {
  console.log('tracking-complete에 대한 결과값: ', e.detail);
  map.mylocation.stop(); // geolocation 중단
  map.mylocation.clear(); // myLocation 제거
});

// tracking-move
mapContainer.addEventListener('tracking-move', (e) => {
  console.log('tracking-move에 대한 결과값: ', e.detail);
  updateStats(e);
});

// mylocation-map-out
mapContainer.addEventListener('mylocation-map-out', (e) => {
  console.log('mylocation-map-out에 대한 결과값: ', e.detail);
  const mylocationState = document.getElementById("myloc-state")
  mylocationState.textContent = e.detail;
  map.mylocation.hide(); // 지도영역을 벗어나면 내 위치 마커를 감춤.
});

// mylocation-map-in
mapContainer.addEventListener('mylocation-map-in', (e) => {
  console.log('mylocation-map-in에 대한 결과값: ', e.detail);
  const mylocationState = document.getElementById("myloc-state")
  mylocationState.textContent = e.detail;
  map.mylocation.show(); // 지도영역으로 돌아오면 내 위치 마커를 보여줌.

                `}
            </code>
        </pre>
        <p> tracking-move 이벤트의 경로에 대한 정보는 아래와 같습니다. </p>
        <pre>
            <code className={styles.code}>
                {`
 current_position:            // 현재 사용자 위치 (경로 이탈 시, 경로 재탐색 목적)
 current_path: [],            // 현재 진행중인 path의 node 정보 
 next_step: null,             // null이었다가 STRAIGHT, RIGHT, LEFT, DESTNATION 로 변경된다
 current_state: null,         // null이었다가 OUT_OF_PATH, ON_PATH, ON_LAST_PATH, WILL_ARRIVE, ARRIVED 로 변경된다
 current_angle: 0,            // 현재 가고있는 길의 각도 (ON_PATH, ON_CORNER일때 현재 path의 시작점(첫번째포인트)의 각도)
 closestPoint: "NONE",        // 가장 가까운 포인트는 현재 path 라인위에 있거나, 현재 path의 2개의 포인트 중에 하나에 있거나, NONE이거나 NEW이다 (NONE은 경로이탈, NEW는 새로운 경로발견)
 distance_from_origin: 0,     // 출발지로부터의 거리
 distance_to_destination: 0,  // 도착지까지 남은 거리
 distance_to_closest_path: 0, // 가장 가까운 path와의 직선거리 (경로 이탈 시, 경로 재탐색 목적)
    };
  }
`}
            </code>
        </pre>

        <div className={styles.texts}>실행 예제는 다음과 같습니다.gps tracking에 대한 실행 예제는 Example을 참고하세요.</div>
    </div>
);

export default MyLocationText;
