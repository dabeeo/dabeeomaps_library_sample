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
        <div></div>
        <pre>
            <code className={styles.code}>
                {`useEffect(() => {
    init();
  }, []);

  async function init() {
    const dabeeoMaps = new Maps();
    const mapData = await dabeeoMaps.getMapData({
      clientId: "client Id",
      clientSecret: "clientSecret",
    });
    const mapOption = {};
    const mapContainer = document.getElementById("map");
    const map = await dabeeoMaps.showMap(mapContainer, mapOption, mapData);
  }

  return (
    <div className="App">
      <div id = 'map'></div>
    </div>
  );
`}
            </code>
        </pre>
    </div>
);

export default ReactText;
