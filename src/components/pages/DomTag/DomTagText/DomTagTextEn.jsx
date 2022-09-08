import { useEffect } from 'react';
import styles from './DomTagText.module.scss';

const DomTagTextEn = () => {

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
        <div className={styles.domTagText}>
            <div className={styles.title}>HTML Tag(Dom Element)</div>
            <div className={styles.miniTitle}>You can create or delete tags at markers or POI positions.</div>
            <p>
                You can create an HTML tag on the desired POI location when creating a marker or by calling a method.<br />
                If you want to create a tag along with creating a marker, you can specify additional options when creating it.<br />
                If you want to create a marker or POI location that has already been created, you can create an HTML Tag on the object by calling the method.<br />
                To delete a created tag, you can delete it through the ID of the created tag.
            </p>
            <div className={styles.texts}>The options required when creating at the marker location are as follows.</div>
            <pre>
                <code className={styles.code}>
                    {`
    tag: HTMLElement,                                       // HTML element to display on map
    pos: 'TOP' | 'BOTTOM' | 'LEFT' | 'RIGHT' | 'CENTER' |   // The location where the dom tag will be created,
    `}
                </code>
            </pre>
            <div className={styles.texts}>Here's an example of creating a marker position.</div>
            <pre>
                <code className={styles.code}>
{`
    const tag = document.createElement('div');          // tags to be displayed on the map
    tag.style.width = '100%';
    tag.style.height = '100%';
    tag.textContent = 'test';

    map.markers.draw({
        marker: [
            {
                position: { x: 3000, y: 1000, z: 400 }, // marker position
                tagInfo: {                              // An object containing tag information. If not, tag is not created.
                    tag: tag,
                    pos: 'TOP',
                }
            }
        ]
    })`}
                </code>
            </pre>
            <div className={styles.texts}>If you want to create a marker at the POI location after already creating a marker, the example is as follows. The id of the marker can be obtained through the userData of the corresponding marker.</div>
            <pre>
                <code className={styles.code}>
{`
    const tag = document.createElement('div');                          // tags to be displayed on the map
    tag.style.width = '100%';
    tag.style.height = '100%';
    tag.textContent = 'test';

    map.tag.addTag(type['poi' || 'marker'],[POI ID || marker ID], tag , 300, 200, 'TOP', true, floorId); 
    // type : 'marker' or 'poi', id, tag, width, height, pos, isResize, floorId
`}
                </code>
            </pre>
            <p>
                If you want to delete it, you can input the poi ID in the case of a poi, but in the case of a marker, you must use the position value of the marker to get an ID created by itself.<br />
                You can proceed with deletion with that ID.
            </p>
            <div className={styles.texts}>If you want to find a tag linked to a marker or POI, call the following method.</div>
            <code className={styles.code}>map.tag.findTag(id) // poi 또는 marker.userData.id</code>
            <div className={styles.texts}>The method call to delete a tag is</div>
            <code className={styles.code}>map.tag.removeTag(id);</code>
            <div className={styles.texts}>The method to delete all tags is as follows.</div>
            <code className={styles.code}>map.tag.removeAllTag()</code>
            <div className={styles.texts}>An example of how these methods work is as follows.</div>
        </div>
    )
}

export default DomTagTextEn;