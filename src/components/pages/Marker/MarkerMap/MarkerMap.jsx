import styles from './MarkerMap.module.scss';

const MarkerMap = ({ dabeeoMaps, mapData }) => {

    return(
        <div className={styles.viewport}>
             <iframe src={`https://dabeeo.github.io/dabeeomaps_library_sample/Examples/marker/index.html`}></iframe>
             <a className={styles.codes} href={`https://github.com/dabeeo/dabeeomaps_library_sample/blob/master/Examples/marker/index.html`} target='_blank'>코드</a>
        </div>
    )
}

export default MarkerMap;