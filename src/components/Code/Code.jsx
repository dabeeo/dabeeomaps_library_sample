import { useEffect } from 'react';
import styles from './Code.module.scss';
import { Maps } from 'dabeeomaps';
import { useState } from 'react';

const Code = ({ id }) => {
    console.log('code');
    console.log(id);

    const [dabeeoMap, setDabeeoMap] = useState(null);
    const [mapInfo, setMapInfo] = useState(null);

    useEffect(() => {
        if (id === 'react') {
            init();
        }
    }, []);

    async function init() {
        const dabeeoMaps = new Maps();
        const mapData = await dabeeoMaps.getMapData({
            clientId: '75hb8YSnAokb-sZ04aDR91',
            clientSecret: '0f7ad84f160c7b3fd1849a7920af718b',
        });
        const mapOption = {};
        const mapContainer = document.getElementById('map');
        const map = await dabeeoMaps.showMap(mapContainer, mapOption, mapData);

        setDabeeoMap(dabeeoMaps);
        setMapInfo(map);
    }

    return (
        <div className={styles.code}>
            {id === 'react' ? (
                <div id="map" className={styles.map}></div>
            ) : (
                <div className={styles['iframe-container']}>
                    <iframe src={`https://dabeeo.github.io/dabeeomaps_library_sample/Examples/${id}/index.html`}></iframe>
                    <a
                        className={styles.viewCode}
                        href={`https://github.com/dabeeo/dabeeomaps_library_sample/blob/master/Examples/${id}/index.html`}
                        target="_blank"
                    >
                        코드로 보기
                    </a>
                </div>
            )}
        </div>
    );
};
export default Code;
