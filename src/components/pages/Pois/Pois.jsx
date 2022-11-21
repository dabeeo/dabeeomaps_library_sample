import Code from '../../Code/Code';
import styles from '../GetText/GetText.module.scss';
import GetText from '../GetText/GetText';
import PoisText from './PoisText';
import PoisTextEn from './PoisTextEn';

const Pois = ({ lang, dabeeoMaps, mapData }) => {
    return (
        <div className={styles.getStarted}>
            <GetText text={lang === 'ko' ? PoisText : PoisTextEn} />
        </div>
    );
};

export default Pois;
