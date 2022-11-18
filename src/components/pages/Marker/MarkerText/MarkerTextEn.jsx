import { useEffect } from 'react';
import styles from './MarkerText.module.scss';

const MarkerTextEn = () => {
    useEffect(() => {
        let codeElement = document.querySelectorAll('code');
        if (!codeElement) return;
        codeElement.forEach((data) => {
            let text = data.innerHTML;
            let text1 = text.replace(/&lt;/gi, '<');
            let text2 = text1.replace(/&gt;/gi, '>');
            let text3 = text2.replace(/[<>]/g, `<span>$&</span>`);
            let text4 = text3.replace(/['"]([^'"]*)["']/g, `<span class=${styles.value}>$&</span>`);
            let text5 = text4.replace(/ var | if | return| let | const | function | new | window| document| for /g, `<span class=${styles.reserved}>$&</span>`);
            let text6 = text5.replace(/[{}()]/g, `<span class=${styles.special}>$&</span>`);
            let text7 = text6.replace(/\/\/.+/g, `<span class=${styles.comment}>$&</span>`);
            data.innerHTML = text7;
        });
    }, []);

    return (
        <div className={styles.markerText}>
            <div className={styles.title}>Marker</div>
            <div className={styles.miniTitle}>You can create or delete markers at desired coordinates.</div>
            <p>
                You can position each marker and assign the desired icon to each marker.
                <br />
                If you do not enter any other values ​​except for position, the default value is used.
                <br />
                It receives an argument in the form of an array to designate multiple markers.
                <br />
                When drawing markers on only one floor, floor information is omitted, but if you want to display markers on multiple floors at once, you must
                designate a floor ID for each marker.
                <br />
                Even if the map is expressed in 2D, the coordinates of the markers must be given in 3D. This is because the map data is basically in 3D.
                <br />
                The properties of the marker are as in the example below.
            </p>
            <pre>
                <code className={styles.code}>
                    {`
    position: {
            x: number,                      // marker's x-coordinate
            y: number,                      // marker's y-coordinate
            z: number                       // marker's z-coordinate
    },
    image: './img_marker_blue-3x.png',      // icon image
    size: {
        width: number                       // icon width
        height: number                      // icon height 
    },
    floorId: string,                        // Designate a layer for each marker. If not specified, only the currently visible floor is displayed.
    data: any,                              // Information to return when a marker is clicked
    async: true,                            // Whether the marker's size will always show the same size regardless of zoom. If true, they always appear the same size. default is false
    tagInfo: object,                        // dom tag information linked to the marker.`}
                </code>
            </pre>
            <div className={styles.texts}>The method to draw a marker is as follows.</div>
            <pre>
                <code className={styles.code}>
                    {`
    map.markers.draw({
        marker: [
            {
                position: { x: 100, y: 200, z: 10 },
                async: true
            },
        ],
    })
`}
                </code>
            </pre>
            <div className={styles.texts}>The methods related to marker deletion are as follows. Delete all markers on the map.</div>
            <pre>
                <code className={styles.code}>map.markers.clear();</code>
            </pre>
            <div className={styles.texts}>Here is a running example</div>
        </div>
    );
};

export default MarkerTextEn;
