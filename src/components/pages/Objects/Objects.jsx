import Code from '../../Code/Code';
import styles from '../GetText/GetText.module.scss';
import GetText from '../GetText/GetText';
import ObjectsText from './ObjectsText';
import ObjectsTextEn from './ObjectsTextEn';

const Objects = ({ lang }) => {
    return (
        <div className={styles.getStarted}>
            <GetText text={lang === 'ko' ? ObjectsText : ObjectsTextEn} />
        </div>
    );
};

export default Objects;
