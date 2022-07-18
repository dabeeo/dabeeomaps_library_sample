import styles from './MapContext.module.scss';
import MapContextMap from './MapContextMap/MapContextMap';
import MapContextText from './MapContextText/MapContextText';
import MapContextTextEn from './MapContextText/MapContextTextEn';

const MapContext = ({ lang, dabeeoMaps, mapData }) => {
    return (
        <div className={styles.MapContext}>
            { lang === 'ko' ? <MapContextText /> : <MapContextTextEn /> }
            <MapContextMap dabeeoMaps={dabeeoMaps} mapData={mapData}/>
        </div>
    )
}

export default MapContext;