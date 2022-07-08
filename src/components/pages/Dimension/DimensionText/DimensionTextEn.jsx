import styles from './DimensionText.module.scss';

const DimensionTextEn = () => {
    return (
        <div className={styles.dimensionText}>
            <div className={styles.title}>2D / 3D Exchange</div>
            <div className={styles.miniTitle}>You can switch to 2D and 3D using mapOption.</div>
            <p>
                Dabeeo's map has two dimensions: 2D and 3D.<br />
                After initializing with mapOptions,<br />
                When invoking a method, you can change the dimension of the map that you are currently working on.
            </p>
            <div className={styles.texts}>If you want a 2D / 3D conversion, you can use the methods below.</div>
            <code className={styles.code}>map.control.changeCamera("3D"); // You can enter any dimension you want 2D | 3D.</code>
            <div className={styles.texts}>2D | 3D switching example is as follows.</div>
        </div>
    )
}

export default DimensionTextEn;