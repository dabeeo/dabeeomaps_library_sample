import styles from './CameraControlText.module.scss';

const CameraControlTextEn = () => {
    return (
        <div className={styles.cameraControlText}>
            <div className={styles.title}>Camera Controls</div>
            <div className={styles.miniTitle}>You can adjust or reset the camera to the desired position.</div>
            <p>
                In the Dabeeo maps library, if the user knows the coordinates, rotation, and title of the camera he wants<br></br>
                We provide methods that can be adjusted to position the camera where it's desired location.<br />
            </p>
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
{`dabeeoMap.control.changeZoom(number);                   // zoomLevel(percent) 100(%) is the current zoomLevel
dabeeoMap.control.zoomIn();                             // zoom In
dabeeoMap.control.zoomOut();                            // zoom Out
`}
                </code>
            </pre>
            <div className={styles.text}>You can check the application example on the map below.</div>
        </div>
    )
}

export default CameraControlTextEn;