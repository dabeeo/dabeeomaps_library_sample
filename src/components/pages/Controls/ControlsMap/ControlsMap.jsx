import styles from './ControlsMap.module.scss';

const ControlsMap = () => {

    return (
        <div className={styles.viewport}>
             <iframe src={`https://dabeeo.github.io/dabeeomaps_library_sample/Examples/controls/index.html`}></iframe>
             <a className={styles.codes} href={`https://github.com/dabeeo/dabeeomaps_library_sample/blob/master/Examples/controls/index.html`} target='_blank'>코드</a>
        </div>
    )
}

export default ControlsMap;