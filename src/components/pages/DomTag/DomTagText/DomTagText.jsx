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
                생성된 태그를 삭제하실려면 생성된 태그의 id를 통해 삭제하거나 만들어진 모든 태그를 한번에 삭제할 수 있습니다.
            </p>
            <div className={styles.texts}>예제는 다음과 같습니다.</div>
            <pre>
                <code className={styles.code}>
{`
    const tag = document.createElement('div'); // 지도상에 표시할 태그
    tag.style.width = '100%';
    tag.style.height = '100%';
    tag.textContent = 'test';

    const option = {
        coordinate: { x: 1000, y:1000, z: 100 },
        tag: tag,
        floorId: 'FL-t4vqgyek3jnb8146',
    }

    const item = map.tag.set(option); 
`}
                </code>
            </pre>
            <div className={styles.texts}>아래 메소드를 호출하시면 해당 tag를 삭제합니다.</div>
            <pre>
                <code className={styles.code}>map.tag.clear(item.id);  </code>
            </pre>
            <div className={styles.texts}>아래 메소드를 호출하시면 해당 tag의 정보를 반환합니다</div>
            <pre>
                <code className={styles.code}>map.tag.find(itme.id);    // 해당 tag의 ID를 넣으시면 됩니다.</code>
            </pre>
            <div className={styles.texts}>아래 메소드를 호출하시면 모든 tag를 삭제합니다.</div>
            <pre>
                <code className={styles.code}>map.tag.clearAll();</code>
            </pre>
        </div>
    )
}

export default DomTagText;