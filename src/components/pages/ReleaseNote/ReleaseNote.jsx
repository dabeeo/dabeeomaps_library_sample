import styles from './ReleaseNote.module.scss';
import { releaseNoteData } from './releaseNoteData';
import ReleaseNoteItem from './ReleaseNoteItem';

const ReleaseNote = () => {
    return (
        <div className={styles.releaseNote}>
            <div className={styles.title}>Release Note</div>
            { releaseNoteData.map((release, i) => {
                return <ReleaseNoteItem key={i} item={release} />
            })}
        </div>
    )
}

export default ReleaseNote;