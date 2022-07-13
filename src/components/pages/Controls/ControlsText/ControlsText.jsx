import styles from './ControlsText.module.scss';

const ControlsText = () => {
    return (
        <div className={styles.cameraControlText}>
            <div className={styles.title}>Controls</div>
            <div className={styles.miniTitle}>camera를 control하여 원하는 위치를 보거나 zoom을 control 할 수 있습니다.</div>
            <p>
                Dabeeo maps library에서는 사용자 camera를 컨트롤 하여<br></br>
                원하는 위치에 카메라가 위치하거나 zoom을 조정할 수 있는 메소드들을 제공하고 있습니다.<br />
            </p>
            <div className={styles.texts}>2D / 3D 전환을 원할시 아래 메소드를 이용하시면 됩니다.</div>
            <code className={styles.code}>map.control.changeCamera("3D"); // 2D | 3D 중 원하는 차원을 입력하시면 됩니다</code>
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
{`map.control.changeZoom(number);                   // zoomLevel(percent) 100(%)가 현재 zoomLevel 
map.control.zoomIn();                             // zoom In
map.control.zoomOut();                            // zoom Out
`}
                </code>
            </pre>
            <div className={styles.text}>아래 지도에서 적용 예시를 확인해보실 수 있습니다.</div>
        </div>
    )
}

export default ControlsText;