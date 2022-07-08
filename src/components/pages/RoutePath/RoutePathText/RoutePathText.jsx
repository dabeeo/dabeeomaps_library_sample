import styles from './RoutePathText.module.scss';

const RoutePathText = () => {
    return (
        <div className={styles.routePathText}>
            <div className={styles.title}>길찾기 경로 텍스트로 표시하기</div>
            <div className={styles.miniTitle}>getNavigation()을 사용해 지도의 출발지에서 목적지까지의 경로를 텍스트로 알려줄 수 있습니다.</div>
            <p>
                단, dabeeoMap.routeSimulation.set을 호출하여 경로를 설정해 주신뒤 사용하셔야 합니다.<br />
                getNavigation()을 호출 시 RoutePath로 경로에 대한 정보를 반환합니다.
            </p>
            <pre>
                <code className={styles.code}>
                    getNavigation();
                </code>
            </pre>
            <div className={styles.texts}>적용 예시 코드는 다음과 같습니다.</div>
            <pre>
                <code className={styles.code}>
{`let list = 
`}
                </code>
            </pre>
        </div>
    )
}

export default RoutePathText;