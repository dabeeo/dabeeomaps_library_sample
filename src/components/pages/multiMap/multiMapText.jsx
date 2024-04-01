import styles from '../GetText/GetText.module.scss';

const MultiMapText = (
    <div className={styles.getStartedText}>
        <div className={styles.title}>통합지도</div>
        <div className={styles.miniTitle}>하나의 지도에서 georeferencing 을 통해 실외지도 위에 실내지도를 표출할 수 있습니다.</div>
        <div className={styles.texts}>georeferencing 한 지도는 항상 실외지도가 표출된 상태여야 합니다.</div>
        <div className={styles.texts}>georeferencing 하지 않은 지도는 실외지도와 실내지도를 동시에 표출할 수 없습니다.</div>
        <div className={styles.texts}>outdoor의 경우 indoor와 같은 레벨에 존재하는 building으로 생각하시면 좋습니다.</div>
        <div className={styles.texts}>
            따라서 indoor를 표출 중에 지도를 outdoor로 바꾸기 위해서는 changeFloor(outdoor_floor_id)가 아닌 addBuilding(outdoor_id)를 해야 합니다.
        </div>

        <pre>
            <code className={styles.code}>
                {`
mapOption = {
	enableGeoreferencing: false // georeferencing 하지 않은 지도와 동일하게 동작합니다.
}
                `}
            </code>
        </pre>
        <p>
            georeferencing 한 통합지도를 사용하기 위해서는 아래의 순서대로 이용합니다.
            <br />
            1. 실외지도를 표출합니다.
            <br />
            1.1. mapOption에 floor 로 빌딩의 층을 입력하면 지도가 그려지지 않습니다.
            <br />
            1.2. floor 를 입력하지 하지 않으면 실외지도가 그려집니다.
            <br />
            2. 실외지도 위에 빌딩을 추가합니다.
            <br />
            3. 표출된 빌딩은 다른 층으로 층변경할 수 있습니다.
            <br />
            3.1. 그려져있지 않은 빌딩에서 층변경할 수 없습니다.
            <br />
            4. 실외지도 위에 그려진 빌딩을 제거합니다.
        </p>
        <pre>
            <code className={styles.code}>{`
// 실외지도가 있는 지도에서 floor 를 입력하지 않으면 기본층은 실외지도로 가장 먼저 실외지도가 그려지게 됩니다.
const map = await dabeeoMaps.showMap(mapContainer, mapOption, mapData); // 1. 실외지도 표출
await map.context.addBuilding(buildingId, floorId); // 2. 빌딩 추가
await map.context.changeFloor(floorId); // 3. 빌딩 층 변경
map.context.removeBuilding(buildingId); // 4. 그렸던 빌딩 제거
            `}</code>
        </pre>
        <p>
            georeferencing 하지 않은 통합지도를 사용하기 위해서는 아래의 순서대로 이용합니다.
            <br />
            1. 실외지도 혹은 원하는 빌딩의 층을 표출합니다.
            <br />
            1.1. mapOption에 floor 로 원하는 빌딩의 원하는 층 id 를 넣으면 해당 층이 가장 먼저 그려집니다.
            <br />
            1.2. floor 를 입력하지 않으면 실외지도가 가장 먼저 그려지게 됩니다.
            <br />
            2. 빌딩 혹은 실외지도를 switching하기 위해 addBuilding <b>혹은</b> changeFloor 을 통해 원하는 빌딩, 층으로 이동할 수 있습니다.
            <br />
            2.1. addBuilding(buildingId, floorId) 으로 이동하는 경우는 특정 빌딩의 특정 층으로 이동할 수 있습니다.
            <br />
            2.2. addBuilding() 을 사용하지 않고 changeFloor() 를 통해 다른 빌딩의 층으로도 이동할 수 있습니다.
            <br />
            2.3. 빌딩 혹은 실외지도로 이동하게 되면 기존에 그려져있던 빌딩 혹은 실외지도는 지워집니다.
        </p>
        <pre>
            <code className={styles.code}>{`
const mapOption = {
	floor: building1_floor1_id,
}
// 실외지도가 있는 지도에서 floor 를 입력하지 않으면 기본층은 실외지도로 가장 먼저 실외지도가 그려지게 됩니다.
const map = await dabeeoMaps.showMap(mapContainer, mapOption, mapData); // 1. 1번 빌딩 1층 표출
await map.context.addBuilding(buildingId, floorId); // 2.1. 다른 빌딩의 다른 층 표출 (1번 빌딩 제거)
await map.context.changeFloor(floorId) // 2.2. 다른 층으로 이동 (다른 빌딩의 층으로도 가능)
            `}</code>
        </pre>
        <p>
            georeferencing 된 통합지도에서 실외지도에서 실내지도를 표출할 때에는 building mask object 를 hide 해야 합니다.
            <br />
            그려진 빌딩과 building mask object 가 겹쳐져 빌딩이 보이지 않기 때문에 building mask object 를 hide 시켜야 합니다.
            <br />
            building mask object 의 경우 오브젝트를 클릭했을 때 refBuildingId 값을 반환합니다. 이 값은 해당 빌딩의 id 입니다.
            <br />
            아래의 함수들을 통해 building mask object 를 관리할 수 있습니다.
            <br />
            자세한 것은 예제를 통해 확인할 수 있습니다.
        </p>
        <pre>
            <code className={styles.code}>{`
// building 에 속한 모든 building mask 를 show 시킬 수 있습니다.
map.context.showBuildingMaskByBuildingId(buildingId); 
// building 에 속한 모든 building mask 를 hide 시킬 수 있습니다.
map.context.hideBuildingMaskByBuildingId(buildingId); 
            `}</code>
        </pre>
    </div>
);

export default MultiMapText;
