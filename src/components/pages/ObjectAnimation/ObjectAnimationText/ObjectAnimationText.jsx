import styles from './ObjectAnimationText.module.scss';

const ObjectAnimationText = () => {
    return (
        <div className={styles.objectAnimationText}>
            <div className={styles.title}>오브젝트 애니메이션 효과주기</div>
            <div className={styles.miniTitle}>dabeeMap.updateObjectStateByIds()를 활용하여 지도의 오브젝트에 애니메이션 효과를 줄 수 있습니다.</div>
            <p>
                dabeeo.updateObjectStateByIds(options)에 원하는 옵션을 지정하여 호출합니다<br />
                복수개의 오브젝트를 직접 지정하거나 연결된 poi를 지정하여 색상 옵션을 변경할 수 있습니다<br />
                설정 옵션들은 다음과 같습니다
            </p>
            <pre>
                <code className={styles.code}>
{`activeDest?: boolean;         
color?: string;                 // 오브젝트 색상
opacity?: number;               // 오브젝트 투명도
isAnimate?: boolean;            // animation 적용 여부
duration?: number;              // animation 주기
isRepeat?: boolean;             // animation 반복 여부
isYoyo?: boolean;               // animation 반복 형태, true로 할때 보다 자연스러운 효과가 연출됩니다
ids?: Array<string>;            // 애니메이션 효과를 주고자 하는 오브젝트의 아이디, 또는 연결된 poi의 아이디
`}
                </code>
            </pre>
            <div className={styles.texts}>실행 예제는 다음과 같습니다.</div>
        </div>
    )
}

export default ObjectAnimationText;