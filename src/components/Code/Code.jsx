import styles from './Code.module.scss';
const Code = ({ id }) => {
    console.log('code');
    console.log(id);
    return (
        <div className={styles['iframe-container']}>
            <iframe src={`https://dabeeo.github.io/dabeeomaps_library_sample/Examples/${id}/index.html`}></iframe>
            <a className={styles.viewCode} href={`https://github.com/dabeeo/dabeeomaps_library_sample/blob/master/Examples/${id}/index.html`} target="_blank">
                코드로 보기
            </a>
        </div>
    );
};
export default Code;
