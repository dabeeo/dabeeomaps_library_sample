import styles from '../GetText/GetText.module.scss';

const PoisText = (
    <div className={styles.getStartedText}>
        <div className={styles.title}>Pois</div>
        <div className={styles.miniTitle}>지도에 그려진 Poi를 개별적으로 또는 전체를 한번에 컨트롤할 수 있습니다. </div>
        <p>
            pois의 메소드의 기능은 다음과 같습니다. <br />
            특정 poi를 숨기거나 보이게 할 수 있습니다. 숨기거나 보이는 기능은 단순히 visibility를 수정하므로 성능에는 영향이 없습니다. <br />
            특정 poi의 스타일을 바꾸거나 다시 되돌릴 수 있습니다. <br />
        </p>

        <div className={styles.texts}>지도의 모든 poi, 또는 특정 poi를 숨깁니다.</div>
        <pre>
            <code className={styles.code}>{`
map.pois.hide(); 
map.pois.hide('PO-BCMoiSGto0271');
map.pois.hide(['PO-123456', 'PO-5543432']);
              `}</code>
        </pre>

        <div className={styles.texts}>
            <br />
            지도의 모든 poi, 또는 특정 poi를 표출합니다.
        </div>
        <pre>
            <code className={styles.code}>{`
map.pois.show();
map.pois.show('PO-BCMoiSGto0271');
map.pois.show(['PO-123456', 'PO-5543432']);
              `}</code>
        </pre>

        <div className={styles.texts}>
            <br />
            특정 또는 모든 poi의 스타일을 변경합니다.
        </div>
        <pre>
            <code className={styles.code}>
                {`
const updateOption = {
    //id를 지정하지 않ㅇ면 모든 poi의 스타일을 변경합니다. 
    ids: ['PO-M02DvTVjp8449', 'PO-JQ4mw4YeT4536'],
    outerColor: 'black',
    innerColor: 'white',
    scale: 3
}
map.pois.set(updateOption); // updateOption에 넣은 ID에 해당하는 POI option이 변경됩니다.
`}
            </code>
        </pre>
        <div className={styles.texts}>
            <br />
            변경된 특정 또는 모든 poi의 스타일을 되돌립니다.
        </div>
        <pre>
            <code className={styles.code}>
                {`
map.pois.reset('PO-BCMoiSGto0271'); // 단일 poi 속성 해제
map.pois.reset(['PO-BCMoiSGto0271','PO-gy5U7uRVH9908'] ); // 여러 poi 속성 해제
map.pois.reset(); // 모든 poi들이 처음 옵션으로 초기화됩니다.
`}
            </code>
        </pre>

        <div className={styles.texts}>
            <br />
            현재 화면에 표출된 poi를 가져옵니다.
        </div>
        <pre>
            <code className={styles.code}>{`
const filterOptions = {
    // true일 경우 show 상태의 POI(visible=true), POI끼리 충돌되었을대 보여지는 POI(opcaity=0)들만 리턴됩니다. (default=false)
    isVisible: true,   
    sortOption:{
        // 주어진 center중심으로 부터 거리를 계산하여 sort합니다. 
        //center가 없으면(default는) 카메라의 position을 중심으로 거리를 계산합니다. 
        center: {x:1500,y:1000,z:0}, 

        // true라면 오름차순(ASC): 작은 값부터 큰 값 쪽으로의 순서, false라면 내림차순(DESC): 큰 값부터 작은 값 쪽으로의 순서로 sort합니다. (default=true) 
        byAsc: true 
    }
 }
 
 const pois = map.pois.getCurrentPois(filterOptions);
 
`}</code>
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

export default PoisText;
