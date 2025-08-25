import styles from '../GetText/GetText.module.scss';

const MapContextText = (
    <div className={styles.getStartedText}>
        <div className={styles.title}>지도 컨텍스트</div>
        <div className={styles.miniTitle}>그려진 맵에 대한 각종 정보를 가져오거나 제어를 할 수 있습니다.</div>
        <p></p>
        <div className={styles.texts}>현재 표출되고 있는 층에 대한 정보를 가져옵니다.</div>
        <pre>
            <code className={styles.code}>map.context.getCurrentFloor();</code>
        </pre>
        <div className={styles.texts}>층 전환을 합니다. 필요한 층데이터가 로딩안 된 경우 서버로부터 가져오게 되므로 비동기방식으로 동작합니다.</div>
        <pre>
            <code className={styles.code}>await map.context.changeFloor([변경할 층 ID]);</code>
        </pre>
        <div className={styles.texts}>입력받은 층 이름에 해당하는 층으로 전환합니다.</div>
        <div className={styles.texts}>현재 렌더링된 건물중에 현재 렌더링된 언어의 지도명을 가진 층이 있다면 그 층으로 층변경합니다.</div>
        <div className={styles.texts}>비동기 처리를 해주셔야합니다.</div>
        <pre>
            <code className={styles.code}>await map.context.changeFloorByName([변경할 층 이름]);</code>
        </pre>
        <div className={styles.texts}>
            <br />
            현재 화면에 표출된 building들을 가져옵니다.
        </div>
        <pre>
            <code className={styles.code}>{`
const filterOptions = {
    sortOption:{
        /** 주어진 center중심으로 부터 거리를 계산하여 sort합니다. center가 없으면(default는) 카메라의 position을 중심으로 거리를 계산합니다. */
        center: {
            x:1500,
            y:1000,
            z:0
        }, 
        /** true라면 오름차순(ASC): 작은 값부터 큰 값 쪽으로의 순서, false라면 내림차순(DESC): 큰 값부터 작은 값 쪽으로의 순서로 sort합니다. (default=true) */
        byAsc: true 
    }
 }
 
 const bulidings = map.pois.getCurrentBuildings(filterOptions);
 
`}</code>
        </pre>
        <div className={styles.texts}>map을 지우고 map에 할당된 모든 메모리를 해제합니다. </div>
        <pre>
            <code className={styles.code}>map.context.cleanup();</code>
        </pre>
        <div className={styles.texts}>현재 설정한 mapOption을 반환받습니다.</div>
        <pre>
            <code className={styles.code}>map.context.getMapOptions();</code>
        </pre>
        <div className={styles.texts}>입력받은 code의 groupCode를 가지는 모든 지도 요소와 하위 요소들을 map에 표시합니다.</div>
        <pre>
            <code className={styles.code}>map.context.showByCode([GroupCode]);</code>
        </pre>
        <div className={styles.texts}>입력받은 code의 groupCode를 가지는 모든 지도 요소와 하위 요소들을 map에서 숨깁니다.</div>
        <pre>
            <code className={styles.code}>map.context.hideByCode([GroupCode]);</code>
        </pre>
        <div className={styles.texts}>map의 언어 설정을 바꿉니다.</div>
        <pre>
            <code className={styles.code}>map.context.changeLanguage([지도가 가지고 있는 언어 타입]);</code>
        </pre>

        <div className={styles.texts}>
            지도화면을 이미지로 다운받습니다. 해상도를 옵션으로 설정해줄 수 있습니다. <br />
            해상도를 높게 설정한 경우 메모리가 부족하여 이미지가 제대로 다운받지 못할 수 있습니다. 알맞은 해상도를 설정하세요.
        </div>
        <pre>
            <code className={styles.code}>{`map.context.convertToImg({ ratio: number})  //ratio는 지도의 해상도. 1~5, 숫자가 클수록 높은 해상도를 갖습니다. `}</code>
        </pre>
        <div className={styles.texts}>실행 예제는 다음과 같습니다.</div>
    </div>
);

export default MapContextText;
