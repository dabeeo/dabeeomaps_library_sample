import styles from './LayerGroup.module.scss';
import LayerGroupMap from './LayerGroupMap/LayerGroupMap';
import LayerGroupText from './LayerGroupText/LayerGroupText';
import LayerGroupTextEn from './LayerGroupText/LayerGroupTextEn';

const LayerGroup = ({ lang, dabeeoMaps, mapData }) => {
    return (
        <div className={styles.layerGroup}>
            { lang === 'ko' ? <LayerGroupText /> : <LayerGroupTextEn /> }
            <LayerGroupMap dabeeoMaps={dabeeoMaps} mapData={mapData}/>
        </div>
    )
}

export default LayerGroup;