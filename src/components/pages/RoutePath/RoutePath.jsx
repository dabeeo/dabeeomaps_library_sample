import styles from './RoutePath.module.scss';
import RoutePathText from './RoutePathText/RoutePathText';

const RoutePath = () => {
    return (
        <div className={styles.routePath}>
            <RoutePathText />
        </div>
    )
}

export default RoutePath;