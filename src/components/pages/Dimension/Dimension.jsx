import DimensionMap from "./DimensionMap/DimensionMap";
import DimensionText from "./DimensionText/DimensionText";
import DimensionTextEn from "./DimensionText/DimensionTextEn";

const Dimension = ({ lang, dabeeoMaps, mapData }) => {
    return (
        <div>
            { lang === 'ko' ? <DimensionText /> : <DimensionTextEn />}
            <DimensionMap dabeeoMaps={dabeeoMaps} mapData={mapData} />
        </div>
    )
}

export default Dimension;