import { useEffect, useState } from 'react';
import styles from './DomTagMap.module.scss';

const DomTagMap = ({ dabeeoMaps, mapData}) => {

    const [dabeeoMap, setDabeeoMap] = useState();

    useEffect(() => {
        async function viewMap() {
            const mapContainer = document.getElementById('viewport');
            const mapOption = Object.assign({
                canvasSize: {
                    width: 800,
                    height: 300,
                }
            });
            const map = await dabeeoMaps.showMap(mapContainer, mapOption, mapData);
            setDabeeoMap(map);
        }
        viewMap();
    }, [mapData]);

    function onMarkerTag() {
        const tag = document.createElement('div'); 
        tag.style.width = '100%';
        tag.style.height = '100%';
        tag.style.backgroundColor = 'rgba(255, 255, 255, 1)'
        tag.textContent = 'marker Tag';

        dabeeoMap.markers.draw({
            marker: [
                {
                    position: { x: 3000, y: 1000, z: 400 }, 
                    tagInfo: {  
                        tag: tag,
                        width: 100,
                        height: 50,
                        pos: 'LEFT',
                        isResize: true,
                    }
                }
            ]
        });
    }

    function onPoiTag() {
        const tag = document.createElement('div'); // 지도상에 표시할 태그
        tag.style.width = '100%';
        tag.style.height = '100%';
        tag.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        tag.textContent = 'poi Tag';

        dabeeoMap.tag.addTag('poi', 'PO-NMvw3E0pe1690', tag , 300, 100, 'LEFT', true, 'FL-t4vqgyek3jnb8146');
    }

    function onDeleteAllTag() {
        dabeeoMap.markers.clear();
        dabeeoMap.tag.removeAllTag();
    }

    return (
        <div className={styles.domTagMap} id='viewport'>
            <div className={styles.poiTag} onClick={onPoiTag}>poi Tag</div>
            <div className={styles.markerTag} onClick={onMarkerTag}>marker Tag</div>
            <div className={styles.deleteMarkerTag} onClick={onDeleteAllTag}>delete All Tag</div>
        </div>
    )
}

export default DomTagMap;