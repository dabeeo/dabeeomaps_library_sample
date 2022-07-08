import styles from './Events.module.scss';

const Events = () => {
    return (
        <div className={styles.events}>
            <div className={styles.title}>Events</div>
            <div className={styles.miniTitle}>Dabeeo JS API에서 사용가능한 Event 목록입니다.<br /><br /></div>
            <div className={styles.miniTitle}>poi-click</div>
            <div className={styles.texts}>클릭한 poi의 정보를 return합니다.</div>
            <code className={styles.code}>{`map.addEventListener("poi-click", (e) => console.log(e.detail));`}</code>
            <div className={styles.miniTitle}>object-click</div>
            <div className={styles.texts}>클릭한 object의 정보를 return합니다.</div>
            <code className={styles.code}>{`map.addEventListener("object-click", (e) => console.log(e.detail));`}</code>
            <div className={styles.miniTitle}>marker-click</div>
            <div className={styles.texts}>클릭한 marker의 정보를 return합니다.</div>
            <code className={styles.code}>{`map.addEventListener("marker-click", (e) => console.log(e.detail));`}</code>
            <div className={styles.miniTitle}>floor-changed</div>
            <div className={styles.texts}>층이 변경된 경우 변경된 층의 ID값을 반환합니다.</div>
            <code className={styles.code}>{`map.addEventListener("floor-changed", (e) => console.log(e.detail));`}</code>
            <div className={styles.miniTitle}>will-floor-change</div>
            <div className={styles.texts}>층이 변경되기 전 현재 층의 정보와 다음 층의 정보를 반환합니다.</div>
            <code className={styles.code}>{`map.addEventListener("will-floor-change", (e) => console.log(e.detail));`}</code>
            <div className={styles.miniTitle}>navi-complete</div>
            <div className={styles.texts}>navigation의 동작이 완료됬음을 감지합니다.</div>
            <code className={styles.code}>{`map.addEventListener("navi-complete", (e) => console.log(e.detail));`}</code>
            <div className={styles.miniTitle}>redrawed-map</div>
            <div className={styles.texts}>클릭한 marker의 정보를 return합니다.</div>
            <code className={styles.code}>{`map.addEventListener("marker-click", (e) => console.log(e.detail));`}</code>
            <div className={styles.miniTitle}>zoom-possible</div>
            <div className={styles.texts}>zoomIn, zoomOut의 상태값을 받아올 수 있습니다.</div>
            <code className={styles.code}>{`map.addEventListener("zoom-possible", (e) => console.log(e.detail));`}</code>
        </div>
    )
}

export default Events;