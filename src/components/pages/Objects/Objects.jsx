import styles from './Objects.module.scss';
import ObjectsMap from './ObjectsMap/ObjectsMap';
import ObjectsText from './ObjectsText/ObjectsText';
import ObjectsTextEn from './ObjectsText/ObjectsTextEn';

const Objects = ({ lang, dabeeoMaps, mapData }) => {
    return <div className={styles.Objects}>{lang === 'ko' ? <ObjectsText /> : <ObjectsTextEn />}</div>;
};

export default Objects;
