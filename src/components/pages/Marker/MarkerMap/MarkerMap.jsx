import { useEffect, useState } from 'react';
import styles from './MarkerMap.module.scss';

const MarkerMap = ({ dabeeoMaps, mapData }) => {

    const [dabeeoMap, setDabeeoMap] = useState();

    useEffect(() => {
        async function viewMap() {
            const mapContainer = document.getElementById('viewport');
            const mapOption = Object.assign({
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
    }, []);

    function onShow() {
        const posList = document.getElementById('posList').childNodes;
        const x = Number(posList[0].value);
        const y = Number(posList[1].value);
        const z = Number(posList[2].value);

        posList.forEach((v) => {
            v.value = '';
        });
        dabeeoMap.markers.draw({
            marker: [
                {
                    position: { x: x ? x : 100, y: y ? y : 100, z: z ? z : 100 },
                    async: true,
                    isKeep: true,
                },
            ],
        })
    }

    function onHide() {
        dabeeoMap.markers.clear();
    }

    return(
        <div className={styles.markerMap} id='viewport'>
            <div className={styles.markerPos} id='posList'>
                <input type='text' placeholder='x'></input>
                <input type='text' placeholder='y'></input>
                <input type='text' placeholder='z'></input>
            </div>
            <div className={styles.showMarker} onClick={onShow}>show Marker</div>
            <div className={styles.hideMarker} onClick={onHide}>hide Marker</div>
        </div>
    )
}

export default MarkerMap;