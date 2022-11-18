import styles from './MapData.module.scss';
import MapDataMap from './MapDataMap/MapDataMap';
import MapDataText from './MapDataText/MapDataText';
import MapDataTextEn from './MapDataText/MapDataTextEn';

const MapData = ({ lang, dabeeoMaps, mapData }) => {
    return <div className={styles.MapData}>{lang === 'ko' ? <MapDataText /> : <MapDataTextEn />}</div>;
};

export default MapData;
