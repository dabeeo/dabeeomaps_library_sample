import { useEffect, useState } from 'react';
import styles from './DimensionMap.module.scss';

const DimensionMap = ({ dabeeoMaps, mapData }) => {

    const [dabeeoMap, setDabeeoMap] = useState();

    useEffect(() => {
        async function viewMap() {
            const mapContainer = document.getElementById('viewport');
            const mapOption = Object.assign({ 
                camera: '3d',
                canvasSize: {
                    width: 800,
                    height: 300,
                },
                canvasFitTo: mapContainer
            });
            const map = await dabeeoMaps.showMap(mapContainer, mapOption, mapData);
            setDabeeoMap(map);
        }
        viewMap();
    }, [mapData]);

    function onDemension2D() {
        dabeeoMap.control.changeCamera('2D');
    }

    function onDemension3D() {
        dabeeoMap.control.changeCamera('3D');
    }

    return (
        <div className={styles.dimensionMap} id='viewport'>
            <div className={styles.dimension2D} onClick={onDemension2D}>2D</div>
            <div className={styles.dimension3D} onClick={onDemension3D}>3D</div>
        </div>
    )
}

export default DimensionMap;