import styles from '../GetText/GetText.module.scss';
const MapOptionText = (
    <div className={styles.getStartedText}>
        <div className={styles.title}>map Options</div>
        <div className={styles.miniTitle}>map을 그릴때 옵션을 추가해 지도의 상태를 조정할 수 있습니다.</div>
        <div className={styles.texts}>mapOption은 다음과 같은 값을 입력받을 수 있습니다.</div>
        <div className={styles.texts}>자세한 사항은 document를 참조바랍니다.</div>
        <pre>
            <code className={styles.code}>
                {`
const mapData = await dabeeoMaps.getMapData({
    clientId: "75hb8YSnAokb-sZ04aDR91",
    clientSecret: "0f7ad84f160c7b3fd1849a7920af718b"
});

// render a map
const mapContainer = document.getElementById('map');

let mapOption = {
  camera: '2d' | '3d',              // 초기 카메라 모드 3d
  floor: string,                    // 적용할 층 정보
  theme: string,                    // 적용할 테마의 ID
  language: 'ko' | 'en',            // 초기 poi 언어 설정 
  showPoi: boolean,                 // map상에 poi 보여줄지 말지 결정 여부. default는 true
  spriteEnable: boolean,            // Poi를 항상 정면으로 보이게 함. 
  spriteKeepRotation: boolean,      // POI sprite로 그릴때 원래 각도 유지 여부
  showWaterMarker: true,            // watermark 표출 여부 default는 true
  waterMarkPosition: 'RIGHT_TOP',   // watermark 표출시 위치 설정 'LEFT_TOP' | 'RIGHT_TOP' | 'LEFT_BOTTOM' | 'RIGHT_BOTTOM';
  controlOption: {
      zoom: number,                 //줌은 절대값으로, zoom level을 의미합니다. 0~24까지 줄 수 있습니다. 
      pan: {                        //중심좌표 
          x: number,
          y: number
      },
      rotate: 0,                    //회전 3d, 2d
      tilt: 0                       //기울기 3d
  } ,
    mergeMesh: boolean,             // mergedMesh 활성화 여부
};
const map = await dabeeoMaps.showMap(mapContainer, mapOption, mapData);
`}
            </code>
        </pre>
    </div>
);

export default MapOptionText;