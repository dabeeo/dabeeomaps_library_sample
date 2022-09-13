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

            <div className={styles.texts}><br />오브젝트에 대한 정보를 가져옵니다.</div>
            <pre>
              <code className={styles.code}>mapData.dataObject.getObjects()</code>
            </pre>

            <div className={styles.texts}><br />그룹에 대한 정보를 가져옵니다.</div>
            <pre>
              <code className={styles.code}>map.dataGroupCode.getCodes();</code>
            </pre>

            <div className={styles.texts}><br /><br /><br />옵션을 이용하여 title, id, groupcode에 해당하는 층을 찾습니다.</div>
            <pre>
              <code className={styles.code}>{`
mapData.dataFloor.find('FL-03vEsKnBNz5665', { type: 'ID'}) //id로 찾기 ;
mapData.dataFloor.find('11F', { type: 'TITLE'})  // title로 찾기
mapData.dataPoi.find('A1-21', { type: 'GROUPCODE' })`}</code>
            </pre>

            <div className={styles.texts}><br />에디터에서 디폴트로 지정된 층의 정보를 찾습니다.</div>
            <pre>
              <code className={styles.code}>{`map.dataFloor.getDefaultFloor();`}</code>
            </pre>

            <div className={styles.texts}><br /><br /><br />옵션을 이용하여 타이틀, 아이디, 그룹, 특정한 층에 포함된 POI를 찾습니다.</div>
            <pre>
              <code className={styles.code}>{`
mapData.dataPoi.find('FL-t4vqgyek3jnb8146', { type : 'FLOORID' }); // 특정층에 있는 모든 poi를 찾습니다.
mapData.dataPoi.find('실', { type: 'TITLE' }); // '실'이란 단어가 title에 들어간 모든 poi를 찾습니다.
mapData.dataPoi.find('PO-9InVzIGv20417', { type: 'ID' }); // 'PO-123456'에 해당하는 ID를 가진 poi를 찾습니다.
mapData.dataPoi.find('A1', { type: 'GROUPCODE' }); //  'A1'에 해당하는 groupCode를 가진 모든 POI를 찾습니다.`}</code>
            </pre>

            <div className={styles.texts}><br />옵션을 이용하여 타이틀, 아이디, 그룹, 특정한 층에 포함된 오브젝트를 찾습니다.</div>
            <pre>
              <code className={styles.code}>{`
mapData.dataObject.find('실', { type: 'title' }); // '실'이란 단어가 title에 들어간 모든 오브젝트를 반환해줍니다.
mapData.dataObject.find('OB-aN7fGeVoze1959', { type: 'iD' }); // 'OB-aN7fGeVoze1959'에 해당하는 ID를 가진 오브젝트를 반환해줍니다.
mapData.dataObject.find('Fl-123456', { type: 'floorId' }); // 'FL-123456'에 해당하는 floorID를 가진 모든 오브젝트를 반환해줍니다.
mapData.dataObject.find('A1', { type: 'groupCode' }); // -> 'A1'에 해당하는 groupCode를 가진 모든 오브젝트를 반환해줍니다.`}</code>
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
            <div className={styles.texts}><br /><br /><br /><br /><br /><br /></div>
            
        </div>
    )
}

export default MapDataText;