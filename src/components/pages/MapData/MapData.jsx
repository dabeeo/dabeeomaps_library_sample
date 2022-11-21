import Code from '../../Code/Code';
import styles from '../GetText/GetText.module.scss';
import GetText from '../GetText/GetText';
import MapDataText from './MapDataText';
import MapDataTextEn from './MapDataTextEn';

const MapData = ({ lang }) => {
    return (
        <div className={styles.getStarted}>
            <GetText text={lang === 'ko' ? MapDataText : MapDataTextEn} />
        </div>
    );
};

export default MapData;
