import styles from './DimensionText.module.scss';

const DimensionText = () => {
    return (
        <div className={styles.dimensionText}>
            <div className={styles.title}>2D / 3D 전환</div>
            <div className={styles.miniTitle}>mapOption을 활용하여 2D, 3D로 전환할수 있습니다.</div>
            <p>
                Dabeeo의 지도에서는 2D, 3D의 두 개의 차원을 사용하실 수 있습니다.<br />
                mapOptions을 통해 처음에 초기화를 시킨 뒤<br />
                메소드를 호출할 경우 현재 작업중인 지도의 차원을 전환시키실 수 있습니다.
            </p>
            <div className={styles.texts}>2D / 3D 전환을 원할시 아래 메소드를 이용하시면 됩니다.</div>
            <code className={styles.code}>map.control.changeCamera("3D"); // 2D | 3D 중 원하는 차원을 입력하시면 됩니다</code>
            <div className={styles.texts}>2D | 3D 전환 예제는 다음과 같습니다.</div>
        </div>
    )
}

export default DimensionText;