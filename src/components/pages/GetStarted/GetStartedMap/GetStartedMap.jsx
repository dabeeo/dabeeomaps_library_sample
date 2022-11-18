import styles from './GetStartedMap.module.scss';

const GetStartedMap = () => {
    return (
        <div className={styles.viewport}>
            <iframe src={`https://dabeeo.github.io/dabeeomaps_library_sample/Examples/getStarted/index.html`}></iframe>
            <a className={styles.codes} href={`https://github.com/dabeeo/dabeeomaps_library_sample/blob/master/Examples/getStarted/index.html`} target="_blank">
                코드
            </a>
        </div>
    );
};

export default GetStartedMap;
