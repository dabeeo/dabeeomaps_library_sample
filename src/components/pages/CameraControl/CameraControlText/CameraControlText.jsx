import styles from './CameraControlText.module.scss';

const CameraControlText = () => {
    return (
        <div className={styles.cameraControlText}>
            <div className={styles.title}>Camera Controls</div>
            <div className={styles.miniTitle}>camera를 원하는 위치로 조정 또는 리셋시킬 수 있습니다.</div>
            <p>
                Dabeeo maps library에서는 사용자가 원하는 camera의 좌표와 rotation, title 값을 알고 있다면<br></br>
                원하는 위치에 카메라가 위치하도록 조정할 수 있는 메소드들을 제공하고 있습니다.<br />
            </p>
            <div className={styles.text}>아래 메소드는 카메라를 원하는 좌표로 이동시키는 동작을 합니다.</div>
            <pre>
                <code className={styles.code}>
{`const position = { x: number, y: number };              // 이동하고자 하는 좌표의 x, y값
map.control.moveTo(position);
`}
                </code>
            </pre>
            <div className={styles.text}>아래 메소드는 카메라에 적용된 모든 rotation, title, position값을 처음 상태로 초기화 합니다.</div>
            <code className={styles.code}>map.control.reset();</code>
            <div className={styles.text}>아래 메소드를 호출하면 원하는 카메라의 rotation, tilt, zoom을 적용시킬 수 있습니다</div>
            <pre>
                <code className={styles.code}>
{`const control = {
    rotation : number,                                  // camera의 rotation 값
    tilt: number,                                       // camera의 tilt 값
    zoom: number                                        // camera의 zoom의 percent value
};

map.control.set(control);
`}
                </code>
            </pre>
            <div className={styles.text}>아래 메소드를 활용하여 zoom을 수정하실 수도 있습니다.</div>
            <pre>
                <code className={styles.code}>
{`dabeeoMap.control.changeZoom(number);                   // zoomLevel(percent) 100(%)가 현재 zoomLevel 
dabeeoMap.control.zoomIn();                             // zoom In
dabeeoMap.control.zoomOut();                            // zoom Out
`}
                </code>
            </pre>
            <div className={styles.text}>아래 지도에서 적용 예시를 확인해보실 수 있습니다.</div>
        </div>
    )
}

export default CameraControlText;