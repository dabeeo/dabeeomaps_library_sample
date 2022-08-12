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
    /** 초기 줌 설정 */
    zoom: number,
    /** 최대 zoom level */
    maxZoom?:number;
    /** 최소 zoom level */
    minZoom?:number;
    /** 적용할 층 정보 */
    floor: string,
    /** 적용할 테마 정보 */
    theme: string,
    /** 초기 카메라 모드 { '2D' || '3D' } */
    camera: string,
    /** 카메라 컨트롤 관련 */
    controlOption : {
        zoom : 0,
        pan? : {
        x : number,
        y : number
        },
        rotate : 0,
        tilt : 0
    },
    /** 초기 POI 언어 설정. { 'ko' || 'en' } */
    language: 'ko' | 'en',
    /** POI 옵션 */
    poiOption: {
        /** map상의 POI 보여줄지 말지 결정 여부. default = true */
        showPoi: boolean,
        /** Poi를 항상 정면으로 보이게 함. */
        poiSpriteEnable : boolean, 
        /** POI sprite로 그릴때 원래 각도 유지 여부 */
        poiSpriteKeepRotation : boolean,
    }
    /**
     * 지도 이동할 때 사용자의 마우스 버튼 설정. default = 3d { 'left' || 'right' }
     */
    controlDrag: {
        "3d": string,
        "2d": string
    },
    /** 2d상에서 touch로 회전기능을 활성화 / 비활성화할 것인지 결정. */
    rotationTouch2d: boolean,
    /** 3d상에서 마우스로 회전기능을 활성화 / 비활성화할 것인지 결정 */
    rotationMouse2d: boolean,
    /** 마우스 휠로 지도 줌을 활성화 / 비활성화할 것인지 결정 */
    controlZoom: boolean,
    /** poi 중요도에 따라 설정한 지도 확대 백분율에 맞게 보이게 설정. ex) poiLevel = 50 => 줌 50 이상부터 보이게 설정 */
    poiLevel :any[],
    // /** 화면 분할. max = 4 */
    // splitScreen: number,
    /** poi title font style */
    fontWeight: { 
        normal:number, 
        bold:number 
    },
    /** groupBox3 대비 카메라가 움직일 수 있는 퍼센트 (0.05 ~ 1) */ 
    panningPercent : number,
    /** tilt 한계점 설정. */
    tiltLimitAngle : number,
    /**
     * 3D모드일 경우의 각도
     * @param vertical 수직 경사
     * @param horizontal 수평 경사
     * @param fixed 고정 여부
     */
    angle?: {
        vertical : number, 
        horizontal : number,
        fixed : boolean
    },
    /**
     * 초기 중심 좌표
     * @param x 지도 내 좌표 x
     * @param y 지도 내 좌표 y
     */
    center?: {
        x: number, 
        y: number 
    },
};
`}
                </code>
            </pre>
        </div>
    )
}

export default MapOptionText;