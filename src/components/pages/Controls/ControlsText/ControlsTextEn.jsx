import { useEffect } from 'react';
import styles from './ControlsText.module.scss';

const ControlTextEn = () => {

    useEffect(() => {
        let codeElement = document.querySelectorAll("code");
            if (!codeElement) return;
            codeElement.forEach((data) => {
                let text = data.innerHTML;
                let text1 = text.replace(/&lt;/gi, "<");
                let text2 = text1.replace(/&gt;/gi, ">");
                let text3 = text2.replace(/[<>]/g, `<span>$&</span>`);
                let text4 = text3.replace(/['"]([^'"]*)["']/g, `<span class=${styles.value}>$&</span>`);
                let text5 = text4.replace(
                    / var | if | return| let | const | function | new | window| document| for /g,
                    `<span class=${styles.reserved}>$&</span>`,
                );
                let text6 = text5.replace(/[{}()]/g, `<span class=${styles.special}>$&</span>`);
                let text7 = text6.replace(/\/\/.+/g, `<span class=${styles.comment}>$&</span>`);
                data.innerHTML = text7;
            });
    }, []);

    return (
        <div className={styles.cameraControlText}>
            <div className={styles.title}>Controls</div>
            <div className={styles.miniTitle}>You can control the camera to see the desired location or control the zoom.</div>
            <p>
                In Dabeeo maps library, you can control your camera to<br></br>
                provides methods to position the camera at a desired location or adjust zoom.<br />
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
    )
}

export default ControlTextEn;