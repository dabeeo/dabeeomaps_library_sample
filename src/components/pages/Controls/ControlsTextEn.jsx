import styles from '../GetText/GetText.module.scss';

const ControlTextEn = (
    <div className={styles.getStartedText}>
        <div className={styles.title}>Controls</div>
        <div className={styles.miniTitle}>You can control the camera to see the desired location or control the zoom.</div>
        <p>
            In Dabeeo maps library, you can control your camera to<br></br>
            provides methods to position the camera at a desired location or adjust zoom.
            <br />
        </p>
        <div className={styles.texts}>If you want a 2D / 3D conversion, you can use the methods below.</div>
        <code className={styles.code}>map.control.changeCamera("3D"); // You can enter any dimension you want 2D | 3D.</code>
        <div className={styles.text}>The method below moves the camera to the desired coordinates.</div>
        <pre>
            <code className={styles.code}>
                {`const position = { x: number, y: number };              // The x and y values of the coordinates you want to move
map.control.moveTo(position);
`}
            </code>
        </pre>
        <div className={styles.text}>The method below initializes all rotation, title, and position values applied to the camera to the initial state.</div>
        <code className={styles.code}>map.control.reset();</code>
        <div className={styles.text}>By invoking the methods below, you can apply rotation, tilt, zoom level of the desired camera</div>
        <pre>
            <code className={styles.code}>
                {`const control = {
    rotation : number,                                  // rotation value of camera
    tilt: number,                                       // title value of camera
    zoomLevel: number                                   // zoomLevel value of camera
};

map.control.set(control);
`}
            </code>
        </pre>
        <div className={styles.text}>You can also edit zoom by using the method below.</div>
        <pre>
            <code className={styles.code}>
                {`map.control.changeZoom(number);                   // zoomLevel(percent) 100(%) is the current zoomLevel
map.control.zoomIn();                             // zoom In
map.control.zoomOut();                            // zoom Out
`}
            </code>
        </pre>
        <div className={styles.text}>You can check the application example on the map below.</div>
    </div>
);

export default ControlTextEn;
