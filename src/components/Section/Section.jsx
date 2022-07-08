import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import CameraControl from '../pages/CameraControl/CameraControl';
import Dimension from '../pages/Dimension/Dimension';
import DomTag from '../pages/DomTag/DomTag';
import Events from '../pages/Events/Events';
import GetStarted from '../pages/GetStarted/GetStarted';
import LayerGroup from '../pages/LayerGroup/LayerGroup';
import MapOption from '../pages/MapOption/MapOption';
import Marker from '../pages/Marker/Marker';
import MyLocation from '../pages/MyLocation/MyLocation';
import Navigation from '../pages/Navigation/Navigation';
import ObjectAnimation from '../pages/ObjectAnimation/ObjectAnimation';
// import RoutePath from '../pages/RoutePath/RoutePath';
import styles from './Section.module.scss';

const Section = ({ lang, dabeeoMaps, mapData }) => {


    return (
        <div className={styles.section}>
            <Routes>
                <Route path='/' element={<GetStarted lang={lang} dabeeoMaps={dabeeoMaps} mapData={mapData} />} />
                <Route path='/mapOption' element={<MapOption lang={lang}/>} />
                <Route path='/dimension' element={<Dimension lang={lang} dabeeoMaps={dabeeoMaps} mapData={mapData}/>} />
                <Route path='/cameraControl' element={<CameraControl lang={lang} dabeeoMaps={dabeeoMaps} mapData={mapData} />} />
                <Route path='/navigation' element={<Navigation lang={lang} dabeeoMaps={dabeeoMaps} mapData={mapData}/>} />
                {/* <Route path='/routePath' element={<RoutePath lang={lang}/>} /> */}
                <Route path='/marker' element={<Marker lang={lang} dabeeoMaps={dabeeoMaps} mapData={mapData}/>} />
                <Route path='/mylocation' element={<MyLocation lang={lang} dabeeoMaps={dabeeoMaps} mapData={mapData}/>} />
                {/* <Route path='/objectAnimation' element={<ObjectAnimation lang={lang}/>} /> */}
                <Route path='/domTag' element={<DomTag lang={lang} dabeeoMaps={dabeeoMaps} mapData={mapData}/>} />
                <Route path='/layerGroup' element={<LayerGroup lang={lang} dabeeoMaps={dabeeoMaps} mapData={mapData}/>} />
                <Route path='/events' element={<Events lang={lang}/>} />
            </Routes>
        </div>
    )
}

export default Section;