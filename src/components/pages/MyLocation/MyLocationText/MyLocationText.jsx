import styles from './MyLocationText.module.scss';

const MyLocationText = () => {
    return (
        <div className={styles.myLocationText}>
            <div className={styles.title}>내 위치 마커 표시하기</div>
            <div className={styles.miniTitle}>map.mylocation으로 내 위치를 표시하거나 지울 수 있습니다.</div>
            <p>
                내 위치 마커의 위치를 지정하고 마커 아이콘의 속성과 애니메이션 효과를 설정할 수 있습니다.<br />
                내 위치 마커 아이콘의 속성을 지정하지 않는 경우 디폴트 값으로 표시되며 애니메이션 효과는 활성화되지 않습니다.<br />
            </p>
            <div className={styles.texts}>내 위치 마커의 속성과 그리는 예제는 아래와 같습니다.</div>
            <pre>
                <code className={styles.code}>
{`const locationOption = {
    x: number,                                          // 내 위치 x 좌표
    y: number,                                          // 내 위치 y 좌표
    z: number,                                          // 내 위치 z 좌표
    onActive: boolean,                                  // 타층 이동후 다시 돌아왔을 때 표시 여부
    isKeep: boolean,                                    // 층 변경시에도 유지되는 지에 대한 여부. default값은 false
    icon: {                                             // 내 위치 마커의 아이콘 속성
        image: string,                                  // 내 위치 마커의 이미지
        size: { width: number, height: number }         // 내 위치 마커 아이콘의 크기
    },
    animate: boolean | {                                // 내 위치 마커 애니메이션 효과 속성
        color: string,                                  // 내 위치 마커의 색상
        opacity: number,                                // 내 위치 마커의 투명도
        desireScale: number                             // 내 위치 마커의 최대 크기
    }
}

map.mylocation.draw(locationOption);
`}
                </code>
            </pre>
            <div className={styles.texts}>내 위치 마커 삭제 예제는 다음과 같습니다.</div>
            <pre>
                <code className={styles.code}>
                    map.mylocation.clear();
                </code>
            </pre>
            <div className={styles.texts}>실행 예제는 다음과 같습니다.</div>
        </div>
    )
}

export default MyLocationText;