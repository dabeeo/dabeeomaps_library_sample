import styles from '../GetText/GetText.module.scss';
const ControlsText = (
    <div className={styles.getStartedText}>
        <div className={styles.title}>카메라 </div>
        <div className={styles.miniTitle}>camera를 control하여 원하는 위치로 이동, 회전, focus, zoom할 수 있습니다.</div>
        <p>
            원하는 위치에 카메라를 이동, 회전, 각도 조절하거나 , focus, zoom을 조정할 수 있습니다.
            <br />
            optional 속성으로 transition 속성을 true로 설정하면 카메라가 부드럽게 움직입니다. default는 false입니다.
            <br />
        </p>
        <div className={styles.texts}>2D / 3D 로 카메라 모드를 전환합니다. 단 전환시 poi, object, tag등은 초기상태로 reset 됩니다. </div>
        <pre>
            <code className={styles.code}>map.control.changeCamera("3D"); // 2D | 3D 중 원하는 차원을 입력하시면 됩니다</code>
        </pre>

        <div className={styles.texts}>현재 카메라 모드를 반환받습니다.</div>
        <pre>
            <code className={styles.code}>map.control.getCameraType()</code>
        </pre>

        <div className={styles.text}>카메라를 원하는 좌표로 이동시키는 동작을 합니다.</div>
        <pre>
            <code className={styles.code}>
                {`const position = { x: number, y: number };              // 이동하고자 하는 좌표의 x, y값
map.control.moveTo({position: position, transition:boolean});
`}
            </code>
        </pre>

        <div className={styles.text}>카메라에 적용된 모든 rotation, title, position값을 처음 상태로 초기화 합니다.</div>
        <pre>
            <code className={styles.code}>{`map.control.reset({ transition?: boolean });`}</code>
        </pre>

        <div className={styles.text}>카메라의 rotation, tilt, zoom을 변경합니다.</div>
        <pre>
            <code className={styles.code}>
                {`const control = {
    rotation : number,                                  // camera의 rotation 값
    tilt: number,                                       // camera의 tilt 값
    zoom: number,                                       // camera의 zoom의 percent value
    transition: boolean                                        
};

map.control.set(control);
`}
            </code>
        </pre>

        <div className={styles.text}>zoom을 변경합니다. 줌값은 줌레벨로 절대값입니다. 0에서 24까지의 값을 갖습니다.</div>
        <pre>
            <code className={styles.code}>
                {`map.control.changeZoom({zoom:number, transition:boolean});       // zoomLevel(percent) 100(%)가 현재 zoomLevel 
map.control.zoomIn({transition:true});                             // zoom In
map.control.zoomOut({transition:true});                            // zoom Out
`}
            </code>
        </pre>
        <div className={styles.text}>
            현재층의 오브젝트 일부, 오브젝트 전체, 네비게이션, poi 일부, poi 전부에 카메라를 포커스합니다. padding으로 여백을 설정할 수 있습니다.
        </div>
        <pre>
            <code className={styles.code}>
                {`map.control.focusTo({
        focus:{
            type:'OBJECT',      // OBJECT/ OBJECT_ALL / NAVIGATION /  POI, POI_ALL
            ids: [포커스할 ID 배열]
        },
        transition:true,
        padding:{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        }
})                    
`}
            </code>
        </pre>
        <div className={styles.text}>줌, 회전, 각도(3d) 등과 마우스, 터치 등의 카메라 컨트롤의 옵션을 설정합니다.</div>
        <pre>
            <code className={styles.code}>
                {`

const option = {
    /** 카메라 컨트롤 범위 옵션 */
    controlRangeOption? : {
      zoom? : {
        min:number, 
        max:number
      },  
      rotate? : {
        min:number, 
        max:number
      }, 
      tilt? : {
        min:number, 
        max:number
      }, 
    },
    /** 마우스 컨트롤 옵션 */
    mouseOption? : {
      enableZoom? : boolean, 
      enableRotate? : boolean, 
      enablePan? : boolean,
      enableTilt? : boolean, 
      buttonOption? : { 
          left : 'ZOOM' | 'ROTATE' | 'PAN'
          middle : 'ZOOM' | 'ROTATE' | 'PAN'
          right : 'ZOOM' | 'ROTATE' | 'PAN'
      }
    },
    /** 터치 컨트롤 옵션 */
    touchOption? : {
      enableZoom? : boolean,
      enableRotate? : boolean,
      enablePan? : boolean,
      enableTilt? : boolean,
    }
  }

map.control.setOption(option);                   
`}
            </code>
        </pre>
        <div className={styles.text}>아래 지도에서 적용 예시를 확인해보실 수 있습니다.</div>
    </div>
);

export default ControlsText;
