import styles from '../GetText/GetText.module.scss';

export const GeoJsonText = (
    <div className={styles.getStartedText}>
        <div className={styles.title}>Geojson 도형 올리기</div>
        <div className={styles.miniTitle}>overlay 기능을 이용하여 점, 선, 면을 지도 위에 올릴 수 있습니다.</div>
        <p>
            여러개의 geojson format의 객체를 overlay기능을 이용하여 한번에 지도 위에 올릴 수 있습니다.
            <br />
            먼저 geojson 포맷으로 파일을 만든 뒤 아래와 같이 서버에서 불러옵니다. 좌표는 해당 지도의 좌표를 사용합니다.
        </p>
        <pre>
            <code className={styles.code}>
                {`const overlaySourceOption = {
        type: 'geojson',
        data: './alltype.geojson',
    };
await map.overlay.addSource('polygon-test', overlaySourceOption); // Overlay 데이터 저장
`}
            </code>
        </pre>
        <div className={styles.texts}>
            geojson 파일 소스는 다음과 같습니다. 지원하는 feature type은 다음과 같습니다. <br />
            Polygon의 경우 그려지는 방향에(반시계) 따라 비어있는 도형으로 표현됩니다. <br />
            공통으로 property의 속성으로 color를 가지며 point는 추가적으로 size, line은 lineWidth을 갖습니다.
            <br></br>
            <ul>
                <li>MultPolygon</li>
                <li>Polygon</li>
                <li>MultPoint</li>
                <li>Point</li>
                <li>MultiLineString</li>
                <li>MultiLineString</li>
            </ul>
        </div>
        <pre>
            <code className={styles.code}>
                {`
{
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "color": "#21fffb"
            },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    [
                        [
                            [1000, 1000],
                            [2000, 1000],
                            [2000, 500],
                            [1000, 500]
                        ]
                    ],
                    [
                        [
                            [4000, 2000],
                            [4000, 700],
                            [5400, 700],
                            [5400, 2000]
                        ],
                        [
                            [5000, 1000],
                            [4500, 1000],
                            [4500, 1500],
                            [5000, 1500]
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "color": "#dd01ff"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [3500, 1000],
                        [3500, 2500],
                        [2000, 2500],
                        [2000, 2000],
                        [3500, 2000]
                    ],
                    [
                        [2500, 2100],
                        [3000, 2400],
                        [3000, 2100],
                        [2500, 2100]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "size": 20,
                "color": "#ff0000"
            },
            "geometry": {
                "coordinates": [1000, 1000],
                "type": "Point"
            }
        },
        {
            "type": "Feature",
            "properties": {
                "size": 15,
                "color": "#ffff00"
            },
            "geometry": {
                "coordinates": [2000, 1000],
                "type": "Point"
            }
        },
        {
            "type": "Feature",
            "properties": {
                "size": 25,
                "color": "#0000ff"
            },
            "geometry": {
                "type": "MultiPoint",
                "coordinates": [
                    [3000, 1000],
                    [3000, 1500]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "color": "#ff8271",
                "lineWidth": 40
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [2000, 1000],
                        [2000, 2000],
                        [3000, 2000]
                    ],
                    [
                        [5000, 2000],
                        [4000, 2000],
                        [4000, 1000],
                        [3000, 1000]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "color": "#00ff00",
                "lineWidth": 30
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [3000, 800],
                    [1000, 800],
                    [1000, 2000]
                ]
            }
        }
    ]
}
`}
            </code>
        </pre>
        <div className={styles.texts}>
            파일 로딩이 완료되면 아래와 같이 지도위에 geojson 객체(점, 선, 면)를 올립니다. <br />
            이 때 type은 polygon으로 하고 source는 addSource()시에 사용하였던 이름과 동일한 이름을 사용하면 됩니다. <br />
            paint option으로 z축의 값을 지정할 수 있습니다. <br />
            overlay를 제거할 때는 removeLayer()를 호출하고, 데이터를 제거시에는 removeSource()를 호출하면 됩니다. <br />
            자세한 사항은 API Reference를 참고해주세요.
        </div>
        <pre>
            <code className={styles.code}>{`
    const overlayLayerOption = {
        type: 'polygon',
        source: 'polygon-test',
        paint: {
            polygonPositionZ: 500,
        },
    };
    await map.overlay.addLayer(overlayLayerOption); // Overlay 지도에 그리기

    map.overlay.removeSource('polygon-test'); //데이터 제거 
    map.overlay.removeLayer('polygon-test');  //레이어 제거 
`}</code>
        </pre>
        <div className={styles.texts}>실행 예제는 다음과 같습니다.</div>
    </div>
);
