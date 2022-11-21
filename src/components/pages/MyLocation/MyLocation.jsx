import Code from '../../Code/Code';
import styles from '../GetText/GetText.module.scss';
import GetText from '../GetText/GetText';
import MyLocationText from './MyLocationText';
import MyLocationTextEn from './MyLocationTextEn';

const MyLocation = ({ lang }) => {
    return (
        <div className={styles.getStarted}>
            <GetText text={lang === 'ko' ? MyLocationText : MyLocationTextEn} />
            <div className={styles.viewport}>
                <Code id="myLocation" />
            </div>
        </div>
    );
};

export default MyLocation;
