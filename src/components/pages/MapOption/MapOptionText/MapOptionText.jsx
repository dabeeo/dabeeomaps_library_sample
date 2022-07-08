import styles from './MapOptionText.module.scss';

const MapOptionText = () => {
    return (
        <div className={styles.mapOptionText}>
            <div className={styles.title}>map Options</div>
            <div className={styles.miniTitle}>map을 그릴때 옵션을 추가해 지도의 상태를 조정할 수 있습니다.</div>
            <div className={styles.texts}>mapOption은 다음과 같은 값을 입력받을 수 있습니다.</div>
            <pre>
                <code className={styles.code}>
{`
let mapOptions = {
    isPoiSprite: boolean,                       // Poi를 항상 정면으로 보이게 함. 
    language: 'ko' | 'en',                      // 초기 poi 언어 설정 
    camera: '2d' | '3d',                        // 초기 카메라 모드 3d
    zoom: number,                               // 초기 줌 설정
    maxZoom: number,                            // max zoom level 설정
    minZoom: number,                            // min zoom level 설정
    floor: string,                              // 적용할 층 정보
    theme: string,                              // 적용할 테마 정보
    showPoi: boolean,                           // map상에 poi 보여줄지 말지 결정 여부. default는 true
    controlDrag: {                              // 지도 이동할 때 사용자의 마우스 버튼을 설정. 'left' | 'right'값을 가짐. default = 3d: right, 2d = left
        "3d": string,
        "2d": string
    },
    rotationTouch2d: boolean,                   // 사용자가 2d상에서 touch로 회전기능을 활성화 / 비활성화할 것인지 결정. 
    rotationMouse2d: boolean,                   // 사용자가 2d상에서 마우스로 회전긴으을 활성화 / 비활성화할 것인지 결정.
    controlZoom: boolean,                       // 사용자가 마우스 휠로 지도 줌을 활성화 / 비활성화할 것인지 결정.
    poiLevel: any[],                            // poi 중요도에 따라 설정한 지도 확대 백분율에 맞게 보이게 설정. ex) poiLevel = 50 => 줌 50 이상부터 보이게 설정
    isPoiAngle: boolean,                        // poi 정면 바라보는 기능을 사용하기 위해 isPoiAngle 대신 isPoiSprite를 사용하기 바랍니다. 실내지도 3d 모드에서 지도의 각을 변화시켜도 poi를 항상 정면을 바라보게 할 지 여부 결정.
    splitScreen: number,                        // 화면 분할. max = 4
    fontWeight: {                               // Poi Title font style
        normal: number,                         // poi title font normal default = 1(100%)
        bold: number                            // poi title font bold default = 1(100%)
    },
    poiSpriteKeppRotation: boolean,             // POI sprite로 그릴때 원래 각도 유지 여부
    panningPercent: number,                     // groupBox3 대비 카메라가 움직일 수 있는 퍼센트 (0.05 ~ 1)
    useMinMap: boolean,                         // 미니맵 사용 여부 default는 false
    tiltLimitAngle: number,                     // tilt 한계점 설정.
    center: {                                   // 초기 중심 좌표 
        x: number,                              // 지도 내 좌표 x 
        y: number                               // 지도 내 좌표 y
    },
    angle: {                                    // 3d 모드인 경우의 각도 
        vertical: number,                       // 수직 경사
        horizontal: number,                     // 수평 경사
        fixed: boolean                          // 고정 여부
    }
};
`}
                </code>
            </pre>
        </div>
    )
}

export default MapOptionText;