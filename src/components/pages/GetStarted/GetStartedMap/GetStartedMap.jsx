import { useEffect } from 'react';
import styles from './GetStartedMap.module.scss';

const GetStartedMap = ({ dabeeoMaps, mapData }) => {

    useEffect(() => {
        async function viewMap() {
            const mapContainer = document.getElementById('viewport');
            const mapOption = Object.assign({
                camera: '3d', 
                canvasSize: {
                    width: 800,
                    height: 300,
                },
                canvasFitTo: mapContainer,
                maxZoom: 700,
                minZoom: 50,
                theme: '5175',
            });
            await dabeeoMaps.showMap(mapContainer, mapOption, mapData);
        }
        viewMap();
    }, [mapData]);

    return (
        <div className={styles.viewport} id='viewport'></div>
    )
}

export default GetStartedMap;