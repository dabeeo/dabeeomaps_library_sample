import CameraControlMap from "./CameraControlMap/CameraControlMap";
import CameraControlText from "./CameraControlText/CameraControlText";
import CameraControlTextEn from "./CameraControlText/CameraControlTextEn";

const CameraControl = ({ lang, dabeeoMaps, mapData }) => {
    return (
        <div>
            { lang === 'ko' ? <CameraControlText /> : <CameraControlTextEn />}
            <CameraControlMap dabeeoMaps={dabeeoMaps} mapData={mapData} />
        </div>
    )
}

export default CameraControl;