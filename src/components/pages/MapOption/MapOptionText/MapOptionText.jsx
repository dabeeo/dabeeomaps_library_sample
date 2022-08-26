import { useEffect } from 'react';
import styles from './MapOptionText.module.scss';

const MapOptionText = () => {

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
        <div className={styles.mapOptionText}>
            <div className={styles.title}>map Options</div>
            <div className={styles.miniTitle}>map을 그릴때 옵션을 추가해 지도의 상태를 조정할 수 있습니다.</div>
            <div className={styles.texts}>mapOption은 다음과 같은 값을 입력받을 수 있습니다.</div>
            <pre>
                <code className={styles.code}>
{`
let mapOptions = {
    camera: '2d' | '3d',                        // 초기 카메라 모드 3d
    floor: string,                              // 적용할 층 정보
    theme: string,                              // 적용할 테마의 ID
    language: 'ko' | 'en',                      // 초기 poi 언어 설정 
    resize : boolean,                            // map을 그릴 영역의 크기가 변경시 지도의 줌 변경 여부 설정  
    poiOption: {                                // POI 옵션
        showPoi: boolean,                       // map상에 poi 보여줄지 말지 결정 여부. default는 true
        poiSpriteEnable: boolean,               // Poi를 항상 정면으로 보이게 함. 
        poiSpriteKeepRotation: boolean,         // POI sprite로 그릴때 원래 각도 유지 여부
    },
    controlOption: {
        zoom: 100,                                //초기줌
        pan: {                                  //중심좌표 
            x: number,
            y: number
        },
        rotate: 0,                              //회전 3d, 2d
        tilt: 0                                 //기울기 3d
    },
};
`}
                </code>
            </pre>
        </div>
    )
}

export default MapOptionText;