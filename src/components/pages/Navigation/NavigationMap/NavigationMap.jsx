import styles from './NavigationMap.module.scss';

const NavigationMap = () => {
    return (
        <div className={styles.viewport}>
            <iframe src={`https://dabeeo.github.io/dabeeomaps_library_sample/Examples/navigation/index.html`}></iframe>
            <a className={styles.codes} href={`https://github.com/dabeeo/dabeeomaps_library_sample/blob/master/Examples/navigation/index.html`} target="_blank">
                코드
            </a>
        </div>
    );
};

export default NavigationMap;
