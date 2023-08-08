import styles from '../GetText/GetText.module.scss';

const ReactText = (
    <div className={styles.getStartedText}>
        <div className={styles.title}>Using React</div>
        <div className={styles.miniTitle}>React에서 사용법은 다음과 같습니다.</div>
        <p className={styles.texts}>
            Maps 클래스 객체는 하나로 공유해서 사용가능합니다.
            <br />
            렌더링에 주의해서 사용하여 주세요.
            <br />
            showMap은 dabeeoMap의 정보와 api를 반환합니다.
            <br />
            dabeeoMap api를 사용하실려면 showMap으로 받아온 정보를 useState나 custom Hook으로 할당하여 사용하시면 됩니다.
            <br />
            <br />
            아래 soure link로 이동하시면 React 예제 source code를 확인하실 수 있습니다.
            <br />
            <a href="https://github.com/dabeeo/dabeeomaps-react-sample" target="_blank" rel="noreferrer">
                [React 예제 소스]
            </a>
            <br />
            해당 소스는 default로 library import 형식으로 되어있으며 원하실 경우 public의 index.html에서 cdn링크로 작업을 하실 수도 있습니다.
        </p>

        <br />
        <b className={styles.texts}>지도 데이터 생성시 주의점</b>
        <p className={styles.texts}>
            Maps 객체와 Map Data 객체는 프로젝트당 한개만 존재하여야합니다.
            <br />두 객체는 가비지 컬렉션에의해 해제되지 않으니 최상위 파일에서 한번만 생성하기를 권장합니다.
        </p>

        <pre>
            <code className={styles.code}>
                {`export const dabeeoMaps = new Maps();
export const mapData = await dabeeoMaps.getMapData({
  clientId: "client Id",
  clientSecret: "clientSecret",
});
`}
            </code>
        </pre>
        <div className={styles.texts}>지도를 생성 하실땐 다음과 같이 실행하시면 됩니다.</div>
        <pre>
            <code className={styles.code}>
                {`useEffect(() => {
    init();
  }, []);

  async function init() {
    const mapContainer = document.getElementById("map");
    const map = await dabeeoMaps.showMap(mapContainer, mapOption, mapData);
    setMapInfo(map);
  }

  return (
    <div className="App">
      <div id = 'map'></div>
    </div>
  );
`}
            </code>
        </pre>
        <div className={styles.texts}>삭제하실땐 다음과 같이 실행하시면 됩니다.</div>
        <div className={styles.texts}>gqu 메모리 사용을 초기화하기 위해 tag도 삭제를 하셔야합니다.</div>
        <pre>
            <code className={styles.code}>
                {`function removeMap() {
    const mapContainer = document.querySelector('.map');
    mapInfo.context.cleanup();
    if (mapContainer) {
        mapContainer.parentNode.removeChild(mapContainer);
    }
    setMapInfo(null);
}`}
            </code>
        </pre>
    </div>
);

export default ReactText;
