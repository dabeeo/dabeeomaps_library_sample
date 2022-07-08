import styles from './MapOption.module.scss';
import MapOptionText from './MapOptionText/MapOptionText';
import MapOptionTextEn from './MapOptionText/MapOptionTextEn';

const MapOption = ({ lang }) => {
    return (
        <div className={styles.mapOption}>
            { lang === 'ko' ? <MapOptionText /> : <MapOptionTextEn />}
        </div>
    )
}

export default MapOption;