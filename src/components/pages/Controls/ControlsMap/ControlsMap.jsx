import { useEffect, useRef, useState } from 'react';
import styles from './ControlsMap.module.scss';

const ControlsMap = ({ dabeeoMaps, mapData }) => {

    const dimensionRef = useRef();
    const moveRef = useRef();
    const resetRef = useRef();
    const setRef = useRef();
    const zoomRef = useRef();
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
    }, [mapData]);

    function onSelectChange(e) {
        if (e.target.value === '1') {
            dimensionRef.current.style.display = 'block';
            moveRef.current.style.display = 'none';
            resetRef.current.style.display = 'none';
            setRef.current.style.display = 'none';
            zoomRef.current.style.display = 'none';
        }
        if (e.target.value === '2') {
            dimensionRef.current.style.display = 'none';
            moveRef.current.style.display = 'block';
            resetRef.current.style.display = 'none';
            setRef.current.style.display = 'none';
            zoomRef.current.style.display = 'none';
        }
        if (e.target.value === '3') {
            dimensionRef.current.style.display = 'none';
            moveRef.current.style.display = 'none';
            resetRef.current.style.display = 'block';
            setRef.current.style.display = 'none';
            zoomRef.current.style.display = 'none';
        }
        if (e.target.value === '4') {
            dimensionRef.current.style.display = 'none';
            moveRef.current.style.display = 'none';
            resetRef.current.style.display = 'none';
            setRef.current.style.display = 'block';
            zoomRef.current.style.display = 'none';
        }
        if (e.target.value === '5') {
            dimensionRef.current.style.display = 'none';
            moveRef.current.style.display = 'none';
            resetRef.current.style.display = 'none';
            setRef.current.style.display = 'none';
            zoomRef.current.style.display = 'block';
        }
    }

    function onDemension2D() {
        dabeeoMap.control.changeCamera('2D');
    }

    function onDemension3D() {
        dabeeoMap.control.changeCamera('3D');
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
        const zoom = document.querySelector('.zoom').value;
        const control = { rotation: Number(rotation), tilt: Number(tilt), zoom: Number(zoom) }
        dabeeoMap.control.set(control);

        document.querySelector('.rotation').value = '';
        document.querySelector('.tilt').value = '';
        document.querySelector('.zoom').value = '';
    }

    function changeZoom() {
        const changeZoom = document.querySelector('.changeZoom');
        dabeeoMap.control.changeZoom(Number(changeZoom.value));
        changeZoom.value = '';
    }

    function zoomIn() {
        dabeeoMap.control.zoomIn();
    }

    function zoomOut() {
        dabeeoMap.control.zoomOut();
    }

    return (
        <div className={styles.cameraControlMap} id='viewport'>
            <select className={styles.cameraSelect} onChange={onSelectChange}>
                <option value='1'>2D / 3D</option>
                <option value='2'>camera Move To</option>
                <option value='3'>camera Reset</option>
                <option value='4'>camera Set</option>
                <option value='5'>zoom</option>
            </select>
            <div className={styles.dimension} ref={dimensionRef}>
                <div className={styles.dimension2D} onClick={onDemension2D}>2D</div>
                <div className={styles.dimension3D} onClick={onDemension3D}>3D</div>
            </div>
            <div className={styles.moveToItem} ref={moveRef}>
                <input type='text' placeholder='x' className="moveToX"></input>
                <input type='text' placeholder='y' className='moveToY'></input>
                <div className={styles.moveToBtn} onClick={onMoveTo}>move To</div>
            </div>
            <div className={styles.reset} ref={resetRef} onClick={onReset}>reset</div>
            <div className={styles.cameraSet} ref={setRef}>
                <input type='text' placeholder='rotation' className='rotation'></input>
                <input type='text' placeholder='tilt' className='tilt'></input>
                <input type='text' placeholder='zoom' className='zoom'></input>
                <div className={styles.setBtn} onClick={onSet}>camera Set</div>
            </div>
            <div className={styles.zoomSet} ref={zoomRef}>
                <input type='text' placeholder ='changeZoom' className='changeZoom'></input>
                <div className={styles.changeZoomBtn} onClick={changeZoom}>changeZoom</div>
                <div className={styles.zoomIn} onClick={zoomIn}>zoom In</div>
                <div className={styles.zoomOut} onClick={zoomOut}>zoom Out</div>
            </div>
        </div>
    )
}

export default ControlsMap;