import styles from '../GetText/GetText.module.scss';

const ObjectsText = (
    <div className={styles.getStartedText}>
        <div className={styles.title}>오브젝트</div>
        <div className={styles.miniTitle}>지도에 그려진 오브젝트를 개별적으로 또는 전체를 한번에 컨트롤할 수 있습니다. </div>
        <p>
            objects의 메소드의 기능은 다음과 같습니다. <br />
            특정 오브젝트를 숨기거나 보이게 할 수 있습니다. 숨기거나 보이는 기능은 단순히 visibility를 수정하므로 성능에는 영향이 없습니다. <br />
            특정 오브젝트의 스타일을 바꾸거나 다시 되돌릴 수 있습니다. <br />
        </p>

        <div className={styles.texts}>지도의 모든 오브젝트, 또는 특정 오브젝트를 숨깁니다.</div>
        <pre>
            <code className={styles.code}>{`
map.objects.hide(); // 모든 object 를 지도에서 숨김.
map.objects.hide('OB-aN7fGeVoze1959'); // 단일 object 를 지도에서 숨김.
map.objects.hide(['OB-aN7fGeVoze1959', 'OB-mxanpdYA1T2410']); // 여러 object 를 지도에서 숨김.

`}</code>
        </pre>

        <div className={styles.texts}>
            <br />
            지도의 모든 오브젝트 또는 특정 오브젝트를 표출합니다.
        </div>
        <pre>
            <code className={styles.code}>{`
map.objects.show(); // 모든 object 를 지도에서 보여줌.
map.objects.show('OB-aN7fGeVoze1959'); // 단일 object 를 지도에서 보여줌.
map.objects.show(['OB-aN7fGeVoze1959', 'OB-mxanpdYA1T2410']); // 여러 object 를 지도에서 보여줌.
`}</code>
        </pre>

        <div className={styles.texts}>
            <br />
            특정 또는 모든 오브젝트의 스타일을 변경합니다.
        </div>
        <pre>
            <code className={styles.code}>
                {`
 const updateOption = {
    activeDest: true,
    color: "#00ffff",
    opacity: 0.3,
    isAnimate: true,
    duration: 1200,
    isRepeat: true,
    isYoyo: false,
    // id 를 지정하지 않으면 모든 object 의 스타일을 변경합니다.
    // ids: [
    //   'OB-aN7fGeVoze1959', // 플랫폼사업부 회의실
    //   'OB-mxanpdYA1T2410', // 남자화장실
    //   'PO-JQ4mw4YeT4536', // 여자화장실
    // ],
};
map.objects.set(updateOption);
`}
            </code>
        </pre>
        <div className={styles.texts}>
            <br />
            변경된 특정 또는 모든 오브젝트의 스타일을 되돌립니다.
        </div>
        <pre>
            <code className={styles.code}>
                {`
map.objects.reset('OB-mxanpdYA1T2410'); // 단일 오브젝트의 속성 해제
map.objects.reset(['OB-mxanpdYA1T2410', 'PO-JQ4mw4YeT4536']); // 여러 오브젝트의 속성 해제
map.objects.reset(); // 모든 오브젝트의 속성 해제 
`}
            </code>
        </pre>

        <div className={styles.texts}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    </div>
);

export default ObjectsText;
