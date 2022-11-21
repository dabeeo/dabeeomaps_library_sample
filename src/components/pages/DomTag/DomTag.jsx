import Code from '../../Code/Code';
import styles from '../GetText/GetText.module.scss';
import GetText from '../GetText/GetText';
import DomTagText from './DomTagText';
import DomTagTextEn from './DomTagTextEn';

const DomTag = ({ lang }) => {
    return (
        <div className={styles.getStarted}>
            <GetText text={lang === 'ko' ? DomTagText : DomTagTextEn} />
            <div className={styles.viewport}>
                <Code id="tag" />
            </div>
        </div>
    );
};

export default DomTag;
