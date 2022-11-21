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
import menuList from '../Menu/menuList.json';

const Section = ({ lang, dabeeoMaps, mapData }) => {
    console.log('section');
    return (
        <div className={styles.section}>
            <Routes>
                <Route path="/" element={<GetStarted lang={lang} />} />
                <Route path="/getStarted" element={<GetStarted lang={lang} />} />
                <Route path="/mapOption" element={<MapOption lang={lang} />} />
                <Route path="/mapData" element={<MapData lang={lang} />} />
                <Route path="/mapContext" element={<MapContext lang={lang} />} />
                <Route path="/pois" element={<Pois lang={lang} />} />
                <Route path="/objects" element={<Objects lang={lang} />} />
                <Route path="/controls" element={<Controls lang={lang} />} />
                <Route path="/navigation" element={<Navigation lang={lang} />} />
                <Route path="/markers" element={<Marker lang={lang} />} />
                <Route path="/mylocation" element={<MyLocation lang={lang} />} />
                <Route path="/domTag" element={<DomTag lang={lang} />} />
                <Route path="/events" element={<Events lang={lang} />} />
            </Routes>
        </div>
    );
};

export default Section;
