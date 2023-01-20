import styles from '../GetText/GetText.module.scss';

const MapDataText = (
    <div className={styles.getStartedText}>
        <div className={styles.title}>지도데이터</div>
        <div className={styles.miniTitle}>지도를 이용한 서비스를 하기 위해서는 먼저 지도데이터를 서버에서 불러와야 합니다.</div>
        <p>
            dabeeoMaps.getMapData()를 호출하여 지도데이터를 가져올 수 있습니다. <br />
            지도데이터 호출시 객체가 반환됩니다. 반환된 객체를 이용하여 지도를 그립니다. <br />
            지도를 그릴 때마다 지도 데이터를 가져올 필요는 없습니다. 한번 받은 지도데이터로 여러번 지도를 그릴 수 있습니다.
            <br />
        </p>
        <pre>
            <code className={styles.code}>
                {` // 서버로부터 지도 데이터 가져오기
const mapData = await dabeeoMaps.getMapData(mapDataOption);

// 불러온 데이터를 이용하여 지도 그리기
const map = await dabeeoMaps.showMap(mapContainer, mapOption, mapData);
`}
            </code>
        </pre>
        <p>
            반환된 객체에는 지도에 대한 기본 정보를 저장하고 있습니다. 기본 정보는 아래 리스트와 같습니다. <br />
            이를 이용하여 지도에 대한 각종 검색 등 여러 기능을 이용할 수 있습니다. <br />
            <ul>
                <li>지도 속성 정보</li>
                <li>지도에 포함된 층 정보</li>
                <li>지도에 포함된 언어</li>
                <li>오브젝트, POI, 그룹</li>
            </ul>
        </p>

        <div className={styles.texts}>
            <br />
            지도에 대한 기본 정보 속성을 가져올 때는 dataMapInfo를 사용하면 됩니다. 예를 들어 지도의 속성에 저장된 지도 정보 중 주소를 가져오는 코드는 아래와
            같습니다.
        </div>
        <pre>
            <code className={styles.code}>
                {`// 지도 속성에 저장된 주소 가져오기 
mapData.dataMapInfo.getAddress()

`}
            </code>
        </pre>
        <br />
        <div className={styles.texts}>
            지도가 가지고 있는 층에 대한 정보를 가져오거나, 지도에 설정된 디폴트층을 가져오거나, 옵션을 이용하여 층에 대한 검색을 할 수 있습니다.
        </div>
        <pre>
            <code className={styles.code}>
                {`//지도 층에 대한 정보
mapData.dataFloor.getFloors()

//지도에 디폴트로 지정된 층의 정보 가져오기
mapData.dataFloor.getDefaultFloor(); 

// title로 층 찾기
mapData.dataFloor.find({ title: '11F'}) 

// 층 아이디로 층 찾기 
mapData.dataFloor.find({ id: 'FL-t4vqgyek3jnb8146' })
`}
            </code>
        </pre>

        <div className={styles.texts}>
            <br />
            언어에 대한 정보를 가져오거나, 디폴트 언어를 가져올 수 있습니다.
        </div>
        <pre>
            <code className={styles.code}>
                {`// 지도 언어설정에 대한 정보 
mapData.dataLanguage.getLanguage()

//지도에 디폴트로 지정된 언어에 대한 정보를 가져오기
mapData.dataLanguage.getDefaultLanguage() `}
            </code>
        </pre>

        <div className={styles.texts}>
            <br />
            POI에 대한 정보를 가져옵니다. 옵션을 이용하여 타이틀, 아이디, 그룹, 특정한 층에 포함된 POI를 찾을 수 있습니다.
        </div>
        <pre>
            <code className={styles.code}>{`
// 지도의 모든 poi에 대한 정보             
mapData.dataPoi.getPois();     

// '실'이란 단어가 title에 들어간 모든 poi를 찾기
mapData.dataPoi.find({ title: '실' }) 

// 해당하는 ID를 가진 poi를 찾기
mapData.dataPoi.find({ id: 'PO-9InVzIGv20417' }) 

// 특정층에 있는 모든 poi를 찾기
mapData.dataPoi.find({ floorId: 'FL-t4vqgyek3jnb8146' }) 

//  해당하는 groupCode를 가진 모든 poi 찾기 
mapData.dataPoi.find({ groupCode: 'A1-12' }) 
`}</code>
        </pre>
        <p>
            dabeeoMaps.getMapData() 호출시 모든 층의 object 데이터를 가지고 오지는 않습니다. <br />
            층에 포함된 object 데이터는 해당층을 그릴 때 자동으로 가지고 옵니다. <br />
            아직 한번도 그리지 않은 층의 object의 정보를 얻기 위해서는 해당층을 서버에서 불러와야 합니다.
        </p>
        <div className={styles.texts}>
            <br />
            층데이터를 서버에서 불러오는 경우 복수개의 층아이디를 설정하거나, 한개의 층아이디를 설정하여 가져올 수 있습니다.
        </div>
        <pre>
            <code className={styles.code}>{`
// 복수개의 층의 object를 서버에서 가지고 올 때             
await mapData.getFloorData(['FL-t4vqgyek3jnb8146', 'FL-vf3q07spbmsw8132'] ); 

// 한개 층의 object를 서버에서 가지고 올 때             
await mapData.getFloorData('FL-t4vqgyek3jnb8146');   `}</code>
        </pre>
        <div className={styles.texts}>
            <br />
            이미 서버에서 다운받은 층에 대한 오브젝트에 대한 정보를 가져옵니다. 해당층 아이디를 명시하지 않으면 가지고 있는 층에 대한 오브젝트 정보가
            반환됩니다.
        </div>
        <pre>
            <code className={styles.code}>{`
// 해당 층에 대한 object를 가지고 올 때 
mapData.dataObject.getObjects('FL-03vEsKnBNz5665')

// 서버에서 다운받은 모든 층에 대한 object를 가지고 올 때 
mapData.dataObject.getObjects()

// title과 층을 이용하여 오브젝트 검색
mapData.dataObject.find({title: '실', floorId: 'FL-t4vqgyek3jnb8146'}); 

// id로 찾을 경우
mapData.dataObject.find({ id: 'OB-aN7fGeVoze1959' })

// floorId로 찾을 경우
mapData.dataObject.find({ floorId: 'FL-t4vqgyek3jnb8146' }) 

// groupCode로 찾을 경우
mapData.dataObject.find({ groupCode: 'A1-1' }) 
`}</code>
        </pre>
        <div className={styles.texts}>
            <br />
            그룹에 대한 정보를 가져옵니다. 특정 그룹의 코드를 찾을 수 있습니다. 코드는 트리 구조로 되어 있습니다.
        </div>
        <pre>
            <code className={styles.code}>{`
// 그룹코드에 대한 정보 가져오기            
mapData.dataGroupCode.getCodes();

//모든 그룹 코드 반환
mapData.dataGroupCode.findAll();

//해당 코드의 모든 자식 code
mapData.dataGroupCode.findAllChild('A1');

//모든 root code
mapData.dataGroupCode.findAllRoot();            

//직계 자식 code
mapData.dataGroupCode.findChild('A1');         

//직계 parent code
mapData.dataGroupCode.findParent('A1');        

//최상단 root parent code
mapData.dataGroupCode.findRootParent("A1-1");   
`}</code>
        </pre>
        <div className={styles.texts}>
            <br />
            여러 개의 오브젝트에 대한 중심 좌표값을 구합니다.
        </div>
        <pre>
            <code className={styles.code}>{`
  // 여러 개의 오브젝트에 대한 중심 좌표값을 반환
  const objectCenter = mapData.dataObject.getObjectsCenter([
    'OB-3Uf1pIZXd2409', // 여자화장실
    'OB-mxanpdYA1T2410', // 남자화장실
    'OB-mKv9s-1jA41961', // 회의실1
]);`}</code>
        </pre>
        <div className={styles.texts}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    </div>
);

export default MapDataText;
