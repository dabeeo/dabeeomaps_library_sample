import { useEffect, useState } from 'react';
import styles from './LayerGroupMap.module.scss';

const LayerGroupMap = ({ dabeeoMaps, mapData }) => {

    const [codeLists, setCodeLists] = useState([]);
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
            const codes = map.context.getLayerGroup().codes;
            const array = [];
            getCodes(codes, array);
            setCodeLists(array);
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

    function onHide() {
        const inputer = document.getElementById('layerInput');
        dabeeoMap.context.hideByCode(inputer.value);
    }

    function onShow() {
        const inputer = document.getElementById('layerInput');
        dabeeoMap.context.showByCode(inputer.value);
    }

    return (
        <div className={styles.layerGroupMap} id='viewport'>
            { codeLists.length > 0 
            && <select id='layerInput' className={styles.input}>
                {codeLists.map((code, i) => {
                    return <option value={code} key={i}>{code}</option>
                })}
            </select>
            }
            {/* <input id='layerInput' className={styles.input} type='text' placeholder='code' /> */}
            <div className={styles.hideBtn} onClick={onHide}>hide</div>
            <div className={styles.showBtn} onClick={onShow}>show</div>
        </div>
    )
}

export default LayerGroupMap;