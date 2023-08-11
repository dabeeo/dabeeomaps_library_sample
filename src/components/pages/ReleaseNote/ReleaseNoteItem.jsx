import styles from './ReleaseNoteItem.module.scss';
import ARROWIMG from '../../../imgs/arrow.png';
import { useState } from 'react';

const ReleaseNoteItem = ({ item }) => {
    const [toggle, setToggle] = useState(false);

    function onBtnClick(e) {
        if (toggle) {
            setToggle(false);
            e.target.style.transform = 'rotateZ(0deg)';
        } else {
            setToggle(true);
            e.target.style.transform = 'rotateZ(90deg)';
        }
    }

    return (
        <div className={styles.releaseNoteItem}>
            <div className={styles.title}>
                <img src={ARROWIMG} alt="arrow" className={styles.img} onClick={(e) => onBtnClick(e)}></img>
                <div>
                    <strong>{item.title}</strong>
                </div>
            </div>
            {toggle && (
                <ul className={styles.content}>
                    {item.content.map((content, i) => {
                        return <li key={i}>{content}</li>;
                    })}
                </ul>
            )}
        </div>
    );
};

export default ReleaseNoteItem;
