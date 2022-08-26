import { useEffect } from 'react';
import styles from './MapContextText.module.scss';

const MapContextText = () => {

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
        <div className={styles.mapContextText}>
            <div className={styles.title}>MapContext</div>
            <div className={styles.miniTitle}>ID 또는 code를 사용해 Map을 수정할 수 있습니다.</div>
            <p>
                현재 Map의 층을 바꾸고 싶으실 때 바꿀 층의 ID를 이용해 층을 바꾸실 수 있습니다.<br />
                각 object 또는 poi가 가지고 있는 groupCode를 사용해서 관련 정보를 찾을 수 있습니다.<br />
                정보가 필요한 groupCode로 메소드를 호출 시 관련 정보를 얻으실 수 있습니다.<br />
            </p>
            <div className={styles.texts}>층 전환은 다음 메소드를 호출하시면 됩니다.</div>
            <pre>
              <code className={styles.code}>map.context.changeFloor([변경할 층 ID]);</code>
            </pre>
            <div className={styles.texts}>다음 메소드를 호출하시면 map을 지우실 수 있습니다.</div>
            <pre>
              <code className={styles.code}>map.context.cleanup();</code>
            </pre>
            <div className={styles.texts}>다음 메소드를 호출하시면 설정한 mapOption을 반환받으실 수 있습니다.</div>
            <pre>
              <code className={styles.code}>map.context.getMapOptions();</code>
            </pre>
            <div className={styles.texts}>입력받은 code의 groupCode를 가지는 object와 그 모든 하위 요소들을 map에 표시합니다.</div>
            <pre>
                <code className={styles.code}>
                    map.context.showByCode([GroupCode]);
                </code>
            </pre>
            <div className={styles.texts}>입력받은 code의 groupCode를 가지는 object와 그 모든 하위 요소들을 map에서 숨깁니다.</div>
            <pre>
                <code className={styles.code}>
                    map.context.hideByCode([GroupCode]);
                </code>
            </pre>
            <div className={styles.texts}>map의 언어 설정을 바꿉니다.</div>
            <pre>
                <code className={styles.code}>
                    map.context.changeLanguage([지도가 가지고 있는 언어 타입]);
                </code>
            </pre>
            <div className={styles.texts}>실행 예제는 다음과 같습니다.</div>
            
        </div>
    )
}

export default MapContextText;