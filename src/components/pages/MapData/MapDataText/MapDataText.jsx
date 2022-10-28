import { useEffect } from 'react';
import styles from './MapDataText.module.scss';

const MapDataText = () => {

    useEffect(() => {
        let codeElement = document.querySelectorAll("code");
            if (!codeElement) return;
            codeElement.forEach((data) => {
                let text = data.innerHTML;
                let text1 = text.replace(/&lt;/gi, "<");
                let text2 = text1.replace(/&gt;/gi, ">");
                let text3 = text2.replace(/[<>]/g, `<span>$&</span>`);
                let text4 = text3.replace(/['"]([^'"]*)["']/g, `<span class=${styles.value}>$&</span>`);
                let text5 = text4.replace(
                    / var | if | return| let | const | function | new | window| document| for /g,
                    `<span class=${styles.reserved}>$&</span>`,
                );
                let text6 = text5.replace(/[{}()]/g, `<span class=${styles.special}>$&</span>`);
                let text7 = text6.replace(/\/\/.+/g, `<span class=${styles.comment}>$&</span>`);
                data.innerHTML = text7;
            });
    }, []);

    return (
        <div className={styles.mapDataText}>
            <div className={styles.title}>MapData</div>
            <div className={styles.miniTitle}>dabeeoMaps.getMapData()를 호출하여 지도를 그릴 수  있습니다.  </div>
            

            <div className={styles.texts}>지도데이터 호출시 객체가 반환됩니다. 반환된 객체를 이용하여 지도를 그립니다.</div>
            <pre>
              <code className={styles.code}>{`
const mapData = await dabeeoMaps.getMapData(mapDataOption);
const map = await dabeeoMaps.showMap(mapContainer, mapOption, mapData);
`}
          </code>
            </pre>
            <div className={styles.miniTitle}><br/>dabeeoMaps.getMapData()를 호출하여 반환된 객체를 이용하여 지도데이터에 대한 각종 검색 등 여러 기능을 이용할 수 있습니다.  </div>
            <p>
                지도에 포함된 층과 언어, 오브젝트, POI, 그룹에 대한 정보를 알 수 있습니다.  <br />
                아이디와 타이틀로 층을 검색할 수 있습니다. <br />
                그룹코드의 트리구조를 이용한 부모와 자식에 대한 검색이 가능합니다.<br />
                오브젝트와 poi에 대하여 타이틀, 층, 아이디, 그룹코드로 검색이 가능합니다<br />
            </p>

            <div className={styles.texts}><br />지도 속성 정보를 가져옵니다.</div>
            <pre>
              <code className={styles.code}>mapData.mapInfo.address</code>
            </pre>
            <div className={styles.texts}><br/>층에 대한 정보를 가져오거나, 디폴트층을 가져오거나, 옵션을 이용하여 층에 대한 검색을 합니다 .</div>
            <pre>
              <code className={styles.code}>
{`mapData.dataFloor.getFloors()
mapData.dataFloor.getDefaultFloor(); //지도에 디폴트로 지정된 층의 정보 가져오기.
mapData.dataFloor.find({ title: '11F'}) // title로 찾기
mapData.dataFloor.find({ id: 'FL-t4vqgyek3jnb8146' })//id로 찾기
`}</code>
            </pre>
            
            <div className={styles.texts}><br />언어에 대한 정보를 가져오거나, 디폴트 언어를 가져옵니다.</div>
            <pre>
              <code className={styles.code}>
{`mapData.dataLanguage.getLanguage()
mapData.dataLanguage.getDefaultLanguage() //지도에 디폴트로 지정된 언어에 대한 정보를 가져옵니다.`}</code>
            </pre>

            <div className={styles.texts}><br />POI에 대한 정보를 가져옵니다. 옵션을 이용하여 타이틀, 아이디, 그룹, 특정한 층에 포함된 POI를 찾을 수 있습니다.  </div>
            <pre>
              <code className={styles.code}>{`
mapData.dataPoi.getPois();               
mapData.dataPoi.find({ title: '실' }) // '실'이란 단어가 title에 들어간 모든 poi를 찾습니다.
mapData.dataPoi.find({ id: 'PO-9InVzIGv20417' }) // 해당하는 ID를 가진 poi를 찾습니다.
mapData.dataPoi.find({ floorId: 'FL-t4vqgyek3jnb8146' }) // 특정층에 있는 모든 poi를 찾습니다.
mapData.dataPoi.find({ groupCode: 'A1-12' }) //  해당하는 groupCode를 가진 모든 POI를 찾습니다.
`}</code>
            </pre>            
            <div className={styles.miniTitle}>dabeeoMaps.getMapData() 호출시 층에 포함된 object 데이터를 별도로 가지고 오지 않습니다. <br/>
            층에 포함된 Object 데이터는 해당층을 그릴 때 자동으로 가지고 옵니다. <br />
            아직 한번도 그리지 않은 층의 object의 정보를 얻기 위해서는 해당층을 서버에서 불러와야 합니다.  </div>
            <div className={styles.texts}><br />층데이터를 서버에서 불러오는 경우 복수개의 층아이디를 설정하거나, 한개의 층아이디를 설정하여 가져올 수 있습니다.  </div>
            <pre>
            <code className={styles.code}>{`
await mapData.getFloorData(['FL-t4vqgyek3jnb8146', 'FL-vf3q07spbmsw8132'] ); 
await mapData.getFloorData('FL-t4vqgyek3jnb8146');   // 입력한 floor data 정보 load
        `}</code>
            </pre>
            <div className={styles.texts}><br />오브젝트에 대한 정보를 가져옵니다. 해당층 아이디를 명시하지 않으면 서버에서 불러온 모든 층에 대한 오브젝트 정보가 반환됩니다. 검색도 가능합니다. </div>
            <pre>
              <code className={styles.code}>{`mapData.dataObject.getObjects('FL-03vEsKnBNz5665')
mapData.dataObject.getObjects()
mapData.dataObject.find({title: '실', floorId: 'FL-t4vqgyek3jnb8146'}); // 1. title과 층을 이용하여 찾을 경우     
mapData.dataObject.find({ id: 'OB-aN7fGeVoze1959' }) // 2. id로 찾을 경우
mapData.dataObject.find({ floorId: 'FL-t4vqgyek3jnb8146' }) // 3. floorId로 찾을 경우
mapData.dataObject.find({ groupCode: 'A1-1' }) // 4. groupCode로 찾을 경우
`}</code>
            </pre>
            <div className={styles.texts}><br />그룹에 대한 정보를 가져옵니다. 특정 그룹의 코드를 찾을 수 있습니다. </div>
            <pre>
              <code className={styles.code}>{`
mapData.dataGroupCode.getCodes();              
mapData.dataGroupCode.findAll();                //모든 code
mapData.dataGroupCode.findAllChild('A1');       //모든 자식 code
mapData.dataGroupCode.findAllRoot();            //모든 root code
mapData.dataGroupCode.findChild('A1');          //직계 자식 code
mapData.dataGroupCode.findParent('A1');         //직계 parent code
mapData.dataGroupCode.findRootParent("A1-1");   //최상단 root parent code
`}</code>
            </pre>
            <div className={styles.texts}><br />여러 개의 오브젝트에 대한 중심 좌표값을 구합니다.</div>
            <pre>
              <code className={styles.code}>{`
  // 여러 개의 오브젝트에 대한 중심 좌표값을 반환한다. 
  const objectCenter = mapData.dataObject.getObjectsCenter([
    'OB-3Uf1pIZXd2409', // 여자화장실
    'OB-mxanpdYA1T2410', // 남자화장실
    'OB-mKv9s-1jA41961', // 회의실1
]);
console.log('mapData.dataObject.getObjectsCenter() 에 대한 결과값', objectCenter);
if (objectCenter) await map.markers.set({ marker: [{ x: objectCenter.x, y: objectCenter.y },] });
`}</code>
            </pre>
            <div className={styles.texts}><br /><br /><br /><br /><br /><br /></div>
            
        </div>
    )
}

export default MapDataText;