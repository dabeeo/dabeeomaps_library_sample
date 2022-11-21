import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const Menu = ({ lang }) => {
    const menuList = [
        { id: 'getStarted', ko: '시작하기', en: 'Get Started' },
        { id: 'mapOption', ko: '지도 옵션', en: 'mapOptions' },
        { id: 'mapData', ko: '지도 데이터', en: 'mapData' },
        { id: 'mapContext', ko: '지도 컨텍스트 ', en: 'mapContext' },
        { id: 'pois', ko: 'Pois', en: 'Pois' },
        { id: 'objects', ko: 'Objects', en: 'Objects' },
        { id: 'controls', ko: '카메라', en: 'Controls' },
        { id: 'navigation', ko: '길찾기', en: 'Navigation' },
        { id: 'markers', ko: '마커', en: 'markers' },
        { id: 'myLocation', ko: '내위치 마커(GPS)', en: 'myLocation' },
        { id: 'domTag', ko: 'HTML Element', en: 'HTML Element' },
        { id: 'events', ko: '이벤트', en: 'Event' },
    ];

    return (
        <div className={styles.menu}>
            <div className={styles.title}>4.0 Tutorial</div>
            <ul className={styles.lists} id="lists">
                {menuList.map((menu) => (
                    <li key={menu.id}>
                        <NavLink className={styles.item} to={`${menu.id}`}>
                            {lang === 'ko' ? menu.ko : menu.en}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
