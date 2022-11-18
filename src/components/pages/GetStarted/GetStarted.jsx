import { useEffect } from 'react';
import styles from './GetStarted.module.scss';
import GetStartedMap from './GetStartedMap/GetStartedMap';
import GetStartedText from './GetStartedText/GetStartedText';
import GetStartedTextEn from './GetStartedText/GetStartedTextEn';

const GetStarted = ({ lang, dabeeoMaps, mapData }) => {
    return (
        <div className={styles.getStarted}>
            {lang === 'ko' ? <GetStartedText /> : <GetStartedTextEn />}
            <GetStartedMap dabeeoMaps={dabeeoMaps} mapData={mapData} />
        </div>
    );
};

export default GetStarted;
