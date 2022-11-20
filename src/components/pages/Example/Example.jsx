import { NavLink, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import styles from './Example.module.scss';
import { useParams } from 'react-router';
const Code = () => {
    let { id } = useParams();
    id = id === undefined ? 'getStarted' : id;

    return (
        <div className={styles['iframe-container']}>
            <iframe src={`https://dabeeo.github.io/dabeeomaps_library_sample/Examples/${id}/index.html`}></iframe>
            <a className={styles.viewCode} href={`https://github.com/dabeeo/dabeeomaps_library_sample/blob/master/Examples/${id}/index.html`} target="_blank">
                코드로 보기
            </a>
        </div>
    );
};

const Example = () => {
    const exampleList = [
        'getStarted',
        'changeCamera',
        'changeFloor',
        'changeLanguage',
        'groupCode',
        'mapOption',
        'controls',
        'mapContext',
        'marker',
        'myLocation',
        'gpsTracking',
        'navigation',
        'tag',
    ];

    const [link, setLink] = useState('getStarted');
    console.log('example');

    return (
        <div className={styles.example}>
            <div className={styles.header}>DabeeoMaps Example</div>
            <div className={styles.body}>
                <ul id="lists" className={styles.lists}>
                    {exampleList.map((example) => (
                        <li key={example}>
                            <NavLink
                                className={styles.item}
                                to={`/examples/${example}`}
                                onClick={(e) => {
                                    setLink(e.target.value);
                                    console.log(e.target.value);
                                }}
                            >
                                {example}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <Routes>
                    <Route path="/" element={<Code></Code>} />
                    <Route path="/:id" element={<Code></Code>} />
                </Routes>
            </div>
        </div>
    );
};

export default Example;
