import styles from '../GetText/GetText.module.scss';

const ObjectsTextEn = (
    <div className={styles.getStartedText}>
        <div className={styles.title}>Objects</div>
        <div className={styles.miniTitle}>You can edit the Map using ID or code.</div>
        <p>
            When you want to change the floor of the current map, you can change the floor using the ID of the floor you want to change.
            <br />
            You can find related information by using the groupCode that each object or poi has.
            <br />
            When you call a method with groupCode that needs information, you can get related information.
            <br />
        </p>
        <div className={styles.texts}>To switch floors, call the following method.</div>
        <code className={styles.code}>map.context.changeFloor([변경할 층 ID]);</code>
        <div className={styles.texts}>You can hide the POI of the corresponding ID by calling the following method.</div>
        <code className={styles.code}>map.context.hide([POI ID]);</code>
        <div className={styles.texts}>If you call the following method, you can show the POI of the corresponding ID.</div>
        <code className={styles.code}>map.context.show([POI ID]);</code>
        <div className={styles.texts}>You can delete the map by calling the following method.</div>
        <code className={styles.code}>map.context.cleanup();</code>
        <br />
        <br />
        <div className={styles.middleTitle}>GroupCode</div>
        <div className={styles.texts}>You can get information about groupCode with the following example.</div>
        <pre>
            <code className={styles.code}>const layerGroup = map.context.getLayerGroup();</code>
        </pre>
        <div className={styles.miniTitle}>findItemChildCode</div>
        <div className={styles.reserved}>Returns the sub-codes of the input code</div>
        <pre>
            <code className={styles.code}>layerGroup.findItemChildCode([GroupCode]);</code>
        </pre>
        <div className={styles.miniTitle}>findItemAllChildCode</div>
        <div className={styles.texts}>Returns all sub-codes of the input code</div>
        <pre>
            <code className={styles.code}>layerGroup.findItemAllChildCode([GroupCode]);</code>
        </pre>
        <div className={styles.miniTitle}>findItemParentCode</div>
        <div className={styles.texts}>Returns the upper code of the input code</div>
        <pre>
            <code className={styles.code}>layerGroup.findItemParentCode([GroupCode]);</code>
        </pre>
        <div className={styles.miniTitle}>findRootParent</div>
        <div className={styles.texts}>Returns the root code of the input code</div>
        <pre>
            <code className={styles.code}>layerGroup.findRootParent([GroupCode]);</code>
        </pre>
        <div className={styles.miniTitle}>showByCode</div>
        <div className={styles.texts}>The object with the groupCode of the input code and all its sub-elements are displayed on the map.</div>
        <pre>
            <code className={styles.code}>map.context.showByCode([GroupCode]);</code>
        </pre>
        <div className={styles.miniTitle}>hideByCode</div>
        <div className={styles.texts}>The object with the groupCode of the input code and all its sub-elements are hidden from the map.</div>
        <pre>
            <code className={styles.code}>map.context.hideByCode([GroupCode]);</code>
        </pre>
        <div className={styles.texts}>A running example is</div>
    </div>
);

export default ObjectsTextEn;
