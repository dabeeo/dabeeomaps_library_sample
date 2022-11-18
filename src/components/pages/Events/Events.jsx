import styles from './Events.module.scss';

const Events = () => {
    return (
        <div className={styles.events}>
            <div className={styles.title}>Events</div>
            <p>
                Dabeeo JS API에서 사용가능한 Event 목록입니다.
                <br />
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
            <div className={styles.texts}>모의주행 애니메이션이 완료되었음을 알립니다.</div>
            <code className={styles.code}>{`mapContainer.addEventListener("navi-complete", (e) => console.log(e.detail));`}</code>
            <div className={styles.miniTitle}>render-complete</div>
            <div className={styles.texts}>층이 다시 그려졌을 때 실행됩니다. 다시 그려진 층의 정보를 반환합니다.</div>
            <code className={styles.code}>{`mapContainer.addEventListener("render-complete", (e) => console.log(e.detail));`}</code>

            <div className={styles.miniTitle}>zoom-changed</div>
            <div className={styles.texts}>줌이 변경될 때 변경된 값을 반환합니다.</div>
            <code className={styles.code}>{`mapContainer.addEventListener("zoom-changed", (e) => console.log(e.detail));`}</code>

            <div className={styles.miniTitle}>tilt-changed</div>
            <div className={styles.texts}>tilt가 변경될 때 변경된 값을 반환합니다.</div>
            <code className={styles.code}>{`mapContainer.addEventListener("tilt-changed", (e) => console.log(e.detail));`}</code>

            <div className={styles.miniTitle}>rotation-changed</div>
            <div className={styles.texts}>각도가 변경될 때 변경된 값을 반환합니다.</div>
            <code className={styles.code}>{`mapContainer.addEventListener("rotation-changed", (e) => console.log(e.detail));`}</code>

            <div className={styles.miniTitle}>control-start</div>
            <div className={styles.texts}>사용자가 지도를 움직이는 시작시점을 알립니다.</div>
            <code className={styles.code}>{`mapContainer.addEventListener("control-start", (e) => console.log(e.detail));`}</code>

            <div className={styles.miniTitle}>control-end</div>
            <div className={styles.texts}>사용자가 지도를 움직이는 종료시점을 알립니다.</div>
            <code className={styles.code}>{`mapContainer.addEventListener("control-end", (e) => console.log(e.detail));`}</code>

            <div className={styles.miniTitle}>zoom-possible</div>
            <div className={styles.texts}>zoomIn, zoomOut의 상태값을 받아올 수 있습니다.</div>
            <code className={styles.code}>{`mapContainer.addEventListener("zoom-possible", (e) => console.log(e.detail));`}</code>

            <div className={styles.miniTitle}>on-mouse-move</div>
            <div className={styles.texts}>mouse가 움직일 때 좌표값을 반환합니다. </div>
            <code className={styles.code}>{`mapContainer.addEventListener("on-mouse-move", (e) => console.log(e.detail));`}</code>

            <div className={styles.miniTitle}>on-mouse-click</div>
            <div className={styles.texts}>mouse가 click될 때 좌표값을 반환합니다. </div>
            <code className={styles.code}>{`mapContainer.addEventListener("on-mouse-click", (e) => console.log(e.detail));`}</code>

            <div className={styles.miniTitle}>object-mouse-over</div>
            <div className={styles.texts}>mouse가 오브젝트 위를 움직일 때 오브젝트 정보를 반환합니다. </div>
            <code className={styles.code}>{`mapContainer.addEventListener("object-mouse-over", (e) => console.log(e.detail));`}</code>

            <div className={styles.miniTitle}>void-click</div>
            <div className={styles.texts}>mouse가 오브젝트나 poi가 아닌 빈공간을 클릭시 반환합니다. </div>
            <code className={styles.code}>{`mapContainer.addEventListener("void-click", (e) => console.log(e.detail));`}</code>

            <div className={styles.miniTitle}>drag-start</div>
            <div className={styles.texts}>사용자가 지도를 drag시 움직이는 시작시점을 알립니다.</div>
            <code className={styles.code}>{`mapContainer.addEventListener("drag-start", (e) => console.log(e.detail));`}</code>

            <div className={styles.miniTitle}>drag-end</div>
            <div className={styles.texts}>사용자가 지도를 drag시 움직이는 종료시점을 알립니다.</div>
            <code className={styles.code}>{`mapContainer.addEventListener("drag-end", (e) => console.log(e.detail));`}</code>

            <div className={styles.miniTitle}>drag-move</div>
            <div className={styles.texts}>사용자가 지도를 drag하는 동안 발생합니다.</div>
            <code className={styles.code}>{`mapContainer.addEventListener("drag-move", (e) => console.log(e.detail));`}</code>

            <div className={styles.miniTitle}>poi-mouse-over</div>
            <div className={styles.texts}>마우스가 poi 위를 움직일 때 poi 정보를 반환합니다. </div>
            <code className={styles.code}>{`mapContainer.addEventListener("poi-mouse-over", (e) => console.log(e.detail));`}</code>

            <div className={styles.miniTitle}>object-mouse-enter</div>
            <div className={styles.texts}>마우스가 object 위로 들어갈 때 object 정보를 반환합니다. </div>
            <code className={styles.code}>{`mapContainer.addEventListener("object-mouse-enter", (e) => console.log(e.detail));`}</code>

            <div className={styles.miniTitle}>object-mouse-leave</div>
            <div className={styles.texts}>마우스가 object를 떠날 때 object 정보를 반환합니다. </div>
            <code className={styles.code}>{`mapContainer.addEventListener("object-mouse-leave", (e) => console.log(e.detail));`}</code>

            <div className={styles.miniTitle}>poi-mouse-enter</div>
            <div className={styles.texts}>마우스가 poi 위로 들어갈 때 poi 정보를 반환합니다. </div>
            <code className={styles.code}>{`mapContainer.addEventListener("poi-mouse-enter", (e) => console.log(e.detail));`}</code>

            <div className={styles.miniTitle}>poi-mouse-leave</div>
            <div className={styles.texts}>마우스가 poi 를 떠날 때 poi 정보를 반환합니다. </div>
            <code className={styles.code}>{`mapContainer.addEventListener("poi-mouse-leave", (e) => console.log(e.detail));`}</code>

            <div className={styles.miniTitle}>tracking-complete</div>
            <div className={styles.texts}>길찾기를 활성화한 후 gps로 위치를 tracking하는 중에 도착지에 도달할 때 이벤트가 발생합니다. </div>
            <code className={styles.code}>{`mapContainer.addEventListener("tracking-complete", (e) => console.log(e.detail));`}</code>

            <div className={styles.miniTitle}>tracking-move</div>
            <div className={styles.texts}>길찾기를 활성화한 후 gps로 위치를 tracking하는 중에 위치가 변경됨에 따라 현재의 경로에 대한 정보를 반환합니다. </div>
            <code className={styles.code}>{`mapContainer.addEventListener("tracking-move", (e) => console.log(e.detail));`}</code>
        </div>
    );
};

export default Events;
