import { useEffect, useState } from 'react';
import styles from './MapContextMap.module.scss';

const LayerGroupMap = ({ dabeeoMaps, mapData }) => {

    const [floorLists, setFloorLists] = useState([]);
    const [poiLists, setPoiLists] = useState([]);
    const [codeLists, setCodeLists] = useState([]);
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
            const codes = map.context.getLayerGroup().codes;
            const array = [];
            getCodes(codes, array);
            setCodeLists(array);

            const floorList = [];
            const poiList = [];
            mapData.payload.floors.forEach((floor) => {
                floorList.push(floor.id);
        
                floor.pois.forEach((poi) => {
                    poiList.push(poi.id);
                });
            });

            setFloorLists([...floorList]);
            setPoiLists([...poiList]);
        }
        viewMap();
    }, []);

    function getCodes(list, array) {
        list.forEach((v) => {
            array.push(v.code);

            if (v.child.length > 0) {
                getCodes(v.child, array);
            }
        });
    }

    function onChangeFloor() {
        const inputer = document.getElementById('floorInput');
        dabeeoMap.context.changeFloor(inputer.value);
    }

    function onHide() {
        const inputer = document.getElementById('poiInput');
        dabeeoMap.context.hide(inputer.value);
    }

    function onShow() {
        const inputer = document.getElementById('poiInput');
        dabeeoMap.context.show(inputer.value);
    }

    function onHideByCode() {
        const inputer = document.getElementById('layerInput');
        dabeeoMap.context.hideByCode(inputer.value);
    }

    function onShowByCode() {
        const inputer = document.getElementById('layerInput');
        dabeeoMap.context.showByCode(inputer.value);
    }



    function onChange(e) {
        if (e.target.value === '1') {
            document.getElementById('floorContainer').style.display = 'block';
            document.getElementById('poiContainer').style.display = 'none';
            document.getElementById('codeContainer').style.display = 'none';
        }
        if (e.target.value === '2') {
            document.getElementById('floorContainer').style.display = 'none';
            document.getElementById('poiContainer').style.display = 'block';
            document.getElementById('codeContainer').style.display = 'none';
        }
        if (e.target.value === '3') {
            document.getElementById('floorContainer').style.display = 'none';
            document.getElementById('poiContainer').style.display = 'none';
            document.getElementById('codeContainer').style.display = 'block';
        }
    }

    function onCleanUp() {
        dabeeoMap.context.cleanup();
    }

    return (
        <div className={styles.layerGroupMap} id='viewport' onChange={onChange}>
            <select className={styles.contextSelector}>
                <option value="1">changeFloor</option>
                <option value="2">display</option>
                <option value="3">GroupCode</option>
            </select>
            <div id='floorContainer'>
                {floorLists.length > 0 
                && <select id='floorInput' className={styles.input}>
                    {floorLists.map((floor, i) => {
                        return <option value={floor} key={i}>{floor}</option>
                    })}
                    </select>}
                <div className={styles.hideBtn} onClick={onChangeFloor}>change Floor</div>
            </div>
            <div id='poiContainer' style={{display: 'none'}}>
                {poiLists.length > 0 
                && <select id='poiInput' className={styles.input}>
                    {poiLists.map((poi, i) => {
                        return <option value={poi} key={i}>{poi}</option>
                    })}
                    </select>}
                <div className={styles.hideBtn} onClick={onHide}>hide</div>
                <div className={styles.showBtn} onClick={onShow}>show</div>
            </div>
            <div className={styles.codeContainer} id='codeContainer' style={{display: 'none'}}>
                { codeLists.length > 0 
                && <select id='layerInput' className={styles.input}>
                    {codeLists.map((code, i) => {
                        return <option value={code} key={i}>{code}</option>
                    })}
                </select>
                }
                <div className={styles.hideBtn} onClick={onHideByCode}>hide</div>
                <div className={styles.showBtn} onClick={onShowByCode}>show</div>
            </div>
            <div className={styles.cleanup} onClick={onCleanUp}>cleanup</div>
        </div>
    )
}

export default LayerGroupMap;