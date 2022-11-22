import styles from '../GetText/GetText.module.scss';
const MapOptionText = (
    <div className={styles.getStartedText}>
        <div className={styles.title}>map 옵션 설정</div>
        <div className={styles.miniTitle}>
            불러온 지도데이터를 이용하여 map을 그립니다. 이 때 옵션을 설정할 수 있습니다. 초기 줌값, 중심좌표 등이 여기에 해당합니다.
        </div>
        <div className={styles.texts}>mapOption은 다음과 같은 값을 입력받을 수 있습니다.</div>
        <div className={styles.texts}>자세한 사항은 API Reference를 참조바랍니다.</div>
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
  camera: '2d' | '3d',              // 초기 카메라 모드. default는 3d
  floor: string,                    // 적용할 층 정보. default는 지도 설정값
  theme: string,                    // 적용할 테마의 ID
  language: 'ko' | 'en',            // 초기 poi 언어 설정. default는 지도 설정값 
  showPoi: boolean,                 // map상에 poi 보여줄지 말지 결정 여부. default는 true
  spriteEnable: boolean,            // Poi를 항상 정면으로 보이게 함. 
  spriteKeepRotation: boolean,      // POI sprite로 그릴때 원래 각도 유지 여부
  showWaterMarker: true,            // watermark(powered by Dabeeo) 표출 여부 default는 true
  waterMarkPosition: 'RIGHT_TOP',   // watermark 표출시 위치 설정 'LEFT_TOP' | 'RIGHT_TOP' | 'LEFT_BOTTOM' | 'RIGHT_BOTTOM';
  controlOption: {
      zoom: number,                 //줌은 절대값임, zoom level을 의미합니다. 0~24까지 줄 수 있습니다. 
      pan: {                        //중심좌표, default는 지도 중심 
          x: number,
          y: number
      },
      rotate: 0,                    //회전 3d, 2d 모두 해당. default는 0 
      tilt: 0                       //기울기 3d에만 해당. default는 0 
  } ,
    mergeMesh: boolean,             // mergedMesh 활성화 여부 default는 false
    enableFloorMotion               // 충변경시 애니메이션 활성화 여부 default는 false
};
const map = await dabeeoMaps.showMap(mapContainer, mapOption, mapData);
`}
            </code>
        </pre>
    </div>
);

export default MapOptionText;
