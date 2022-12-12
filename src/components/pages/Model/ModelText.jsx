import styles from '../GetText/GetText.module.scss';

export const ModelText = (
    <div className={styles.getStartedText}>
        <div className={styles.title}>3D model 올리기</div>
        <div className={styles.miniTitle}>overlay 기능을 이용하여 3d model을 지도 위에 올릴 수 있습니다.</div>
        <p>
            여러개의 3d model을 overlay기능을 이용하여 한번에 지도 위에 올릴 수 있습니다.
            <br />
            먼저 모델 설정 파일을 json 포맷으로 만든 뒤 아래와 같이 파일을 서버에서 불러옵니다.
        </p>
        <pre>
            <code className={styles.code}>
                {`await map.overlay.addSource('model-test', {
    type: 'json',
    data: './qrModels.json',
});
`}
            </code>
        </pre>
        <div className={styles.texts}>
            json 파일 소스는 다음과 같습니다. 각 모델의 모델명(확장자 제외)과 모델이 올라갈 위치, 방향, 스케일비를 설정해줘야 합니다.
        </div>
        모델 타입은 obj(*.obj, *.mtl)나 gltf(*.glb) 두 가지 종류를 지원합니다. type에 obj 또는 gltf로 명시합니다.
        <pre>
            <code className={styles.code}>
                {`
{
    "models": [
        {
            "type": "gltf",
            "modelName": "광화문",
            "fileName": "https://assets.dabeeomaps.com/upload/models/kbg/kwanghwamun",
            "transform": {
                "position": { "x": 2796.8, "y": 2191.4, "z": 2 },
                "rotation": { "x": 90, "y": 101, "z": 0 },
                "scale": { "x": 1.5, "y": 1.5, "z": 1.5 }
            }
        },
        {
            "type": "obj",
            "modelName": "답동성당",
            "fileName": "https://assets.dabeeomaps.com/upload/models/blender/답동성당",
            "transform": {
                "position": { "x": 5080.33860339969, "y": 2834.249083219735, "z": 2 },
                "rotation": { "x": 90, "y": 170, "z": 0 },
                "scale": { "x": 1.65, "y": 1.65, "z": 1.65 }
            }
        },
        {
            "type": "obj",
            "modelName": "한국근대박물관",
            "fileName": "https://assets.dabeeomaps.com/upload/models/blender/한국근대박물관",
            "transform": {
                "position": { "x": 1915.396748330824, "y": 2150.817930149708, "z": 2 },
                "rotation": { "x": 90, "y": -125, "z": 0 },
                "scale": { "x": 1.3, "y": 1.3, "z": 1.3 }
            }
        },
        {
            "type": "obj",
            "modelName": "대불호텔전시관",
            "fileName": "https://assets.dabeeomaps.com/upload/models/blender/대불호텔전시관",
            "transform": {
                "position": { "x": 1810.860327370544, "y": 1580.5197138422, "z": 2 },
                "rotation": { "x": 90, "y": -125, "z": 0 },
                "scale": { "x": 2, "y": 2, "z": 2 }
            }
        },
        {
            "type": "obj",
            "modelName": "구락부",
            "fileName": "https://assets.dabeeomaps.com/upload/models/blender/구락부",
            "transform": {
                "position": { "x": 2490.797088721315, "y": 1220.68783052675, "z": 2 },
                "rotation": { "x": 90, "y": -115, "z": 0 },
                "scale": { "x": 1.65, "y": 1.65, "z": 1.65 }
            }
        },
        {
            "type": "obj",
            "modelName": "맥아더장군동상_수정",
            "fileName": "https://assets.dabeeomaps.com/upload/models/blender/맥아더장군동상_수정",
            "transform": {
                "position": { "x": 2766.790838580751, "y": 1207.2767759750946, "z": 2 },
                "rotation": { "x": 90, "y": -115, "z": 0 },
                "scale": { "x": 1.0, "y": 1.0, "z": 1.0 }
            }
        },
        {
            "type": "obj",
            "modelName": "선린문",
            "fileName": "https://assets.dabeeomaps.com/upload/models/blender/선린문",
            "transform": {
                "position": { "x": 1708.8257667449273, "y": 745.3066050709097, "z": 2 },
                "rotation": { "x": 90, "y": -180, "z": 0 },
                "scale": { "x": 1.0, "y": 1.0, "z": 1.0 }
            }
        },
        {
            "type": "obj",
            "modelName": "중화가",
            "fileName": "https://assets.dabeeomaps.com/upload/models/blender/중화가",
            "transform": {
                "position": { "x": 691.0824338136395, "y": 815.9877759917496, "z": 2 },
                "rotation": { "x": 90, "y": -180, "z": 0 },
                "scale": { "x": 1.0, "y": 1.0, "z": 1.0 }
            }
        },
        {
            "type": "obj",
            "modelName": "인천누들플랫폼",
            "fileName": "https://assets.dabeeomaps.com/upload/models/blender/인천누들플랫폼",
            "transform": {
                "position": {
                    "x": 2820.9074709046026,
                    "y": 2191.4918176852607,
                    "z": 2
                },
                "rotation": { "x": 90, "y": -125, "z": 0 },
                "scale": { "x": 1.2, "y": 1.2, "z": 1.2 }
            }
        },
        {
            "type": "obj",
            "modelName": "인천아트플랫폼",
            "fileName": "https://assets.dabeeomaps.com/upload/models/blender/인천아트플랫폼",
            "transform": {
                "position": { "x": 1556.1534363219591, "y": 2104.675766729053, "z": 2 },
                "rotation": { "x": 90, "y": -125, "z": 0 },
                "scale": { "x": 1.3, "y": 1.3, "z": 1.3 }
            }
        },
        {
            "type": "obj",
            "modelName": "인천인화문",
            "fileName": "https://assets.dabeeomaps.com/upload/models/blender/인천인화문",
            "transform": {
                "position": { "x": 1353.321087638437, "y": 1983.52181818622, "z": 2 },
                "rotation": { "x": 90, "y": -125, "z": 0 },
                "scale": { "x": 1.2, "y": 1.2, "z": 1.2 }
            }
        },
        {
            "type": "obj",
            "modelName": "인천하버파크호텔",
            "fileName": "https://assets.dabeeomaps.com/upload/models/blender/인천하버파크호텔",
            "transform": {
                "position": { "x": 1382.8418195781449, "y": 2334.281412860833, "z": 2 },
                "rotation": { "x": 90, "y": -125, "z": 0 },
                "scale": { "x": 1.8, "y": 1.8, "z": 1.8 }
            }
        },
        {
            "type": "obj",
            "modelName": "청계지계단",
            "fileName": "https://assets.dabeeomaps.com/upload/models/blender/청계지계단",
            "transform": {
                "position": {
                    "x": 1726.7785901260725,
                    "y": 1341.0794669754848,
                    "z": 2
                },
                "rotation": { "x": 90, "y": -125, "z": 0 },
                "scale": { "x": 0.7, "y": 0.7, "z": 0.7 }
            }
        },
        {
            "type": "obj",
            "modelName": "한미수교100주년기념탑",
            "fileName": "https://assets.dabeeomaps.com/upload/models/blender/한미수교100주년기념탑",
            "transform": {
                "position": { "x": 2101.6453551474315, "y": 606.6319294904408, "z": 2 },
                "rotation": { "x": 90, "y": -125, "z": 0 },
                "scale": { "x": 1.3, "y": 1.3, "z": 1.3 }
            }
        },
        {
            "type": "obj",
            "modelName": "한중문화관",
            "fileName": "https://assets.dabeeomaps.com/upload/models/blender/한중문화관",
            "transform": {
                "position": {
                    "x": 1084.1805118843615,
                    "y": 1689.1143127988767,
                    "z": 2
                },
                "rotation": { "x": 90, "y": -125, "z": 0 },
                "scale": { "x": 1.5, "y": 1.5, "z": 1.5 }
            }
        }
    ]
}

`}
            </code>
        </pre>
        <div className={styles.texts}>
            파일 로딩이 완료되면 아래와 같이 지도위에 3d 모델을 올립니다. <br />
            이 때 type은 model로 하고 source는 addSource()시에 사용하였던 이름과 동일한 이름을 사용하면 됩니다. <br />
            overlay를 제거할 때는 removeLayer()를 호출하고, 데이터를 제거시에는 removeSource()를 호출하면 됩니다. <br />
            자세한 사항은 API Reference를 참고해주세요.
        </div>
        <pre>
            <code className={styles.code}>{`
            // Model Layer 지도에 그리기
            await map.overlay.addLayer({
                type: 'model',
                source: 'model-test',
                paint: {},
            });

                map.overlay.removeLayer('model-test'); // Overlay 지도에서 제거하기
                map.overlay.removeSource('model-test'); // Overlay 데이터 제거하기


            `}</code>
        </pre>
        <div className={styles.texts}>실행 예제는 다음과 같습니다.</div>
    </div>
);
