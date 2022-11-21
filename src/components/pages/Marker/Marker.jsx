import Code from '../../Code/Code';
import styles from '../GetText/GetText.module.scss';
import GetText from '../GetText/GetText';
import MarkerText from './MarkerText';
import MarkerTextEn from './MarkerTextEn';

const Marker = ({ lang, dabeeoMaps, mapData }) => {
    return (
        <div className={styles.getStarted}>
            <GetText text={lang === 'ko' ? MarkerText : MarkerTextEn} />
            <div className={styles.viewport}>
                <Code id="marker" />
            </div>
        </div>
    );
};

export default Marker;
