import styles from './ReleaseNote.module.scss';
import { releaseNoteData } from './releaseNoteData';
import ReleaseNoteItem from './ReleaseNoteItem';

const ReleaseNote = () => {
    return (
        <div className={styles.releaseNote}>
            <div className={styles.title}>Release Note</div>
            <div className={styles.texts}>
                version은 minor version과 patch version으로 나뉘어져 있으며 minor version은 npm에 배포되는 보다 안정된 버전이며 patch version은 주기적으로 bug fix 및 기능 구성을
                위해 배포되는 버전입니다.
                <br />
            </div>
            <div className={styles.miniTitle}>
                Release History와 해당 CDN 링크는 아래 페이지에서 확인 가능합니다.
                <br />
                <br />
            </div>

            <a className={styles.title} href="https://dabeeo.notion.site/api4-library-release-note" target="_blank" rel="noreferrer">
                Release History
            </a>

            {/* {releaseNoteData.map((release, i) => {
                return <ReleaseNoteItem key={i} item={release} />;
            })} */}
        </div>
    );
};

export default ReleaseNote;
