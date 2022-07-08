import styles from './Marker.module.scss';
import MarkerMap from './MarkerMap/MarkerMap';
import MarkerText from './MarkerText/MarkerText';
import MarkerTextEn from './MarkerText/MarkerTextEn';

const Marker = ({ lang, dabeeoMaps, mapData }) => {
    return (
        <div className={styles.marker}>
            { lang === 'ko' ? <MarkerText /> : <MarkerTextEn />}
            <MarkerMap dabeeoMaps={dabeeoMaps} mapData={mapData} />
        </div>
    )
}

export default Marker;