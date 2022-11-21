import Code from '../../Code/Code';
import styles from '../GetText/GetText.module.scss';
import GetText from '../GetText/GetText';
import ControlsText from './ControlsText';
import ControlsTextEn from './ControlsTextEn';

const Controls = ({ lang }) => {
    return (
        <div className={styles.getStarted}>
            <GetText text={lang === 'ko' ? ControlsText : ControlsTextEn} />
            <div className={styles.viewport}>
                <Code id="controls" />
            </div>
        </div>
    );
};

export default Controls;
