import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import menuList from './menuList';

const Menu = ({ lang }) => {
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
