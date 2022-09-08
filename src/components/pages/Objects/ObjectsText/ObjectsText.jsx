import { useEffect } from 'react';
import styles from './ObjectsText.module.scss';

const ObjectsText = () => {

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
        <div className={styles.objectsText}>
            <div className={styles.title}>오브젝트</div>
            <div className={styles.miniTitle}>오브젝트를 개별적으로 또는 전체를 한번에 컨트롤할 수 있습니다. </div>
            <p>
                objects의 메소드의 기능은 다음과 같습니다. <br />
                전체를 한번에 생성,제거할 수 있습니다. 이 때 객체가 삭제되거나 생성되므로 성능에 영향을 줄 수 있습니다. <br />
                숨기거나 보이게 할 수 있습니다. 숨기거나 보이는 기능은 단순히 visibility를 수정하므로 성능에는 영향이 없습니다. <br />
                스타일을 바꾸거나 다시 되돌릴 수 있습니다. <br />
            </p>
            
            <div className={styles.texts}>지도의 모든 오브젝트를 숨깁니다.</div>
            <pre>
              <code className={styles.code}>map.objects.hide()</code>
            </pre>
            
            <div className={styles.texts}><br />지도의 모든 poi를 표출합니다.</div>
            <pre>
              <code className={styles.code}>map.objects.show()</code>
            </pre>
            
            <div className={styles.texts}><br />특정 오브젝트, 또는 여러개의 오브젝트를 숨깁니다.</div>
            <pre>
              <code className={styles.code}>map.objects.hide('[PO-BCMoiSGto0271'])</code>
            </pre>
            
            <div className={styles.texts}><br />특정 오브젝트, 또는 여러개의 오브젝트를 표출합니다.</div>
            <pre>
              <code className={styles.code}>map.objects.show(['PO-BCMoiSGto0271'])</code>
            </pre>

            <div className={styles.texts}><br />모든 오브젝트를 제거합니다.</div>
            <pre>
              <code className={styles.code}>map.objects.clearAll()</code>
            </pre>

            <div className={styles.texts}><br />모든 오브젝트를 생성합니다.</div>
            <pre>
              <code className={styles.code}>map.objects.setAll()</code>
            </pre>

            <div className={styles.texts}><br />특정 또는 모든 오브젝트의 스타일을 변경합니다.</div>
            <pre>
                <code className={styles.code}>
{`
 const updateOption = {
    activeDest: true,
    color: "#00ffff",
    opacity: 0.3,
    isAnimate: true,
    duration: 1200,
    isRepeat: true,
    isYoyo: false,
    // id 를 지정하지 않으면 모든 object 의 스타일을 변경합니다.
    // ids: [
    //   'OB-aN7fGeVoze1959', // 플랫폼사업부 회의실
    //   'OB-mxanpdYA1T2410', // 남자화장실
    //   'PO-JQ4mw4YeT4536', // 여자화장실
    // ],
};
map.objects.set(updateOption);
`}
                </code>
            </pre>
            <div className={styles.texts}><br />변경된 특정 또는 모든 오브젝트의 스타일을 되돌립니다.</div>
            <pre>
                <code className={styles.code}>
{`
map.objects.reset('OB-mxanpdYA1T2410'); // 단일 오브젝트의 속성 해제
map.objects.reset(['OB-mxanpdYA1T2410', 'PO-JQ4mw4YeT4536']); // 여러 오브젝트의 속성 해제
map.objects.reset(); // 모든 오브젝트의 속성 해제 
`}
                </code>
            </pre>


            <div className={styles.texts}><br /><br /><br /><br /><br /><br /></div>
            
        </div>
    )
}

export default ObjectsText;