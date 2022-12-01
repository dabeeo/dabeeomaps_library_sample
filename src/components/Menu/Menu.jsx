import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import menuList from './menuList';

const Menu = ({ lang }) => {
    return (
        <div className={styles.menu}>
            <div className={styles.title}>4.0 Tutorial</div>
            <div className={styles.lists} id="lists">
                {menuList.map((menu, i) => (
                    <NavLink className={styles.item} to={`${menu.id}`} key={i}>
                        <div key={menu.id} className={styles.list}>
                        {lang === 'ko' ? menu.ko : menu.en}
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Menu;
