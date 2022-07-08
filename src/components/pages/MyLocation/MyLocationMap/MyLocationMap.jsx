import { useEffect, useState } from 'react';
import styles from './MyLocationMap.module.scss';

const MyLocationMap = ({ dabeeoMaps, mapData }) => {

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

    function onShow() {
        const myLoacationId = document.getElementById('posList');
        const location = {
            x: myLoacationId.childNodes[0].value ? myLoacationId.childNodes[0].value : 1000, 
            y: myLoacationId.childNodes[1].value ? myLoacationId.childNodes[1].value : 1000, 
            z: myLoacationId.childNodes[2].value ? myLoacationId.childNodes[2].value : 100, 
            onActive: true, 
            // isKeep: true,
            // animate: true,
            animate: {
                color: "#00ff00",
                opacity: 0.4,
                desireScale: 4,
            },
        };

        myLoacationId.childNodes.forEach((v) => v.value = '');
        dabeeoMap.mylocation.draw(location);
    }

    function onHide() {
        dabeeoMap.mylocation.clear();
    }

    return (
        <div className={styles.myLocationMap} id='viewport'>
            <div className={styles.locationPos} id='posList'>
                <input type='text' placeholder='x'></input>
                <input type='text' placeholder='y'></input>
                <input type='text' placeholder='z'></input>
            </div>
            <div className={styles.showLocation} onClick={onShow}>show myLocation</div>
            <div className={styles.hideLocation} onClick={onHide}>hide myLocation</div>
        </div>
    )
}

export default MyLocationMap;