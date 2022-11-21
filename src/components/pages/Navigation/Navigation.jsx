import Code from '../../Code/Code';
import styles from '../GetText/GetText.module.scss';
import GetText from '../GetText/GetText';
import NavigationTextEn from './NavgationTextEn';
import NavigationText from './NavigationText';

const Navigation = ({ lang }) => {
    return (
        <div className={styles.getStarted}>
            <GetText text={lang === 'ko' ? NavigationText : NavigationTextEn} />
            <div className={styles.viewport}>
                <Code id="navigation" />
            </div>
        </div>
    );
};

export default Navigation;
