import styles from '../GetText/GetText.module.scss';

const MultiMapTextEn = (
    <div className={styles.getStartedText}>
        <div className={styles.title}>Multi Map</div>
        <div className={styles.miniTitle}>Through georeferencing, indoor maps can be displayed on outdoor maps within a single map.</div>
        <div className={styles.texts}>Georeferenced maps must always display outdoor maps.</div>
        <div className={styles.texts}>Ungeoreferenced maps cannot display outdoor and indoor maps simultaneously.</div>
        <div className={styles.texts}>You can think of "outdoor" as a building that exists at the same level as "indoor."</div>
        <div className={styles.texts}>
            Therefore, to switch the map from displaying "indoor" to "outdoor," you need to use addBuilding(outdoor_id) instead of
            changeFloor(outdoor_floor_id).
        </div>
        <pre>
            <code className={styles.code}>{`
mapOption = {
	enableGeoreferencing: false // It behaves the same as an un-georeferenced map.
}
        `}</code>
        </pre>
        <p>
            To use a georeferenced unified map, follow the steps below
            <br />
            1. Display the outdoor map.
            <br />
            1.1. If you input "floor" in the mapOption, the map will not be drawn.
            <br />
            1.2. If you do not input "floor," the outdoor map will be drawn.
            <br />
            2. Add buildings on top of the outdoor map.
            <br />
            3. The displayed buildings can be switched to different floors.
            <br />
            3.1. You cannot switch floors in buildings that are not drawn.
            <br />
            4. Remove the buildings drawn on the outdoor map.
        </p>
        <pre>
            <code className={styles.code}>{`
// When "floor" is not entered in the mapOption for a map with outdoor maps, the default floor will be the outdoor map, which is drawn first.
const map = await dabeeoMaps.showMap(mapContainer, mapOption, mapData); // 1. Display outdoor map
await map.context.addBuilding(buildingId, floorId); // 2. Add building
await map.context.changeFloor(floorId); // 3. Change building floor
map.context.removeBuilding(buildingId); // 4. Remove the drawn building
        `}</code>
        </pre>
        <p>
            To use an un-georeferenced unified map, follow the steps below
            <br />
            1. Display the outdoor map or the desired floor of the building.
            <br />
            1.1. If you input the desired floor ID of the desired building into mapOption as "floor," that floor will be drawn first.
            <br />
            1.2. If no floor is specified, the outdoor map will be drawn first.
            <br />
            2. To switch between buildings or outdoor maps, you can move to the desired building or floor using addBuilding <b>or</b> changeFloor.
            <br />
            2.1. When using addBuilding(buildingId, floorId), you can move to a specific floor of a specific building.
            <br />
            2.2. Without using addBuilding(), you can also move to floors of different buildings using changeFloor().
            <br />
            2.3. When moving to a building or outdoor map, the previously drawn building or outdoor map will be cleared.
        </p>
        <pre>
            <code className={styles.code}>{`
const mapOption = {
    floor: building1_floor1_id,
}
// If you do not specify the floor when there is an outdoor map, the default floor will be the outdoor map, which will be drawn first.
const map = await dabeeoMaps.showMap(mapContainer, mapOption, mapData); // 1. Displaying Building 1, Floor 1
await map.context.addBuilding(buildingId, floorId); // 2. Displaying a Different Floor of a Different Building (Removing Building 1)
await map.context.changeFloor(floorId) // 3. Moving to a Different Floor (Also Possible to Move to a Floor of a Different Building) 
        `}</code>
        </pre>
        <p>
            When displaying indoor maps on outdoor maps in a georeferenced unified map, the building mask object must be hidden.
            <br />
            This is necessary because the drawn building and the building mask object overlap, making the building invisible.
            <br />
            The building mask object returns the refBuildingId value when clicked. This value is the id of the corresponding building.
            <br />
            You can manage the building mask object using the following functions. You can find more details in the examples.
        </p>
        <pre>
            <code className={styles.code}>{`
// You can show all building masks belonging to a building.
map.context.showBuildingMaskByBuildingId(buildingId); 

// You can hide all building masks belonging to a building.
map.context.hideBuildingMaskByBuildingId(buildingId);  
        `}</code>
        </pre>
    </div>
);
export default MultiMapTextEn;