import { useEffect } from 'react';
import styles from './MarkerText.module.scss';

const MarkerText = () => {

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
        <div className={styles.markerText}>
            <div className={styles.title}>Marker</div>
            <div className={styles.miniTitle}>원하는 좌표에 marker를 생성, 삭제할 수 있습니다.</div>
            <p>
                각 마커의 위치를 지정하고 각 마커에 원하는 아이콘을 지정할 수 있습니다.<br />
                position을 제외한 나머지 값들을 입력하지 않을 경우 디폴트로 제공되는 값을 사용합니다.<br />
                여러 개의 마커를 지정하기 위하여 배열 형태로 인자를 받습니다.<br />
                한층에만 마커를 그릴 경우에는 층정보를 생략하나, 여러층에 한꺼번에 마커를 표시하고자하는 경우는 각 마커에 층아이디를 지정해줘야 합니다.<br />
                마커의 속성은 아래 예제와 같습니다.
            </p>
            <pre>
                <code className={styles.code}>
{`
    x: number,                      // 마커의 x좌표
    y: number,                      // 마커의 y좌표
    iconOption: {
        iconUrl: string,                     // marker의 이미지 url
        width: number,                      // 마커의 넓이
        height: number,                     // 마커의 높이
        positionZ: number,                  // 마커의 Z좌표
        visibleIcon: boolean                // 마커를 보여줄지 말지 여부. default = true, true일 경우 보여줌.
        async: true,                            // 마커의 크기가 줌에 관계없이 항상 동일한 크기로 보여줄지 여부. true인 경우네는 항상 동일한 크기로 보임. default 값은 false
    },
    floorId: string,                        // 각 마커의 층을 지정. 지정하지않을 경우 현재 보이는 층에만 표시,
    data: any,                              // 마커를 클릭했을 때 반환할 정보
    tagInfo: object,                        // 마커와 연동되는 dom tag정보.
`}
                </code>
            </pre>
            <div className={styles.texts}>marker 그리는 메소드는 다음과 같습니다.</div>
            <pre>
                <code className={styles.code}>
{`
    map.markers.set({
        marker: [
            {
                x: 100,
                y: 200,
                iconOption: {
                    positionZ: 400
                    async: true,
                },
            },
        ],
    })
`}
                </code>
            </pre>
            <div className={styles.texts}>아래 메소드를 호출하시면 map에 표시된 marker의 사이즈를 줌 배율에 맞게 동기화 여부를 설정할 수 있습니다.</div>
            <pre>
                <code className={styles.code}>
{`map.markers.setOption(boolean)    // true or false, true는 동기화 false는 비동기화
`}
                </code>
            </pre>
            <div className={styles.texts}>아래 메소드를 호출하시면 해당 marker를 삭제할수 있습니다.</div>
            <pre>
                <code className={styles.code}>
{`map.markers.clear(id | id[]);       // marker의 userData에 있는 id값 참조`}
                </code>
            </pre>
            <div className={styles.texts}>marker 삭제 관련 메소드는 다음과 같습니다. map상에 존재하는 모든 marker를 삭제합니다.</div>
            <pre>
                <code className={styles.code}>
                    map.markers.clearAll();
                </code>
            </pre>
            <div className={styles.texts}>실행 예제는 다음과 같습니다.</div>
        </div>
    )
}

export default MarkerText;