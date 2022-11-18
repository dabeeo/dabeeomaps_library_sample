import styles from './MyLocationMap.module.scss';

const MyLocationMap = () => {
    return (
        <div className={styles.viewport}>
            <iframe src={`https://dabeeo.github.io/dabeeomaps_library_sample/Examples/myLocation/index.html`}></iframe>
            <a className={styles.codes} href={`https://github.com/dabeeo/dabeeomaps_library_sample/blob/master/Examples/myLocation/index.html`} target="_blank">
                코드
            </a>
        </div>
    );
};

export default MyLocationMap;
