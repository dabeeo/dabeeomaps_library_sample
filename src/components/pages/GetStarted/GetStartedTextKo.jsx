import styles from '../GetText/GetText.module.scss';

const textKo = (
    <div className={styles.getStartedText}>
        <div className={styles.title}>Getting Started</div>
        <div className={styles.miniTitle}>1. 다비오맵스 API를 불러옵니다.</div>
        <div className={styles.miniTitle}>1.1 링크를 통하여 다비오맵스 API를 불러옵니다.</div>
        <div className={styles.texts}>
            * 다비오맵스 JS API의 공식 api 링크는{' '}
            <a href="https://dabeeomaps.com/" target="_blank">
                [다비오맵스 실내지도 플랫폼]
            </a>
            에서 확인할 수 있습니다.
            <br />
            <br />
        </div>
        <code className={styles.code}>{`<script type="text/javascript" src="[다비오맵스 공식 api 링크]" ></script>`}</code>
        <div className={styles.miniTitle}>1.2 npm install을 통하여 다비오맵스 API를 불러옵니다.</div>

        <div className={styles.texts}>
            * 다비오맵스 npm install example은 JS API의 공식 api 링크는{' '}
            <a href="https://github.com/dabeeo/dabeeomaps_library_boilerplate" target="_blank">
                [다비오맵스 실내지도 플랫폼 npm install boilerplate]
            </a>
            에서 확인할 수 있습니다.
            <br />
            <br />
        </div>
        <code className={styles.code}>{`import {Maps} from 'dabeeomaps';`}</code>
        <div className={styles.miniTitle}>2. 다비오맵스 플랫폼 서버에서 지도인증정보를 획득합니다.</div>
        <div className={styles.texts}>
            * API에서 지도를 불러오기 위해서는 해당 지도의 Client ID / Secret code를 알아야 합니다. 아래의 절차에 따라 정보를 확인하세요.
        </div>
        <p>
            1.{' '}
            <a href="https://dabeeomaps.com/" target="_blank">
                [다비오맵스 실내지도 플랫폼]
            </a>{' '}
            {`>`} 실내지도 {`>`} 지도관리 메뉴로 이동합니다.
            <br />
            2. 지도관리 목록에서 지도 정보를 클릭합니다.
            <br />
            3. 상세 지도 정보에서 인증접근 정보를 확인합니다.
            <br />
            4. 코드에 클라이언트아이디와 클라이언트시크릿을 입력합니다.
        </p>
        <div className={styles.texts}>맵 데이터를 불러오는 코드는 다음과 같습니다.</div>
        <pre>
            <code className={styles.code}>
                {`const dabeeoMaps = new dabeeo.Maps();

const mapData = await dabeeoMaps.getMapData({
    clientId: [불러올 지도의 clientId],
    clientSecret: [불러올 지도의 clientSecret]
});`}
            </code>
        </pre>
        <div className={styles.texts}>불러온 mapData를 기반으로 showMap을 호출합니다.</div>
        <pre>
            <code className={styles.code}>
                {`const mapContainer = document.getElementById("[지도를 불러올 태그 아이디]");            // 지도를 불러올 태그 정보<br />
const mapOption = Object.assign();                                                // 지도 옵션. 없을 경우 default 값들이 지정됩니다.<br />
const map = await dabeeoMaps.showMap(mapContainer, mapOption, mapData);     // 화면에 지도를 보여줍니다. 지도의 메소드를 사용하시고 싶으시면 변수에 담아 사용하시면 됩니다.`}
            </code>
        </pre>
        <div className={styles.texts}>맵 예제 다음과 같습니다.</div>
    </div>
);
export default textKo;
