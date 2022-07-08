import styles from './LayerGroupText.module.scss';

const LayerGroupText = () => {
    return (
        <div className={styles.layerGroupText}>
            <div className={styles.title}>LayerGroup</div>
            <div className={styles.miniTitle}>item 내부의 groupCode 기능</div>
            <p>
                각 object 또는 poi가 가지고 있는 groupCode를 사용해서 관련 정보를 찾을 수 있습니다.<br />
                정보가 필요한 groupCode로 메소드를 호출 시 관련 정보를 얻으실 수 있습니다.<br />
                관련 메소드 호출은 다음과 같습니다.
            </p>
            <pre>
                <code className={styles.code}>
                    const layerGroup = map.context.getLayerGroup();
                </code>
            </pre>
            <div className={styles.middleTitle}>Method</div>
            <div className={styles.miniTitle}>findChild</div>
            <div className={styles.texts}>입력받은 code의 하위 code들 반환</div>
            <pre>
                <code className={styles.code}>
                    layerGroup.findChildCode('A1');
                </code>
            </pre>
            <div className={styles.miniTitle}>findAllChildCode</div>
            <div className={styles.texts}>입력받은 code의 모든 하위 code들 반환</div>
            <pre>
                <code className={styles.code}>
                    layerGroup.findAllChildCode('A1');
                </code>
            </pre>
            <div className={styles.miniTitle}>findParentCode</div>
            <div className={styles.texts}>입력받은 code의 상위 code 반환</div>
            <pre>
                <code className={styles.code}>
                    layerGroup.findParentCode('A111');
                </code>
            </pre>
            <div className={styles.miniTitle}>findRootParent</div>
            <div className={styles.texts}>입력받은 code의 root code 반환</div>
            <pre>
                <code className={styles.code}>
                    layerGroup.findRootParent('A111');
                </code>
            </pre>
            <div className={styles.miniTitle}>showByCode</div>
            <div className={styles.texts}>입력받은 code의 groupCode를 가지는 object와 그 모든 하위 요소들을 map에 표시.</div>
            <pre>
                <code className={styles.code}>
                    map.context.showByCode('A1');
                </code>
            </pre>
            <div className={styles.miniTitle}>hideByCode</div>
            <div className={styles.texts}>입력받은 code의 groupCode를 가지는 object와 그 모든 하위 요소들을 map에서 숨김.</div>
            <pre>
                <code className={styles.code}>
                    map.context.hideByCode('A1');
                </code>
            </pre>
            <div className={styles.texts}>실행 예제는 다음과 같습니다.</div>
        </div>
    )
}

export default LayerGroupText;