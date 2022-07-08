import styles from './MarkerText.module.scss';

const MarkerText = () => {
    return (
        <div className={styles.markerText}>
            <div className={styles.title}>Marker</div>
            <div className={styles.miniTitle}>원하는 좌표에 marker를 생성, 삭제할 수 있습니다.</div>
            <p>
                각 마커의 위치를 지정하고 각 마커에 원하는 아이콘을 지정할 수 있습니다.<br />
                position을 제외한 나머지 값들을 입력하지 않을 경우 디폴트로 제공되는 값을 사용합니다.<br />
                여러 개의 마커를 지정하기 위하여 배열 형태로 인자를 받습니다.<br />
                한층에만 마커를 그릴 경우에는 층정보를 생략하나, 여러층에 한꺼번에 마커를 표시하고자하는 경우는 각 마커에 층아이디를 지정해줘야 합니다.<br />
                지도를 2D로 표현하더라도 마커의 좌표는 3D로 줘야합니다. 기본적으로 지도데이터가 3D로 되어 있기 떄문입니다.<br />
                마커의 속성은 아래 예제와 같습니다.
            </p>
            <pre>
                <code className={styles.code}>
{`
    position: {
            x: number,                      // 마커의 x좌표
            y: number,                      // 마커의 y좌표
            z: number                       // 마커의 z좌표
    },
    image: './img_marker_blue-3x.png',      // 아이콘 이미지
    size: {
        width: number,                      // 아이콘의 넓이
        height: number                      // 아이콘의 높이 
    },
    floorId: string,                        // 각 마커의 층을 지정. 지정하지않을 경우 현재 보이는 층에만 표시,
    data: any,                              // 마커를 클릭했을 때 반환할 정보
    async: true,                            // 마커의 크기가 줌에 관계없이 항상 동일한 크기로 보여줄지 여부. true인 경우네는 항상 동일한 크기로 보임. default 값은 false
    tagInfo: object,                        // 마커와 연동되는 dom tag정보.
    isKeep: boolean                         // 층 변경시에도 유지되는 지에 대한 여부. default값은 false`}
                </code>
            </pre>
            <div className={styles.texts}>marker 그리는 메소드는 다음과 같습니다.</div>
            <pre>
                <code className={styles.code}>
{`
    map.markers.draw({
        marker: [
            {
                position: { x: 100, y: 200, z: 10 },
                async: true,
                isKeep: true,
            },
        ],
    })
`}
                </code>
            </pre>
            <div className={styles.texts}>marker 삭제 관련 메소드는 다음과 같습니다. map상에 존재하는 모든 marker를 삭제합니다.</div>
            <pre>
                <code className={styles.code}>
                    map.markers.clear();
                </code>
            </pre>
        </div>
    )
}

export default MarkerText;