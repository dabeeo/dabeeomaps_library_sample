import styles from '../GetText/GetText.module.scss';

const HeatMapText = (
    <div className={styles.getStartedText}>
        <div className={styles.title}>HeatMap 올리기</div>
        <div className={styles.miniTitle}>overlay 기능을 이용하여 heatmap을 지도 위에 올릴 수 있습니다.</div>
        <p>
            지도에 통계 데이터를 시각화하고자 할 때 overlayr기능을 이용하여 heatmap으로 효과적으로 표현할 수 있습니다.
            <br />
            먼저 시각화하고자 하는 파일을 geoJson 포맷으로 만든 뒤 아래와 같이 파일을 서버에서 불러옵니다.
        </p>
        <pre>
            <code className={styles.code}>
                {`const overlaySourceOption = {
    type: 'geojson',
    data: './heatmap.geojson',
};
await map.overlay.addSource('heatmap-test', overlaySourceOption); // Overlay 데이터 저장
`}
            </code>
        </pre>
        <div className={styles.texts}>geojson 파일 소스는 다음과 같습니다.</div>
        <pre>
            <code className={styles.code}>
                {`
{
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "MultiPoint",
                "coordinates": [
                    [0, 0],
                    [6000, 3000],
                    [3000, 1500],
                    [1200, 1800],
                    [1900, 2200],
                    [2810, 1580],
                    [2770, 1510],
                    [2820, 1530],
                    [2850, 1550],
                    [2790, 1560],
                    [2230, 1230],
                    [1560, 1560],
                    [1250, 2130],
                    [2350, 1360],
                    [2570, 1230],
                    [2330, 1340],
                    [2530, 1350],
                    [2690, 1240],
                    [2450, 1560],
                    [0, 3000],
                    [6000, 0]
                ]
            },
            "properties": {
                "name": "다비오 사무실"
            }
        }
    ]
}
`}
            </code>
        </pre>
        <div className={styles.texts}>
            파일 로딩이 완료되면 아래와 같이 옵션을 설정하여 지도위에 heatmap을 올립니다. <br />
            이 때 type은 heatmap으로 하고 source는 addSource()시에 사용하였던 이름과 동일한 이름을 사용하면 됩니다. <br />
            heatmap의 표출 옵션은 paint 속성에 설정해주시면 됩니다. color는 4가지로 지정가능합니다. <br />
            overlay를 제거할 때는 removeLayer()를 호출하고, 데이터를 제거시에는 removeSource()를 호출하면 됩니다. <br />
            자세한 사항은 API Reference를 참고해주세요.
        </div>
        <pre>
            <code className={styles.code}>{`
                const overlayLayerOption = {
                    type: 'heatmap',
                    source: 'heatmap-test',
                    paint: {
                        heatmapRadius: 12,
                        heatmapOpacity: 0.8,
                        heatmapColor: [
                            { density: 0.8, color: { r: 206, g: 0, b: 24 } },
                            { density: 0.6, color: { r: 240, g: 154, b: 119 } },
                            { density: 0.4, color: { r: 215, g: 226, b: 229 } },
                            { density: 0.0, color: { r: 103, g: 182, b: 228 } },
                        ],
                    },
                };
                map.overlay.addLayer(overlayLayerOption); // Overlay 지도에 그리기

                map.overlay.removeLayer('heatmap-test'); // Overlay 지도에서 제거하기
                map.overlay.removeSource('heatmap-test'); // Overlay 데이터 제거하기


            `}</code>
        </pre>
        <div className={styles.texts}>실행 예제는 다음과 같습니다.</div>
    </div>
);

export default HeatMapText;
