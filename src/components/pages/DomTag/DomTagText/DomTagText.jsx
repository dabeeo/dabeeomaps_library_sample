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
            <div className={styles.miniTitle}>marker나 POI position에 tag를 생성 또는 삭제할 수 있습니다.</div>
            <p>
                marker를 생성할 때나 메소드 호출로 원하는 POI 위치상에 HTML Tag를 생성할 수 있습니다.<br />
                marker 생성과 함께 Tag 생성을 원하실 경우 생성 시 추가 옵션을 지정하시면 됩니다.<br />
                이미 생성된 marker나 POI 위치에 생성을 원하시면 메소드 호출을 통해 해당 object에 HTML Tag를 생성할 수 있습니다.<br />
                생성된 태그를 삭제하실려면 생성된 태그의 id를 통해 삭제하실 수 있습니다.
            </p>
            <div className={styles.texts}>마커 위치에 생성시 필요한 옵션은 다음과 같습니다.</div>
            <pre>
                <code className={styles.code}>
                    {`
    tag: HTMLElement, map에 표시할 HTML element
    pos: 'TOP' | 'BOTTOM' | 'LEFT' | 'RIGHT' | 'CENTER' |  // Dom tag가 생성될 위치,
    `}
                </code>
            </pre>
            <div className={styles.texts}>마커 위치 생성 예제는 다음과 같습니다.</div>
            <pre>
                <code className={styles.code}>
{`
    const tag = document.createElement('div'); // 지도상에 표시할 태그
    tag.textContent = 'test';

    map.markers.set({
        marker: [
            {
                x: 100,
                y: 200,
                tagInfo: {                              // 태그 정보를 담고 있는 object. 없을 경우 태그 생성안함
                    tag: tag,
                    pos: 'TOP',
                    floorId: 'FL-123456'
                }
            }
        ]
    })`}
                </code>
            </pre>
            <div className={styles.texts}>마커를 이미 생성한 뒤 또는 POI위치에 생성을 원하실 경우 예제는 다음과 같습니다. Marker의 id는 해당 marker의 userData를 통해 얻으실 수 있습니다.</div>
            <pre>
                <code className={styles.code}>
{`
    const tag = document.createElement('div'); // 지도상에 표시할 태그
    tag.style.width = '100%';
    tag.style.height = '100%';
    tag.textContent = 'test';

    const tagInfo = {
        type: 'poi'       // 'poi' || 'marker',
        tag: tag,         // HTMLElement
        pos: 'TOP'        // tag의 위치값. 
        floorId: 'FL-123456'   // tag가 위치할 floor의 ID,
        id: 'PO-123456'   // 연동할 POI or marker의 ID
    }

    map.tag.set(tagInfo); 
`}
                </code>
            </pre>
            <div className={styles.texts}>아래 메소드를 호출하시면 입력한 ID와 연동된 tag를 삭제합니다.</div>
            <pre>
                <code className={styles.code}>map.tag.clear(id);    // 연동된 poi나 marker의 ID를 넣으시면 됩니다.</code>
            </pre>
            <div className={styles.texts}>아래 메소드를 호출하시면 입력한 ID와 연동된 tag의 정보를 반환합니다</div>
            <pre>
                <code className={styles.code}>map.tag.find(id);    // 연동된 poi나 marker의 ID를 넣으시면 됩니다.</code>
            </pre>
            <div className={styles.texts}>아래 메소드를 호출하시면 모든 tag를 삭제합니다.</div>
            <pre>
                <code className={styles.code}>map.tag.clearAll();</code>
            </pre>
        </div>
    )
}

export default DomTagText;