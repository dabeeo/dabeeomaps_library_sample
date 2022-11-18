import { useEffect } from 'react';
import styles from './Navigation.module.scss';
import NavigationMap from './NavigationMap/NavigationMap';
import NavigationTextEn from './NavigationText/NavgationTextEn';
import NavigationText from './NavigationText/NavigationText';

const Navigation = ({ lang, dabeeoMaps, mapData }) => {
    return (
        <div className={styles.navigation}>
            {lang === 'ko' ? <NavigationText /> : <NavigationTextEn />}
            <NavigationMap dabeeoMaps={dabeeoMaps} mapData={mapData} />
        </div>
    );
};

export default Navigation;
