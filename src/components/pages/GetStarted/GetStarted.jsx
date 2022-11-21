import Code from '../../Code/Code';
import styles from '../GetText/GetText.module.scss';
import GetText from '../GetText/GetText';
import textKo from './GetStartedTextKo';
import textEn from './GetStartedTextEn';

const GetStarted = ({ lang }) => {
    return (
        <div className={styles.getStarted}>
            <GetText text={lang === 'ko' ? textKo : textEn} />
            <div className={styles.viewport}>
                <Code id="getStarted" />
            </div>
        </div>
    );
};

export default GetStarted;
