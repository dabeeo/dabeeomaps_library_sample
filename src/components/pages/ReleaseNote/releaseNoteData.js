export const releaseNoteData = [
    {
        title: '04.37.01',
        content: [
            '2023.08.11',
            'https://api-assets.dabeeomaps.com/upload/library/dabeeomaps-04.37.01.js',
            'cleanup() 호출후 memory leak 발생하는 문제 해결',
            'showMap() 여러번 호출시 기존 맵데이터와 다른 경우만 지도 추가로 그려짐',
        ],
    },
    {
        title: '04.36.01',
        content: [
            '2023.08.04',
            'https://api-assets.dabeeomaps.com/upload/library/dabeeomaps-04.36.01.js',
            'touch시 sleep mode에서 깨어나지 않는 문제 해결',
            'focusTo() 실행시 rotation, tilt가 0으로 변경되는 문제 해결',
        ],
    },
    {
        title: '04.35.01',
        content: [
            '2023.07.28',
            'https://api-assets.dabeeomaps.com/upload/library/dabeeomaps-04.35.01.js',
            'showMap() mapOption으로 sleep mode 추가',
            'rotation, zoom을 하는 경우에도 click event가 발생하는 문제 해결',
        ],
    },
    {
        title: '04.34.01',
        content: [
            '2023.07.21',
            'https://api-assets.dabeeomaps.com/upload/library/dabeeomaps-04.34.01.js',
            '층변경 애니메이션 도중에 층이 변경되는 이슈 수정',
            'gif location 기본 비활성화 처리',
        ],
    },
    {
        title: '04.33.04',
        content: ['2023.07.20', 'https://api-assets.dabeeomaps.com/upload/library/dabeeomaps-04.33.04.js', 'GPU 사용량 떨어지지 않는 문제 해결'],
    },
    {
        title: '04.33.01',
        content: [
            '2023.07.14',
            'https://api-assets.dabeeomaps.com/upload/library/dabeeomaps-04.33.01.js',
            'mapOption에 poiTextPadding 추가',
            '모의주행시 층변경 인지를 위하여 층변경시 딜레이 추가',
        ],
    },
    {
        title: '04.13.01',
        content: ['2023.01.27', 'scaleCm이 큰 지도에 대하여 2d상에서 일부 object와 poi가 안보이는 현상 해결'],
    },
    {
        title: '04.12.01',
        content: [
            '2023.01.20',
            'mapInfo 속성 가져올 때 class 추가로 dataMapInfo class를 통하여 가져오도록 수정되었음. mapData.mapInfo.address => mapData.dataMapInfo.mapInfo.address',
        ],
    },
    {
        title: '04.11.01',
        content: ['2023.01.12', 'showMap() option에 enableTiling option추가'],
    },

    {
        title: '04.08.02',
        content: ['2022.12.22', 'showByCode, hideByCode 오류 수정'],
    },
    {
        title: '04.08.01',
        content: ['2022.12.20', 'model-load-complete 커스텀 이벤트 추가'],
    },
    {
        title: '04.07.01',
        content: [
            '2022.12.12',
            'geojson(상대좌표)데이터 overlay로 지도 위에 올리는 기능 추가',
            '복수개의 3d model(obj, gltf)을 overlay로 지도 위에  올리는 기능 추가',
        ],
    },
];
