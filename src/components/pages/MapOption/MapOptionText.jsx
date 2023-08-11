import styles from '../GetText/GetText.module.scss';
const MapOptionText = (
    <div className={styles.getStartedText}>
        <div className={styles.title}>지도 그리기</div>
        <div className={styles.miniTitle}>불러온 지도데이터를 이용하여 map을 그립니다.</div>
        <div className={styles.texts}>
            불러온 지도데이터를 이용하여 map을 그립니다. <br />
            넘겨줘야할 인자는
            <ul>
                <li>getMapData()를 통하여 받은 지도데이터, </li>
                <li>지도를 표출할 HTMLElement,</li>
                <li>지도를 그릴 때 사용할 옵션</li>
            </ul>
            입니다. <br />
            <br />
            <strong>
                [주의!] 인자로 지정한 HTML Element는 내부적으로 child로 지도를 표출할 canvas 속성이 추가되므로 child의 속성을 임의로 수정해서는 안됩니다.{' '}
            </strong>
            <br />
            <br />
            showMap()을 통해 그렸던 지도를 지우고 다시 그리고자 할 때는 새로운 showMap()을 호출하기 전에 반드시 메모리를 해제해줘야 합니다. <br />
            지도컨텍스트 가이드에 나와있듯이 map.context.cleanup()를 호출해야 지도그릴 때 사용되었던 메모리가 해제됩니다 .<br />
            옵션으로는 초기 줌값, 중심좌표 등이 있습니다. mapOption으로 주는 옵션의 예제는 아래에 있습니다. <br />
            자세한 사항은 API Reference를 참조바랍니다.
        </div>
        <pre>
            <code className={styles.code}>
                {`
const mapData = await dabeeoMaps.getMapData({
    clientId: "75hb8YSnAokb-sZ04aDR91",
    clientSecret: "0f7ad84f160c7b3fd1849a7920af718b"
});

// render a map
const mapContainer = document.getElementById('map');

// 옵션 전체는 API Reference를 참고하세요
let mapOption = {
  camera: '2d' | '3d',              // 초기 카메라 모드. default는 3d
  floor: string,                    // 적용할 층 정보. default는 지도 설정값
  theme: string,                    // 적용할 테마의 ID
  language: 'ko' | 'en',            // 초기 poi 언어 설정. default는 지도 설정값 
  showPoi: boolean,                 // map상에 poi 표출 여부. default는 true
  spriteEnable: boolean,            // Poi를 항상 정면으로 보이게 함. default는 true
  spriteKeepRotation: boolean,      // POI sprite로 그릴때 원래 각도 유지 여부. default는 false
  showWaterMarker: true,            // watermark(powered by Dabeeo) 표출 여부 default는 true
  waterMarkPosition: 'RIGHT_TOP',   // watermark 표출시 위치 설정 default는 'LEFT_BOTTOM'
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
    enableFloorMotion  : boolean             // 충변경시 애니메이션 활성화 여부 default는 false
};
const map = await dabeeoMaps.showMap(mapContainer, mapOption, mapData);
`}
            </code>
        </pre>
    </div>
);

export default MapOptionText;
