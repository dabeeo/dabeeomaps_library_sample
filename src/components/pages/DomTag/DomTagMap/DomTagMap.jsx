import styles from './DomTagMap.module.scss';

const DomTagMap = () => {

    return (
        <div className={styles.viewport}>
             <iframe src={`https://dabeeo.github.io/dabeeomaps_library_sample/Examples/tag/index.html`}></iframe>
             <a className={styles.codes} href={`https://github.com/dabeeo/dabeeomaps_library_sample/blob/master/Examples/tag/index.html`} target='_blank'>코드</a>
        </div>
    )
}

export default DomTagMap;