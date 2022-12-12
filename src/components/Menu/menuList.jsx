import PoisText from '../pages/Pois/PoisText';
import PoisTextEn from '../pages/Pois/PoisTextEn';
import ObjectsText from '../pages/Objects/ObjectsText';
import ObjectsTextEn from '../pages/Objects/ObjectsTextEn';
import NavigationTextEn from '../pages/Navigation/NavigationTextEn';
import NavigationText from '../pages/Navigation/NavigationText';
import MyLocationText from '../pages/MyLocation/MyLocationText';
import MyLocationTextEn from '../pages/MyLocation/MyLocationTextEn';
import MapOptionText from '../pages/MapOption/MapOptionText';
import MapOptionTextEn from '../pages/MapOption/MapOptionTextEn';
import MapDataText from '../pages/MapData/MapDataText';
import MapDataTextEn from '../pages/MapData/MapDataTextEn';
import MapContextText from '../pages/MapContext/MapContextText';
import MapContextTextEn from '../pages/MapContext/MapContextTextEn';
import DomTagText from '../pages/DomTag/DomTagText';
import DomTagTextEn from '../pages/DomTag/DomTagTextEn';
import ControlsText from '../pages/Controls/ControlsText';
import ControlsTextEn from '../pages/Controls/ControlsTextEn';
import textKo from '../pages/GetStarted/GetStartedTextKo';
import textEn from '../pages/GetStarted/GetStartedTextEn';
import MarkerText from '../pages/Marker/MarkerText';
import MarkerTextEn from '../pages/Marker/MarkerTextEn';
import HeatMapText from '../pages/HeatMap/HeatMapText';
import { GeoJsonText } from '../pages/GeoJson/GeoJsonText';
import { ModelText } from '../pages/Model/ModelText';
import Events from '../pages/Events/Events';

const menuList = [
    { id: 'getStarted', ko: '시작하기', en: 'Get Started', code: 'getStarted', koPage: textKo, enPage: textEn },
    { id: 'mapData', ko: '지도 데이터', en: 'mapData', code: 'mapData', koPage: MapDataText, enPage: MapDataTextEn },
    { id: 'mapOption', ko: '지도 그리기', en: 'mapOptions', code: 'mapOption', koPage: MapOptionText, enPage: MapOptionTextEn },
    { id: 'mapContext', ko: '지도 컨텍스트 ', en: 'mapContext', code: 'mapContext', koPage: MapContextText, enPage: MapContextTextEn },
    { id: 'pois', ko: 'Pois', en: 'Pois', code: 'pois', koPage: PoisText, enPage: PoisTextEn },
    { id: 'objects', ko: 'Objects', en: 'Objects', code: 'objects', koPage: ObjectsText, enPage: ObjectsTextEn },
    { id: 'controls', ko: '카메라', en: 'Controls', code: 'controls', koPage: ControlsText, enPage: ControlsTextEn },
    { id: 'navigation', ko: '길찾기', en: 'Navigation', code: 'navigation', koPage: NavigationText, enPage: NavigationTextEn },
    { id: 'markers', ko: '마커', en: 'markers', code: 'marker', koPage: MarkerText, enPage: MarkerTextEn },
    { id: 'myLocation', ko: '내위치 마커(GPS)', en: 'myLocation', code: 'myLocation', koPage: MyLocationText, enPage: MyLocationTextEn },
    { id: 'domTag', ko: 'HTML Element', en: 'HTML Element', code: 'tag', koPage: DomTagText, enPage: DomTagTextEn },
    { id: 'heatmap', ko: 'Heatmap 올리기', en: 'Heatmap', code: 'heatmap', koPage: HeatMapText, enPage: HeatMapText },
    { id: 'geoJson', ko: 'GeoJson 올리기', en: 'Geojson', code: 'geojson', koPage: GeoJsonText, enPage: GeoJsonText },
    { id: 'model', ko: '3dModel 올리기', en: '3d model', code: 'models', koPage: ModelText, enPage: ModelText },
    { id: 'events', ko: '이벤트', en: 'Event', code: '', koPage: Events, enPage: Events },
];

export default menuList;
