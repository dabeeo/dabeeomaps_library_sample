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
            <div className={styles.miniTitle}>dabeeoMaps.getMapData()호출시 반환된 객체의 메소드를 이용하여 각종 검색 등 여러 기능을 이용할 수 있습니다.  </div>
            <p>
                지도에 포함된 층과 언어, 오브젝트, POI, 그룹에 대한 정보를 알 수 있습니다.  <br />
                아이디와 타이틀로 층을 검색할 수 있습니다. <br />
                그룹코드의 트리구조를 이용한 부모와 자식에 대한 검색이 가능합니다.<br />
                오브젝트와 poi에 대하여 타이틀, 층, 아이디, 그룹코드로 검색이 가능합니다<br />
            </p>
            

            <div className={styles.texts}>지도데이터 호출시 객체가 반환됩니다.</div>
            <pre>
              <code className={styles.code}>const mapData = await dabeeoMaps.getMapData(mapDataOption);</code>
            </pre>

            <div className={styles.texts}><br/><br/><br/>층에 대한 정보를 가져옵니다.</div>
            <pre>
              <code className={styles.code}>mapData.dataFloor.getFloors()</code>
            </pre>
            
            <div className={styles.texts}><br />지도 속성 정보를 가져옵니다.</div>
            <pre>
              <code className={styles.code}>mapData.mapInfo.address</code>
            </pre>


            <div className={styles.texts}><br />언어에 대한 정보를 가져옵니다.</div>
            <pre>
              <code className={styles.code}>mapData.dataLanguage.getLanguage()</code>
            </pre>

            <div className={styles.texts}><br />POI에 대한 정보를 가져옵니다.</div>
            <pre>
              <code className={styles.code}>mapData.dataPoi.getPois()</code>
            </pre>

            <div className={styles.texts}><br />오브젝트에 대한 정보를 가져옵니다. 해당층 아이디를 명시해주어야 합니다. </div>
            <pre>
              <code className={styles.code}>mapData.dataObject.getObjects('FL-03vEsKnBNz5665')</code>
            </pre>

            <div className={styles.texts}><br />그룹에 대한 정보를 가져옵니다.</div>
            <pre>
              <code className={styles.code}>map.dataGroupCode.getCodes();</code>
            </pre>

            <div className={styles.texts}><br /><br /><br />옵션을 이용하여 title, id에 해당하는 층을 찾습니다.</div>
            <pre>
              <code className={styles.code}>{`
mapData.dataFloor.find({ title: '11F'}) // title로 찾기
mapData.dataFloor.find({ id: 'FL-t4vqgyek3jnb8146' })//id로 찾기
`}</code>
            </pre>

            <div className={styles.texts}><br />에디터에서 디폴트로 지정된 층의 정보를 찾습니다.</div>
            <pre>
              <code className={styles.code}>{`map.dataFloor.getDefaultFloor();`}</code>
            </pre>

            <div className={styles.texts}><br /><br /><br />옵션을 이용하여 타이틀, 아이디, 그룹, 특정한 층에 포함된 POI를 찾습니다.</div>
            <pre>
              <code className={styles.code}>{`
mapData.dataPoi.find({ title: '실' }) // '실'이란 단어가 title에 들어간 모든 poi를 찾습니다.
mapData.dataPoi.find({ id: 'PO-9InVzIGv20417' }) // 해당하는 ID를 가진 poi를 찾습니다.
mapData.dataPoi.find({ floorId: 'FL-t4vqgyek3jnb8146' }) // 특정층에 있는 모든 poi를 찾습니다.
mapData.dataPoi.find({ groupCode: 'A1-12' }) //  해당하는 groupCode를 가진 모든 POI를 찾습니다.
`}</code>
            </pre>

            <div className={styles.texts}><br />옵션을 이용하여 타이틀, 아이디, 그룹, 특정한 층에 포함된 오브젝트를 찾습니다. 층은 항상 지정해줘야 합니다. </div>
            <pre>
              <code className={styles.code}>{`
mapData.dataObject.find({title: '실', floorId: 'FL-t4vqgyek3jnb8146'}); // 1. title로 찾을 경우
mapData.dataObject.find({ id: 'OB-aN7fGeVoze1959', floorId: 'FL-t4vqgyek3jnb8146' }) // 2. id로 찾을 경우
mapData.dataObject.find({ floorId: 'FL-t4vqgyek3jnb8146' }) // 3. floorId로 찾을 경우
mapData.dataObject.find({ groupCode: 'A1-1', floorId: 'FL-t4vqgyek3jnb8146' }) // 4. groupCode로 찾을 경우
`}</code>
            </pre>

            <div className={styles.texts}><br />특정 그룹의 코드를 찾습니다.</div>
            <pre>
              <code className={styles.code}>{`
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