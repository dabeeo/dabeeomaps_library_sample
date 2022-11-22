import styles from './Header.module.scss';
import LOGOIMG from '../../imgs/logo.png';
import { useNavigate } from 'react-router';

const Header = ({ setLang }) => {
    const nav = useNavigate();

    // function onLink() {
    //     nav('/example');
    // }

    return (
        <div className={styles.header}>
            <img src={LOGOIMG} className={styles.logo}></img>
            <div className={styles.documents}>
                <a className={styles.link} href="./examples" target="_blank">
                    Examples
                </a>
                <a className={styles.link} href="http://api-doc.dabeeomaps.com/" target="_blank">
                    API Reference
                </a>
                <span className={styles.btn} onClick={() => setLang('en')}>
                    ENG
                </span>
                <span className={styles.btn} onClick={() => setLang('ko')}>
                    한글
                </span>
            </div>
        </div>
    );
};

export default Header;
