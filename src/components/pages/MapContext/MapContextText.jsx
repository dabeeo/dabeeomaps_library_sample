import styles from '../GetText/GetText.module.scss';

const MapContextText = (
    <div className={styles.getStartedText}>
        <div className={styles.title}>MapContext</div>
        <div className={styles.miniTitle}>그려진 맵에 대한 각종 정보를 가져오거나 제어를 할 수 있습니다.</div>
        <p></p>
        <div className={styles.texts}>현재 표출되고 있는 층에 대한 정보를 얻을 수 있습니다.</div>
        <pre>
            <code className={styles.code}>map.context.getCurrentFloor();</code>
        </pre>
        <div className={styles.texts}>
            층 전환은 다음 메소드를 호출하시면 됩니다. 필요한 층데이터가 로딩안된 경우 서버로부터 가져오게 되므로 비동기방식으로 호출됩니다.{' '}
        </div>
        <pre>
            <code className={styles.code}>await map.context.changeFloor([변경할 층 ID]);</code>
        </pre>
        <div className={styles.texts}>다음 메소드를 호출하시면 map을 지우실 수 있습니다.</div>
        <pre>
            <code className={styles.code}>map.context.cleanup();</code>
        </pre>
        <div className={styles.texts}>다음 메소드를 호출하시면 설정한 mapOption을 반환받으실 수 있습니다.</div>
        <pre>
            <code className={styles.code}>map.context.getMapOptions();</code>
        </pre>
        <div className={styles.texts}>입력받은 code의 groupCode를 가지는 object와 그 모든 하위 요소들을 map에 표시합니다.</div>
        <pre>
            <code className={styles.code}>map.context.showByCode([GroupCode]);</code>
        </pre>
        <div className={styles.texts}>입력받은 code의 groupCode를 가지는 object와 그 모든 하위 요소들을 map에서 숨깁니다.</div>
        <pre>
            <code className={styles.code}>map.context.hideByCode([GroupCode]);</code>
        </pre>
        <div className={styles.texts}>map의 언어 설정을 바꿉니다.</div>
        <pre>
            <code className={styles.code}>map.context.changeLanguage([지도가 가지고 있는 언어 타입]);</code>
        </pre>

        <div className={styles.texts}>지도화면을 이미지로 다운받습니다.</div>
        <pre>
            <code className={styles.code}>
                {`map.context.convertToImg({ ratio: number})  //ratio는 지도의 해상도. 1~5, 숫자가 클수록 높은 해상도를 갖습니다. `}
            </code>
        </pre>
        <div className={styles.texts}>실행 예제는 다음과 같습니다.</div>
    </div>
);

export default MapContextText;
