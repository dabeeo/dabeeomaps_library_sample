import styles from '../GetText/GetText.module.scss';

const GeoreferencingMapTextEn = (
    <div className={styles.getStartedText}>
        <div className={styles.title}>통합지도</div>
        <div className={styles.miniTitle}>통합지도의 정의</div>
        <div className={styles.textGroup}>
            <div className={styles.texts}>studio4 에서 georeferencing 된 지도는 실외지도 위에 실내지도를 표출할 수 있습니다.</div>
            <div className={styles.texts}>
                이를 위해 building 개념이 추가되었으며 지도는 여러개의 building으로 구성되며 하나의 building은 여러 층으로 구성되어 있습니다.
            </div>
            <div className={styles.texts}>실외지도 또한 하나의 building의 개념이며 실외지도의 buildingId 와 floorId는 mapId 입니다.</div>
            <div className={styles.texts}>georeferencing 한 지도에서는 실외지도가 기준이 됩니다. 따라서 실외지도위에 실내지도가 올라갑니다.</div>
            <div className={styles.texts}>
                mapOption의 enableGeoreferencing 값이 false 인경우, georeferencing 하지 않은 지도와 동일하게 동작합니다. (항상 하나의 층만 표출)
            </div>
            <pre>
                <code className={styles.code}>
                    {` 
const mapOption = {
    enableGeoreferencing: false // default 값: true
}
`}
                </code>
            </pre>
        </div>

        <div>
            <div className={styles.miniTitle}>georeferencing 된 지도</div>
            <div className={styles.textGroup}>
                <div className={styles.texts}>georeferencing 된 통합지도를 showMap 할 경우 outdoor 가 표출되며 층 지정이 불가능합니다.</div>

                <div className={styles.texts}>georeferencing 된 통합지도를 사용하기 위해서는 아래의 순서대로 이용합니다.</div>
                <div className={styles.texts}> 1. showMap을 통해 실외지도를 표출합니다.</div>
                <pre>
                    <code className={styles.code}>
                        {` 
const map = await dabeeoMaps.showMap(mapContaienr, mapOption, mapData)
`}
                    </code>
                </pre>
                <div className={styles.texts}> 2. changeFloor 혹은 addBuilding을 통해 실내지도를 추가, 층을 변경할 수 있습니다. (여러개 동시 가능)</div>
                <pre>
                    <code className={styles.code}>
                        {` 
await map.context.addBuilding(buildingId, floorId) 
await map.context.changeFloor(floorId)
`}
                    </code>
                </pre>
                <div className={styles.texts}> 3. removeBuilding을 통해 실외지도 위에 그려진 실내지도를 제거합니다.</div>
                <pre>
                    <code className={styles.code}>
                        {` 
map.context.removeBuilding(buildingId); // 실외지도 위에 그려져있는 특정 빌딩 제거
`}
                    </code>
                </pre>
            </div>
        </div>
        <div>
            <div className={styles.miniTitle}>enableGeoreferencing 옵션</div>
            <div className={styles.textGroup}>
                <div className={styles.texts}>georeferencing된 통합지도를 한번에 한 층씩 보여주고자 할 때 옵션을 false 로 지정합니다.</div>
            </div>
            <pre>
                <code className={styles.code}>
                    {` 
const mapOption = {
	enableGeoreferencing: false,
} 
`}
                </code>
            </pre>
            <div className={styles.textGroup}>
                <div className={styles.texts}>한번에 하나의 층만 표시할 수 있습니다.</div>
                <div className={styles.texts}>아래의 순서대로 사용합니다.</div>
                <div className={styles.texts}> 1. showMap을 통해 실외지도 혹은 원하는 층을 표출합니다.</div>
                <div className={styles.details}> 1.1. 실외지도가 있는 통합지도의 경우 defaultFloorId 는 실외지도의 floorId 입니다.</div>
                <pre>
                    <code className={styles.code}>
                        {` 
const mapOption ={
	floor: building1_floor1_id,
	enableGeoreferencing: false,
}

const map = await dabeeoMaps.showMap(mapContainer, mapOption, mapData); // 빌딩 1번의 1층 표출
`}
                    </code>
                </pre>
                <div className={styles.texts}> 2. 실외지도 혹은 실내지도(building) 간 switching을 위해서는 addBuilding 혹은 changeFloor 를 사용합니다.</div>
                <div className={styles.details}>
                    2.1. addBuilding(buildingId, floorId) 와 changeFloor(floorId) 를 사용해 특정 빌딩의 특정 층으로 이동할 수 있습니다.
                </div>
                <div className={styles.details}>2.2. changeFloor() 를 사용할 때 floorId 만 입력하여 사용할 수 있습니다.</div>
                <pre>
                    <code className={styles.code}>
                        {` 
await map.context.addBuilding(building2, building2_floor2_id); // building2 의 2번 층 표출
await map.context.changeFloor(building1_floor3_id); // 1번 빌딩의 floor3 표출
`}
                    </code>
                </pre>
            </div>
        </div>
        <div>
            <div className={styles.miniTitle}>georeferencing 된 지도를 사용할 때 buildingMask 제어 방법</div>
            <div className={styles.textGroup}>
                <div className={styles.texts}>
                    georeferencing 된 통합지도에서 실외지도 위에 실내지도를 표출할 때 겹치는 object를 buildingMask 로 지정해 관리할 수 있습니다.
                </div>
                <div className={styles.texts}>
                    buildin mask object 의 경우 오브젝트를 클릭했을 때 refBuildingId 값을 반환합니다. 이 값은 연결된 building의 id 입니다.
                </div>
                <div className={styles.texts}> building id를 통해 building mask 로 지정된 object와 poi 를 show, hide 할 수 있습니다.</div>
                <div className={styles.texts}> 하나의 building 에 대해서 building mask object는 여러개 일 수 있습니다.</div>
                <div className={styles.texts}> 아래의 함수들을 통해 building mask object 를 관리할 수 있습니다.</div>
                <pre>
                    <code className={styles.code}>
                        {` 
// building 에 속한 모든 building mask 를 show 시킬 수 있습니다.
map.context.showBuildingMaskByBuildingId(buildingId); 
// building 에 속한 모든 building mask 를 hide 시킬 수 있습니다.
map.context.hideBuildingMaskByBuildingId(buildingId); 
`}
                    </code>
                </pre>
            </div>
        </div>
    </div>
);

export default GeoreferencingMapTextEn;
