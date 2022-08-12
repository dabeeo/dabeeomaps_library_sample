
import styles from './MapContextMap.module.scss';

const LayerGroupMap = ({ dabeeoMaps, mapData }) => {

    return (
        <div className={styles.viewport}>
             <iframe src={`https://dabeeo.github.io/dabeeomaps_library_sample/Examples/mapContext/index.html`}></iframe>
             <a className={styles.codes} href={`https://github.com/dabeeo/dabeeomaps_library_sample/blob/master/Examples/mapContext/index.html`} target='_blank'>코드</a>
        </div>
    )
}

export default LayerGroupMap;