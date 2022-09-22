import { useEffect } from 'react';
import styles from './DomTagText.module.scss';

const DomTagText = () => {

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
            <div className={styles.miniTitle}>tag를 생성 또는 삭제할 수 있습니다.</div>
            <p>
                원하는 css 속성을 갖는 HTML Element를 특정 poi, marker, 또는 위치에 지정할 수 있습니다. <br />
                marker 삭제시 함께 삭제, 생성된 태그의 id를 통해 삭제, 또는  모든 태그를 한번에 삭제할 수 있습니다.
            </p>
            <div className={styles.texts}>위치를 지정하여 tag를 생성하는 예제는 다음과 같습니다.</div>
            <pre>
                <code className={styles.code}>
{`
    const tag = document.createElement('div'); // 지도상에 표시할 태그
    tag.style.width = '100%';
    tag.style.height = '100%';
    tag.textContent = 'test';

    const option = {
        position : { x: 1000, y:1000, z: 100 },
        tag: tag,
        floorId: 'FL-t4vqgyek3jnb8146',
    }

    const tagItem = map.tag.set(option); 
`}
                </code>
            </pre>
            <div className={styles.texts}>아래 메소드를 호출하시면 해당 tag를 삭제합니다.</div>
            <pre>
                <code className={styles.code}>map.tag.clear(tagItem.id);  </code>
            </pre>
            <div className={styles.texts}>아래 메소드를 호출하시면 해당 tag의 정보를 반환합니다</div>
            <pre>
                <code className={styles.code}>map.tag.find(tagItem.id);    // 해당 tag의 ID를 넣으시면 됩니다.</code>
            </pre>
            <div className={styles.texts}>아래 메소드를 호출하시면 모든 tag를 삭제합니다.</div>
            <pre>
                <code className={styles.code}>map.tag.clearAll();</code>
            </pre>

            <div className={styles.texts}>poi를 지정하여 tag를 생성하는 예제는 다음과 같습니다.</div>
            <pre>
                <code className={styles.code}>
{`
const tagItem = map.tag.setPOITag({ parentId: poi.id, pos: 'BOTTOM', tag: tag2});
`}
                </code>
            </pre>
            <div className={styles.texts}>marker를 지정하여 tag를 생성하는 예제는 다음과 같습니다.</div>
            <pre>
                <code className={styles.code}>
{`
        const lists = await map.markers.set({      // 생성된 marker들의 ID List를 저장합니다.
            marker: [
                {
                    x: 1000,
                    y: 1000,
                    iconOption: {
                        positionZ: 400,
                        anchor: {
                            x: 0.5,
                            y: 0.5
                        },
                    },
                }
            ]
        });

        // marker와 연동되는 tag 생성 메소드 실행 구문입니다.
        const tag3 = document.createElement('div');
        tag3.style.width = '100px';
        tag3.style.height = '50px';
        tag3.style.backgroundColor = 'yellow';
        tag3.textContent = 'test';

        console.log(lists);

        const tagItem = map.tag.setMarkerTag({ parentId: lists[0], pos: 'BOTTOM', tag: tag3 });

`}
                </code>
            </pre>

            <div className={styles.texts}>marker에 생성한 태그는 아래와 같이 삭제할 수 있습니다. </div>
            <pre>
                <code className={styles.code}>
{`

        map.tag.clear(tagItem.id); //tag만 삭제됩니다. 
        map.markers.clear(lists[0]) //마커를 삭제시 tag도 삭제됩니다. 

`}
                </code>
            </pre>

        </div>
    )
}

export default DomTagText;