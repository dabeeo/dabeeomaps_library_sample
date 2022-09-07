import { useEffect } from 'react';
import styles from './MyLocationText.module.scss';

const MyLocationTextEn = () => {

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
        <div className={styles.myLocationText}>
            <div className={styles.title}>Show my location markers</div>
            <div className={styles.miniTitle}>You can mark or clear my location with map.mylocation</div>
            <p>
                My Position Allows you to position the marker and set properties and animation effects for the marker icon.<br />
                If you do not specify the properties of the My Location Marker icon, it is displayed by default and the animation effect is not activated.<br />
            </p>
            <div className={styles.texts}>The properties of my position marker and examples of drawing are below.</div>
            <pre>
                <code className={styles.code}>
                {`const locationOption = {
    x: number,                                          // my position x coordinate
    y: number,                                          // my position y coordinate
    z: number,                                          // my position z coordinate
    onActive: boolean,                                  // Whether to display when returning from moving to another floor
    icon: {                                             // Icon properties of my location marker
        image: string,                                  // image of my location marker
        size: { width: number, height: number }         // size of my location marker icon
    },
    animate: boolean | {                                // My Position Marker Animation Effect Properties
        color: string,                                  // color of my location marker
        opacity: number,                                // Transparency of my location markers
        desireScale: number                             // max size of my location marker
    }
}

map.mylocation.draw(locationOption);
`}
                </code>
            </pre>
            <div className={styles.texts}>Here's an example of deleting my location marker</div>
            <pre>
                <code className={styles.code}>
                    map.mylocation.clear();
                </code>
            </pre>
            <div className={styles.texts}>Here is a running example</div>
        </div>
    )
}

export default MyLocationTextEn;