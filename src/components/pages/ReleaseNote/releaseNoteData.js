export const releaseNoteData = [
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
