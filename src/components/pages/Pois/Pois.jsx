import styles from './Pois.module.scss';
import PoisMap from './PoisMap/PoisMap';
import PoisText from './PoisText/PoisText';
import PoisTextEn from './PoisText/PoisTextEn';

const Pois = ({ lang, dabeeoMaps, mapData }) => {
    return <div className={styles.Pois}>{lang === 'ko' ? <PoisText /> : <PoisTextEn />}</div>;
};

export default Pois;
