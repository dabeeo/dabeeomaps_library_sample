import styles from './Header.module.scss';
import LOGOIMG from '../../imgs/logo.png';
import UNIONIMG from '../../imgs/Union.png';
import { useNavigate } from 'react-router';
import { useState } from 'react';


const Header = ({ lang, setLang }) => {
    const nav = useNavigate();
    const [toggle, setToggle] = useState(false);

    // function onLink() {
    //     nav('/example');
    // }

    function onToggleBtn(e) {
        if (e.target.innerHTML === 'KOR') {
            setLang('ko');
        } else {
            setLang('en');
        }
        setToggle(false);
    }

    return (
        <div className={styles.header}>
            <img src={LOGOIMG} className={styles.logo} alt='logo'></img>
            <div className={styles.documents}>
                <a className={styles.link} href='https://www.dabeeo.com/' target="_black">Home</a>
                <a className={styles.link} href="http://api-doc.dabeeomaps.com/" target="_blank" rel="noreferrer">
                    API Reference
                </a>
                <a className={styles.link} href="./examples" target="_blank">
                    Examples
                </a>
                <div className={styles.btn}>
                        <div className={styles.toggle}>
                            <div className={styles.toggleItem}>{ lang === 'ko' ? 'KOR' : 'ENG'}</div>
                            { toggle && 
                            <div className={styles.toggleBtn}>
                                <div className={styles.toggleItem} onClick={(e) => onToggleBtn(e)}>KOR</div>
                                <div className={styles.toggleItem} onClick={(e) => onToggleBtn(e)}>ENG</div>
                            </div>}
                        </div>
                    <img src={UNIONIMG} className={styles.union} alt='arrow' onClick={() => setToggle(!toggle)} />
                </div>
            </div>
        </div>
    );
};

export default Header;
