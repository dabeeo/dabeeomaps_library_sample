import styles from './DomTag.module.scss';
import DomTagMap from './DomTagMap/DomTagMap';
import DomTagText from './DomTagText/DomTagText';
import DomTagTextEn from './DomTagText/DomTagTextEn';

const DomTag = ({ lang, dabeeoMaps, mapData }) => {
    return (
        <div className={styles.domTag}>
            { lang === 'ko' ? <DomTagText /> : <DomTagTextEn />}
            <DomTagMap dabeeoMaps={dabeeoMaps} mapData={mapData} />
        </div>
    )
}

export default DomTag;