import styles from '../GetText/GetText.module.scss';

const MarkerText = (
    <div className={styles.getStartedText}>
        <div className={styles.title}>마커</div>
        <div className={styles.miniTitle}>원하는 좌표에 마커를 생성하거나 삭제할 수 있습니다.</div>
        <p>
            각 마커의 위치를 지정하고 각 원하는 아이콘을 마커로 지정할 수 있습니다.
            <br />
            position을 제외한 나머지 값들을 입력하지 않을 경우 디폴트로 제공되는 값을 사용합니다.
            <br />
            여러 개의 마커를 지정하기 위하여 배열 형태로 인자를 받습니다.
            <br />
            <br />
            중요! 마커 생성시 비동기 방식으로 호출시 아이디가 중복될 수 있습니다. 동기 방식으로 호출해야 고유한 아이디 반환이 보장됩니다.
            <br />
            <br />
            개별적으로 마커를 삭제하기 위해서는 생성시 마커의 아이디를 받아 아이디를 지정해야 합니다. <br />
            한층에만 마커를 그릴 경우에는 층정보를 생략하나, 여러층에 한꺼번에 마커를 표시하고자하는 경우는 각 마커에 층아이디를 지정합니다.
            <br />
            마커의 속성은 아래 예제와 같습니다.
        </p>
        <pre>
            <code className={styles.code}>
                {`{
    x: number;              /* marker가 위치할 좌표의 x축 값*/
    y: number;              /* marker가 위치할 좌표의 y축 값 */
    fixedSize?: boolean;    /* marker 의 크기가 줌에 따라 항상 동일한 사이즈를 유지할 지 여부 default 는 true, 줌에 따라 사이즈가 변경됨, false 인 경우 입력한 마커 사이즈에 따라 size 가 고정됨 */
    animate?: {             /* animate : 아이콘의 animate 속성*/
        duration?: number;  /** duration: (optional) animate 주기 */
        repeat?: number;    /** repeat: (optional) animate 횟수, undefined이면 무한 반복 */
        opacity?: number;   /** opacity : (optional) animate 투명도 정도 (소수점) min: 0 max:1 */
    };
    textOption?: {
        text?: string;           /** marker의 하단에 표시할 텍스트 */
        fontSize?: number;       /** 텍스트 폰트 사이즈 */
        fontWeight?: number;     /** 텍스트 폰트 굵기 */
        opacity?: number;        /** 텍스트 투명도 */
        letterSpacing?: number;  /** 텍스트 간의 간격 */
        lineSpacing?: number;    /** 텍스트 줄간의 간격 */
        align?: string;          /** 텍스트 정렬 (LEFT | MIDDLE | RIGHT) */
        color?: string;          /** 텍스트 색상 */
        padding?: {              /** 텍스트 상하좌우 패딩 */
            horizontal: number;
            vertical: number;
        };
        strokeStyle?: {
            color?: string;        /** 텍스트 윤곽선 색상 */
            width?: number;        /** 텍스트 윤곽선 굵기 */
            opacity?: number;      /** 텍스트 윤곽선 투명도 */
        };
        backgroundStyle?: {
            opacity?: number;      /** 텍스트 하이라이트 투명도 */
            color?: string;        /** 텍스트 하이라이트 색상 */
            borderRadius?: number; /** 텍스트 하이라이트 경계면 굴곡 */
        };
    }
    iconOption?: {
        iconUrl?: string;    /** marker의 이미지 url */
        width?: number;      /** marker의 넓이 값 */
        height?: number;     /** marker의 높이 값 */
        anchor?: {           /** marker의 중심점 (left/bottom이 0,0이고 right/top이 1,1)*/
            x: number;
            y: number;
        },
    floorId?: string,                        // 각 마커의 층을 지정. 미지정시 default는  현재층,
    data?: any,                              // 마커를 클릭했을 때 반환할 정보
                }`}
            </code>
        </pre>
        <div className={styles.texts}>marker 그리는 메소드는 다음과 같습니다. 동기방식으로 사용하고 id를 받아야 합니다.</div>
        <pre>
            <code className={styles.code}>
                {`
    const id = await map.markers.set({
        marker: [
            {
                x: 100,
                y: 200,
                iconOption: {
                    positionZ: 400
                },
            },
        ],
    })
`}
            </code>
        </pre>
        <div className={styles.texts}>marker를 삭제할수 있습니다.</div>
        <pre>
            <code className={styles.code}>{`map.markers.clear(id | id[]);       // marker의 userData에 있는 id값 참조`}</code>
        </pre>
        <div className={styles.texts}>map상에 존재하는 모든 marker를 삭제합니다.</div>
        <pre>
            <code className={styles.code}>map.markers.clearAll();</code>
        </pre>
        <div className={styles.texts}>
            실행 예제는 다음과 같습니다. marker의 속성에 fixedSize를 준 경우와 애니메이션 속성을 준 경우입니다. 줌을 변경하여 동작의 차이를 확인하기 바랍니다.
        </div>
    </div>
);

export default MarkerText;
