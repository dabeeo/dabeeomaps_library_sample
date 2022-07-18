import styles from './MapContextText.module.scss';

const MapContextTextEn = () => {
    return (
        <div className={styles.mapContextText}>
            <div className={styles.title}>LayerGroup</div>
            <div className={styles.miniTitle}>groupCode function inside item</div>
            <p>
                You can find related information by using the groupCode that each object or poi has.<br />
                When you call a method with groupCode that needs information, you can get related information.<br />             
                The relevant method call is.
            </p>
            <pre>
                <code className={styles.code}>
                    const layerGroup = map.context.getLayerGroup();
                </code>
            </pre>
            <div className={styles.middleTitle}>Method</div>
            <div className={styles.miniTitle}>findItemChildCode</div>
            <div className={styles.texts}>Returns the sub-codes of the input code</div>
            <pre>
                <code className={styles.code}>
                    layerGroup.findItemChildCode('A1');
                </code>
            </pre>
            <div className={styles.miniTitle}>findItemAllChildCode</div>
            <div className={styles.texts}>Returns all sub-codes of the input code</div>
            <pre>
                <code className={styles.code}>
                    layerGroup.findItemAllChildCode('A1');
                </code>
            </pre>
            <div className={styles.miniTitle}>findItemParentCode</div>
            <div className={styles.texts}>Returns the upper code of the input code</div>
            <pre>
                <code className={styles.code}>
                    layerGroup.findItemParentCode('A111');
                </code>
            </pre>
            <div className={styles.miniTitle}>findRootParent</div>
            <div className={styles.texts}>Returns the root code of the input code of the corresponding groupCode</div>
            <pre>
                <code className={styles.code}>
                    layerGroup.findRootParent('A111');
                </code>
            </pre>
            <div className={styles.miniTitle}>showByCode</div>
            <div className={styles.texts}>The object with the groupCode of the input code and all its sub-elements are displayed on the map.</div>
            <pre>
                <code className={styles.code}>
                    map.context.showByCode('A1');
                </code>
            </pre>
            <div className={styles.miniTitle}>hideByCode</div>
            <div className={styles.texts}>Hide the object with the groupCode of the input code and all its sub-elements from the map.</div>
            <pre>
                <code className={styles.code}>
                    map.context.hideByCode('A1');
                </code>
            </pre>
            <div className={styles.texts}>A running example is</div>
        </div>
    )
}

export default MapContextTextEn;