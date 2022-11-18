import ControlsMap from './ControlsMap/ControlsMap';
import ControlsText from './ControlsText/ControlsText';
import ControlsTextEn from './ControlsText/ControlsTextEn';

const Controls = ({ lang, dabeeoMaps, mapData }) => {
    return (
        <div>
            {lang === 'ko' ? <ControlsText /> : <ControlsTextEn />}
            <ControlsMap dabeeoMaps={dabeeoMaps} mapData={mapData} />
        </div>
    );
};

export default Controls;
