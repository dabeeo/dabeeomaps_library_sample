import { useEffect, useRef, useState } from 'react';
import styles from './CameraControlMap.module.scss';

const CameraControlMap = ({ dabeeoMaps, mapData }) => {

    const moveRef = useRef();
    const resetRef = useRef();
    const setRef = useRef();
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

    function onSelectChange(e) {
        if (e.target.value === '1') {
            moveRef.current.style.display = 'block';
            resetRef.current.style.display = 'none';
            setRef.current.style.display = 'none';
        }
        if (e.target.value === '2') {
            moveRef.current.style.display = 'none';
            resetRef.current.style.display = 'block';
            setRef.current.style.display = 'none';
        }
        if (e.target.value === '3') {
            moveRef.current.style.display = 'none';
            resetRef.current.style.display = 'none';
            setRef.current.style.display = 'block';
        }
    }

    function onMoveTo() {
        const moveToX = document.querySelector('.moveToX').value;
        const moveToY = document.querySelector('.moveToY').value;
        dabeeoMap.control.moveTo({x : Number(moveToX), y: Number(moveToY) });

        document.querySelector('.moveToX').value = '';
        document.querySelector('.moveToY').value = '';
    }

    function onReset() {
        dabeeoMap.control.reset();
    }

    function onSet() {
        const rotation = document.querySelector('.rotation').value;
        const tilt = document.querySelector('.tilt').value;
        const zoomLevel = document.querySelector('.zoomLevel').value;
        const control = { rotation: Number(rotation), tilt: Number(tilt), zoomLevel: Number(zoomLevel) }
        dabeeoMap.control.set(control);

        document.querySelector('.rotation').value = '';
        document.querySelector('.tilt').value = '';
        document.querySelector('.zoomLevel').value = '';
    }

    return (
        <div className={styles.cameraControlMap} id='viewport'>
            <select className={styles.cameraSelect} onChange={onSelectChange}>
                <option value='1'>camera Move To</option>
                <option value='2'>camera Reset</option>
                <option value='3'>camera Set</option>
            </select>
            <div className={styles.moveToItem} ref={moveRef}>
                <input type='text' placeholder='x' className="moveToX"></input>
                <input type='text' placeholder='y' className='moveToY'></input>
                <div className={styles.moveToBtn} onClick={onMoveTo}>move To</div>
            </div>
            <div className={styles.reset} ref={resetRef} onClick={onReset}>reset</div>
            <div className={styles.cameraSet} ref={setRef}>
                <input type='text' placeholder='rotation' className='rotation'></input>
                <input type='text' placeholder='tilt' className='tilt'></input>
                <input type='text' placeholder='zoomLevel' className='zoomLevel'></input>
                <div className={styles.setBtn} onClick={onSet}>camera Set</div>
            </div>
        </div>
    )
}

export default CameraControlMap;