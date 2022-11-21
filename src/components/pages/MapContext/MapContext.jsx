import Code from '../../Code/Code';
import styles from '../GetText/GetText.module.scss';
import GetText from '../GetText/GetText';
import MapContextText from './MapContextText';
import MapContextTextEn from './MapContextTextEn';

const MapContext = ({ lang }) => {
    return (
        <div className={styles.getStarted}>
            <GetText text={lang === 'ko' ? MapContextText : MapContextTextEn} />
            <div className={styles.viewport}>
                <Code id="mapContext" />
            </div>
        </div>
    );
};

export default MapContext;
