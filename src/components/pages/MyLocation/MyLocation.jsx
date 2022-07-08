import styles from './MyLocation.module.scss';
import MyLocationMap from './MyLocationMap/MyLocationMap';
import MyLocationText from './MyLocationText/MyLocationText';
import MyLocationTextEn from './MyLocationText/MyLocationTextEn';

const MyLocation = ({ lang, dabeeoMaps, mapData }) => {
    return (
        <div className={styles.myLocation}>
            { lang === 'ko' ? <MyLocationText /> : <MyLocationTextEn /> }
            <MyLocationMap dabeeoMaps={dabeeoMaps} mapData={mapData} />
        </div>
    )
}

export default MyLocation;