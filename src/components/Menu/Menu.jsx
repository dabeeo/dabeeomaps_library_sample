import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import styles from './Menu.module.scss';

const Menu = ({ lang }) => {

    const nav = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const lists = document.querySelector('#lists');
        lists.childNodes.forEach((v) => {
            if ('/' + v.dataset.link === location.pathname) {
                v.style.backgroundColor = 'black';
                v.style.color = 'white';
            } else {
                v.style.backgroundColor = 'white';
                v.style.color = 'black';
            }
        });
    }, []);

    const onLink = (e) => {
        const lists = document.querySelector('#lists');
        lists.childNodes.forEach((v) => {
            v.style.backgroundColor = 'white';
            v.style.color = 'black';
        });
        e.currentTarget.style.backgroundColor = 'black';
        e.currentTarget.style.color = 'white';
        nav(e.currentTarget.dataset.link);
    }

    return(
        <div className={styles.menu}>
            <div className={styles.title}>4.0 Tutorial</div>
            <ul className={styles.lists} id='lists'>
                <li className={styles.listItem} style= {{ backgroundColor: 'black', color: 'white'}} data-link='' onClick={onLink}>{ lang === 'ko' ? '시작하기' : 'Get Started' }</li>
                <li className={styles.listItem} data-link='mapData' onClick={onLink}>{ lang === 'ko' ? '지도데이터' : 'mapData'}</li>
                <li className={styles.listItem} data-link='mapOption' onClick={onLink}>{ lang === 'ko' ? '지도 옵션 정보' : 'mapOptions'}</li>
                <li className={styles.listItem} data-link='mapContext' onClick={onLink}>Map Context</li>
                <li className={styles.listItem} data-link='Pois' onClick={onLink}>Pois</li>
                <li className={styles.listItem} data-link='Objects' onClick={onLink}>Objects</li>
                <li className={styles.listItem} data-link='Controls' onClick={onLink}>Controls</li>
                <li className={styles.listItem} data-link='navigation' onClick={onLink}>{ lang === 'ko' ? '길찾기' : 'Navigation'}</li>
                <li className={styles.listItem} data-link='marker' onClick={onLink}>{ lang === 'ko' ? '마커 표시하기' : 'setMarker'}</li>
                <li className={styles.listItem} data-link='mylocation' onClick={onLink}>{ lang === 'ko' ? '내 위치마커 표시하기' : 'myLocationOn'}</li>
                <li className={styles.listItem} data-link='domTag' onClick={onLink}>{ lang === 'ko' ? 'HTML Element 표시하기' : 'make HTML Element'}</li>
                <li className={styles.listItem} data-link='events' onClick={onLink}>Events</li>
            </ul>
        </div>
    )
}

export default Menu;