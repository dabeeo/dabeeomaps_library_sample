import Code from '../../Code/Code';
import styles from '../GetText/GetText.module.scss';
import GetText from '../GetText/GetText';
import MapOptionText from './MapOptionText';
import MapOptionTextEn from './MapOptionTextEn';

const MapOption = ({ lang }) => {
    return (
        <div className={styles.getStarted}>
            <GetText text={lang === 'ko' ? MapOptionText : MapOptionTextEn} />
            <div className={styles.viewport}>
                <Code id="mapOption" />
            </div>
        </div>
    );
};

export default MapOption;
