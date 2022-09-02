import { useEffect } from 'react';
import styles from './PoisText.module.scss';

const PoisText = () => {

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
        <div className={styles.poisText}>
            <div className={styles.title}>Pois</div>
            <div className={styles.miniTitle}>Poi를 개별적으로 또는 한번에 숨기거나 표출할 수 있습니다.  </div>
            <p>
                생성과 삭제시 객체가 삭제되거나 생성되므로 성능에 영향을 줍니다. 숨기거나 표출은 visibility를 수정하므로 성능에 영향이 없습니다. 
            </p>
            
            <div className={styles.texts}>지도의 모든 poi를 숨깁니다.</div>
            <pre>
              <code className={styles.code}>map.pois.hide()</code>
            </pre>
            <div className={styles.texts}><br />지도의 모든 poi를 표출합니다.</div>
            <pre>
              <code className={styles.code}>map.pois.show()</code>
            </pre>
            <div className={styles.texts}><br />특정 poi를 숨깁니다.</div>
            <pre>
              <code className={styles.code}>map.pois.hide('PO-BCMoiSGto0271')</code>
            </pre>
            <div className={styles.texts}><br />특정 poi를 표출합니다.</div>
            <pre>
              <code className={styles.code}>map.pois.show('PO-BCMoiSGto0271')</code>
            </pre>
            <div className={styles.texts}><br />모든 poi를 제거합니다.</div>
            <pre>
              <code className={styles.code}>map.pois.clearAll()</code>
            </pre>
            <div className={styles.texts}><br />모든 poi를 생성합니다.</div>
            <pre>
              <code className={styles.code}>map.pois.setAll()</code>
            </pre>
            <div className={styles.texts}><br /><br /><br /><br /><br /><br /></div>
            
        </div>
    )
}

export default PoisText;