import styles from './MapContextText.module.scss';

const MapContextText = () => {
    return (
        <div className={styles.mapContextText}>
            <div className={styles.title}>MapContext</div>
            <div className={styles.miniTitle}>ID 또는 code를 사용해 Map을 수정할 수 있습니다.</div>
            <p>
                현재 Map의 층을 바꾸고 싶으실 때 바꿀 층의 ID를 이용해 층을 바꾸실 수 있습니다.<br />
                각 object 또는 poi가 가지고 있는 groupCode를 사용해서 관련 정보를 찾을 수 있습니다.<br />
                정보가 필요한 groupCode로 메소드를 호출 시 관련 정보를 얻으실 수 있습니다.<br />
            </p>
            <div className={styles.texts}>층 전환은 다음 메소드를 호출하시면 됩니다.</div>
            <code className={styles.code}>map.context.changeFloor([변경할 층 ID]);</code>
            <div className={styles.texts}>다음 메소드를 호출하시면 해당하는 ID의 POI를 Hide시킬 수 있습니다.</div>
            <code className={styles.code}>map.context.hide([POI ID]);</code>
            <div className={styles.texts}>다음 메소드를 호출하시면 해당하는 ID의 POI를 Show시킬 수 있습니다.</div>
            <code className={styles.code}>map.context.show([POI ID]);</code>
            <div className={styles.middleTitle}>GroupCode</div>
            <div className={styles.texts}>다음 예제로 groupCode에 관한 정보를 얻으실 수 있습니다.</div>
            <pre>
                <code className={styles.code}>
                    const layerGroup = map.context.getLayerGroup();
                </code>
            </pre>
            <div className={styles.miniTitle}>findItemChildCode</div>
            <div className={styles.texts}>입력받은 code의 하위 code들 반환</div>
            <pre>
                <code className={styles.code}>
                    layerGroup.findItemChildCode([GroupCode]);
                </code>
            </pre>
            <div className={styles.miniTitle}>findItemAllChildCode</div>
            <div className={styles.texts}>입력받은 code의 모든 하위 code들 반환</div>
            <pre>
                <code className={styles.code}>
                    layerGroup.findItemAllChildCode([GroupCode]);
                </code>
            </pre>
            <div className={styles.miniTitle}>findItemParentCode</div>
            <div className={styles.texts}>입력받은 code의 상위 code 반환</div>
            <pre>
                <code className={styles.code}>
                    layerGroup.findItemParentCode([GroupCode]);
                </code>
            </pre>
            <div className={styles.miniTitle}>findRootParent</div>
            <div className={styles.texts}>입력받은 code의 root code 반환</div>
            <pre>
                <code className={styles.code}>
                    layerGroup.findRootParent([GroupCode]);
                </code>
            </pre>
            <div className={styles.miniTitle}>showByCode</div>
            <div className={styles.texts}>입력받은 code의 groupCode를 가지는 object와 그 모든 하위 요소들을 map에 표시.</div>
            <pre>
                <code className={styles.code}>
                    map.context.showByCode([GroupCode]);
                </code>
            </pre>
            <div className={styles.miniTitle}>hideByCode</div>
            <div className={styles.texts}>입력받은 code의 groupCode를 가지는 object와 그 모든 하위 요소들을 map에서 숨김.</div>
            <pre>
                <code className={styles.code}>
                    map.context.hideByCode([GroupCode]);
                </code>
            </pre>
            <div className={styles.texts}>실행 예제는 다음과 같습니다.</div>
            
        </div>
    )
}

export default MapContextText;