import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Example.module.scss';
import Code from '../Code/Code';
const Example = () => {
    const exampleList = [
        'getStarted',
        'changeCamera',
        'changeFloor',
        'changeFloorAnimation',
        'changeLanguage',
        'groupCode',
        'mapOption',
        'objects',
        'pois',
        'controls',
        'focus',
        'mapContext',
        'marker',
        'myLocation',
        'gpsTracking',
        'navigation',
        'tag',
        'multiMap_GeoOn',
        'multiMap_GeoOff',
        'multiMap_BuildingMask',
        'heatmap',
        'models',
        'geojson',
        'models_video_ver',
        'modelKbg',
        'tiling',
        'tts',
    ];

    const location = useLocation();
    const [id, setId] = useState(location.pathname.split('/')[2] || 'getStarted');
    console.log('Example ', id);

    return (
        <div className={styles.example}>
            <div className={styles.header}>DabeeoMaps Example</div>
            <div className={styles.body}>
                <div id="lists" className={styles.lists}>
                    {exampleList.map((example, i) => (
                        <div key={example}>
                            <NavLink
                                className={styles.item}
                                to={`/examples/${example}`}
                                onClick={(e) => {
                                    setId(example);
                                    console.log('click ', e.target.value);
                                }}
                            >
                                {example}
                            </NavLink>
                        </div>
                    ))}
                </div>
                <div className={styles.code}>
                    <Routes>
                        <Route path="/" element={<Code id={id}></Code>} />
                        <Route path="/:id" element={<Code id={id}></Code>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Example;
