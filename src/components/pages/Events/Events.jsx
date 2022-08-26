import styles from './Events.module.scss';

const Events = () => {
    return (
        <div className={styles.events}>
            <div className={styles.title}>Events</div>
            <p>
                Dabeeo JS API에서 사용가능한 Event 목록입니다.<br />
                event는 map이 종속된 태그에 등록하셔서 사용하시면 됩니다.
            </p>
            <code className={styles.code}>const mapContainer = document.getElementById('viewport');</code>
            <div className={styles.miniTitle}>poi-click</div>
            <div className={styles.texts}>클릭한 poi의 정보를 return합니다.</div>
            <code className={styles.code}>{`mapContainer.addEventListener("poi-click", (e) => console.log(e.detail));`}</code>
            <div className={styles.miniTitle}>object-click</div>
            <div className={styles.texts}>클릭한 object의 정보를 return합니다.</div>
            <code className={styles.code}>{`mapContainer.addEventListener("object-click", (e) => console.log(e.detail));`}</code>
            <div className={styles.miniTitle}>marker-click</div>
            <div className={styles.texts}>클릭한 marker의 정보를 return합니다.</div>
            <code className={styles.code}>{`mapContainer.addEventListener("marker-click", (e) => console.log(e.detail));`}</code>
            <div className={styles.miniTitle}>floor-changed</div>
            <div className={styles.texts}>층이 변경된 경우 변경된 층의 ID값을 반환합니다.</div>
            <code className={styles.code}>{`mapContainer.addEventListener("floor-changed", (e) => console.log(e.detail));`}</code>
            <div className={styles.miniTitle}>floor-changing</div>
            <div className={styles.texts}>층이 변경되기 전 현재 층의 정보와 다음 층의 정보를 반환합니다.</div>
            <code className={styles.code}>{`mapContainer.addEventListener("floor-changing", (e) => console.log(e.detail));`}</code>
            <div className={styles.miniTitle}>navi-complete</div>
            <div className={styles.texts}>navigation의 동작이 완료됬음을 감지합니다.</div>
            <code className={styles.code}>{`mapContainer.addEventListener("navi-complete", (e) => console.log(e.detail));`}</code>
            <div className={styles.miniTitle}>render-complete</div>
            <div className={styles.texts}>층이 다시 그려졌을 때 실행됩니다. 다시 그려진 층의 정보를 반환합니다.</div>
            <code className={styles.code}>{`mapContainer.addEventListener("render-complete", (e) => console.log(e.detail));`}</code>
            <div className={styles.miniTitle}>zoom-possible</div>
            <div className={styles.texts}>zoomIn, zoomOut의 상태값을 받아올 수 있습니다.</div>
            <code className={styles.code}>{`mapContainer.addEventListener("zoom-possible", (e) => console.log(e.detail));`}</code>

            <div className={styles.miniTitle}>on-mouse-move</div>
            <div className={styles.texts}>mouse가 움직일 때 좌표값을 반환합니다. </div>
            <code className={styles.code}>{`mapContainer.addEventListener("on-mouse-move", (e) => console.log(e.detail));`}</code>

            <div className={styles.miniTitle}>on-mouse-click</div>
            <div className={styles.texts}>mouse가 click될 때 좌표값을 반환합니다. </div>
            <code className={styles.code}>{`mapContainer.addEventListener("on-mouse-click", (e) => console.log(e.detail));`}</code>

            <div className={styles.miniTitle}>tilt-changed</div>
            <div className={styles.texts}>tilt가 변경될 때 변경된 값을 반환합니다.</div>
            <code className={styles.code}>{`mapContainer.addEventListener("tilt-changed", (e) => console.log(e.detail));`}</code>
            <div className={styles.miniTitle}>rotation-changed</div>
            <div className={styles.texts}>각도가 변경될 때 변경된 값을 반환합니다.</div>
            <code className={styles.code}>{`mapContainer.addEventListener("rotation-changed", (e) => console.log(e.detail));`}</code>
            <div className={styles.miniTitle}>zoom-changed</div>
            <div className={styles.texts}>줌이 변경될 때 변경된 값을 반환합니다.</div>
            <code className={styles.code}>{`mapContainer.addEventListener("zoom-changed", (e) => console.log(e.detail));`}</code>
        </div>
    )
}

export default Events;