import styles from './ObjectAnimation.module.scss';
import ObjectAnimationText from './ObjectAnimationText/ObjectAnimationText';

const ObjectAnimation = () => {
    return (
        <div className={styles.objectAnimation}>
            <ObjectAnimationText />
        </div>
    )
}

export default ObjectAnimation;