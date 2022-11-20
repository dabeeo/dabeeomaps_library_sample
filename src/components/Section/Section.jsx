import { Route, Routes } from 'react-router';
import Controls from '../pages/Controls/Controls';
import DomTag from '../pages/DomTag/DomTag';
import Events from '../pages/Events/Events';
import GetStarted from '../pages/GetStarted/GetStarted';
import MapContext from '../pages/MapContext/MapContext';
import Pois from '../pages/Pois/Pois';
import Objects from '../pages/Objects/Objects';
import MapData from '../pages/MapData/MapData';
import MapOption from '../pages/MapOption/MapOption';
import Marker from '../pages/Marker/Marker';
import MyLocation from '../pages/MyLocation/MyLocation';
import Navigation from '../pages/Navigation/Navigation';
import styles from './Section.module.scss';

const Section = ({ lang, dabeeoMaps, mapData }) => {
    console.log('section');
    return (
        <div className={styles.section}>
            <Routes>
                <Route path="/" element={<GetStarted lang={lang} dabeeoMaps={dabeeoMaps} mapData={mapData} />} />
                <Route path="/mapOption" element={<MapOption lang={lang} />} />
                <Route path="/mapData" element={<MapData lang={lang} dabeeoMaps={dabeeoMaps} mapData={mapData} />} />
                <Route path="/mapContext" element={<MapContext lang={lang} dabeeoMaps={dabeeoMaps} mapData={mapData} />} />
                <Route path="/Pois" element={<Pois lang={lang} dabeeoMaps={dabeeoMaps} mapData={mapData} />} />
                <Route path="/Objects" element={<Objects lang={lang} dabeeoMaps={dabeeoMaps} mapData={mapData} />} />
                <Route path="/Controls" element={<Controls lang={lang} dabeeoMaps={dabeeoMaps} mapData={mapData} />} />
                <Route path="/navigation" element={<Navigation lang={lang} dabeeoMaps={dabeeoMaps} mapData={mapData} />} />
                <Route path="/marker" element={<Marker lang={lang} dabeeoMaps={dabeeoMaps} mapData={mapData} />} />
                <Route path="/mylocation" element={<MyLocation lang={lang} dabeeoMaps={dabeeoMaps} mapData={mapData} />} />
                <Route path="/domTag" element={<DomTag lang={lang} dabeeoMaps={dabeeoMaps} mapData={mapData} />} />
                <Route path="/events" element={<Events lang={lang} />} />
            </Routes>
        </div>
    );
};

export default Section;
