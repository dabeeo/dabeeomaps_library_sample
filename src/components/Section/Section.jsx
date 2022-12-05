import { Route, Routes } from 'react-router';
import GetText from '../pages/GetText/GetText';
import textKo from '../pages/GetStarted/GetStartedTextKo';
import textEn from '../pages/GetStarted/GetStartedTextEn';
import menuList from '../Menu/menuList';
import styles from './Section.module.scss';
import ReleaseNote from '../pages/ReleaseNote/ReleaseNote';

const Section = ({ lang }) => {
    console.log('section');
    console.log(menuList);
    return (
        <div className={styles.section}>
            <Routes>
                <Route path="/" element={<GetText code="getStarted" context={lang === 'ko' ? textKo : textEn} />} />
                {menuList.map((menu) => (
                    <Route key={menu.id} path={`/${menu.id}`} element={<GetText code={menu.code} context={lang === 'ko' ? menu.koPage : menu.enPage} />} />
                ))}
                <Route path='/releaseNote' element={<ReleaseNote />} />
            </Routes>
        </div>
    );
};

export default Section;
