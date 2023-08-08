import { useEffect } from 'react';
import styles from './Code.module.scss';
import { Maps } from 'dabeeomaps';
import { useState } from 'react';

const dabeeoMaps = new Maps();
const mapData = await dabeeoMaps.getMapData({
    clientId: '75hb8YSnAokb-sZ04aDR91',
    clientSecret: '0f7ad84f160c7b3fd1849a7920af718b',
});

const Code = ({ id }) => {
    console.log('code');
    console.log(id);

    const [dabeeoMap, setDabeeoMap] = useState(null);
    const [mapInfo, setMapInfo] = useState(null);

    useEffect(() => {
        if (id === 'react') {
            init();
        }
    }, [id]);

    async function init() {
        const mapOption = {};
        const mapContainer = document.querySelector('.map');
        const map = await dabeeoMaps.showMap(mapContainer, mapOption, mapData);

        setDabeeoMap(dabeeoMaps);
        setMapInfo(map);
    }

    async function addMap() {
        if (mapInfo === null) {
            const container = document.getElementById('mapContainer');
            const mapContainer = document.createElement('div');
            mapContainer.style.width = '100%';
            mapContainer.style.height = '100%';
            mapContainer.classList.add('map');
            container.appendChild(mapContainer);
            const mapData = await dabeeoMap.getMapData({
                clientId: '75hb8YSnAokb-sZ04aDR91',
                clientSecret: '0f7ad84f160c7b3fd1849a7920af718b',
            });
            const mapOption = {};
            const map = await dabeeoMap.showMap(mapContainer, mapOption, mapData);
            setMapInfo(map);
        }
    }

    function removeMap() {
        const mapContainer = document.querySelector('.map');
        mapInfo.context.cleanup();
        if (mapContainer) {
            mapContainer.parentNode.removeChild(mapContainer);
        }
        setMapInfo(null);
    }

    return (
        <div className={styles.code}>
            {id === 'react' ? (
                <div className={styles.map} id="mapContainer">
                    <div className={styles.btns}>
                        <div onClick={addMap}>addBtn</div>
                        <div onClick={removeMap}>removeBtn</div>
                    </div>
                    <div className="map" style={{ width: '100%', height: '100%' }}></div>
                </div>
            ) : (
                <div className={styles['iframe-container']}>
                    <iframe src={`https://dabeeo.github.io/dabeeomaps_library_sample/Examples/${id}/index.html`}></iframe>
                    <a
                        className={styles.viewCode}
                        href={`https://github.com/dabeeo/dabeeomaps_library_sample/blob/master/Examples/${id}/index.html`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        코드로 보기
                    </a>
                </div>
            )}
        </div>
    );
};
export default Code;
