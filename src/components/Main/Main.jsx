import { useEffect, useState } from 'react';
import Menu from '../Menu/Menu';
import Section from '../Section/Section';
import styles from './Main.module.scss';

const Main = ({ lang, dabeeoMaps }) => {
    const [mapData, setMapData] = useState();

    useEffect(() => {
        async function fetchData() {
            const map = await dabeeoMaps.getMapData({
                clientId: '75hb8YSnAokb-sZ04aDR91',
                clientSecret: '0f7ad84f160c7b3fd1849a7920af718b',
            });
            setMapData(map);
        }
        fetchData();
    }, []);

    return (
        <div className={styles.main}>
            <Menu lang={lang} />
            {mapData && <Section lang={lang} dabeeoMaps={dabeeoMaps} mapData={mapData} />}
        </div>
    );
};

export default Main;
