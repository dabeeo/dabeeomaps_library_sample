import styles from './MapOption.module.scss';
import MapOptionMap from './MapOptionMap/MapOptionMap';
import MapOptionText from './MapOptionText/MapOptionText';
import MapOptionTextEn from './MapOptionText/MapOptionTextEn';

const MapOption = ({ lang, dabeeoMaps, mapData }) => {
    return (
        <div className={styles.mapOption}>
            {lang === 'ko' ? <MapOptionText /> : <MapOptionTextEn />}
            <MapOptionMap dabeeoMaps={dabeeoMaps} mapData={mapData} />
        </div>
    );
};

export default MapOption;
