import styles from '../GetText/GetText.module.scss';

const textKo = (
    <div className={styles.getStartedText}>
        <div className={styles.title}>Getting Started</div>
        <div className={styles.miniTitle}>1. 다비오맵스 플랫폼 서버에서 지도인증정보를 획득합니다.</div>
        <div className={styles.texts}>
            * API에서 지도를 불러오기 위해서는 해당 지도의 Client ID / Secret code를 알아야 합니다. 아래의 절차에 따라 정보를 확인하세요.
        </div>
        <p>
            1.
            <a href="https://dabeeomaps.com/" target="_blank">
                [다비오맵스 실내지도 플랫폼]
            </a>
            {`>`} 실내지도 {`>`} 지도관리 메뉴로 이동합니다.
            <br />
            2. 지도관리 목록에서 지도 정보를 클릭합니다.
            <br />
            3. 상세 지도 정보에서 인증접근 정보에 클라이언트아이디와 클라이언트시크릿이 있습니다.
        </p>
        <div className={styles.miniTitle}>2. 다비오맵스 API를 불러옵니다.</div>
        <div className={styles.texts}>다비오맵스 API는 npm을 통하여 설치하거나 링크를 통해 사용할 수 있습니다. </div>
        <br /> <strong>[주의!] new dabeeo.Maps() 나 new Maps()는 전체 코드상에서 한번만 호출하여 사용하여야 합니다.</strong>
        <div className={styles.miniTitle}>1) 링크를 통하여 다비오맵스 API를 불러오는 방법.</div>
        <div className={styles.texts}>
            * 다비오맵스 JS API의 공식 api 링크는
            <a href="https://dabeeomaps.com/" target="_blank">
                [다비오맵스 실내지도 플랫폼]
            </a>
            에서 확인할 수 있습니다.
        </div>
        <pre>
            <code className={styles.code}>{`<script type="text/javascript" src="[다비오맵스 공식 api 링크]" ></script> 

const dabeeoMaps = new dabeeo.Maps();`}</code>
        </pre>
        <div className={styles.miniTitle}>2) npm install을 통하여 다비오맵스 API를 불러오는 방법.</div>
        <div className={styles.texts}>
            <p>
                * 다비오맵스 npm 페이지는
                <a href="https://www.npmjs.com/package/dabeeomaps" target="_blank">
                    [https://www.npmjs.com/package/dabeeomaps]
                </a>
                입니다.
                <br />* 다비오맵스 npm install을 통한 example은
                <a href="https://github.com/dabeeo/dabeeomaps_library_boilerplate" target="_blank">
                    [다비오맵스 실내지도 플랫폼 npm install boilerplate]
                </a>
                에서 확인할 수 있습니다.
            </p>
        </div>
        <pre>
            <code className={styles.code}>{`import {Maps} from 'dabeeomaps';

const dabeeoMaps = new Maps();`}</code>
        </pre>
        <div className={styles.miniTitle}>3. 지도 데이터를 불러옵니다.</div>
        <div className={styles.texts}>지도데이터는 한번만 가져오면 됩니다. 지도를 삭제하였다가 다시그려도 지도데이터를 다시 불러올 필요없습니다. </div>
        <pre>
            <code className={styles.code}>
                {`const mapData = await dabeeoMaps.getMapData({
    clientId: "[불러올 지도의 clientId]",
    clientSecret: "[불러올 지도의 clientSecret]"
});`}
            </code>
        </pre>
        <div className={styles.miniTitle}>4. 지도를 그립니다.</div>
        <div className={styles.texts}>
            showMap()을 호출하여 지도를 HTML 영역에 그립니다. HTML 영역, 지도 옵션, 지도 데이터를 인자로 넘깁니다.
            <br />
            <strong>
                지도를 삭제하였다가 다시 그리는 경우 지도데이터를 다시 가져올 필요없습니다.
                <br /> 그러나 지도를 렌더링하는 데 사용하였던 메모리를 해제하기 위하여 map.context.cleanup() 호출해야 합니다.
            </strong>
        </div>
        <pre>
            <code className={styles.code}>
                {`const mapContainer = document.getElementById("[지도를 렌더링할 HTML Element]");            
const mapOption = Object.assign();                                               
const map = await dabeeoMaps.showMap(mapContainer, mapOption, mapData);     `}
            </code>
        </pre>
        <div className={styles.texts}>맵 예제 다음과 같습니다.</div>
    </div>
);
export default textKo;
