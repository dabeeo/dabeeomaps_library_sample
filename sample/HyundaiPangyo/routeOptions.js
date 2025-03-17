export const routeOptions = {
    hyundai: {
        origin: {
            poiId: "PO--ciu54dvc1767",
            floorId: "FL-1hruc84slp0td4627"
        },
        destination: {
            poiId: "PO-DGfrHThSL6717",
            floorId: "FL-1hruc84slp0td4627"
        },
    },
};

export const naviOption = {
    origin: {
        markerOptions: {
            // iconUrl: 'https://assets.dabeeomaps.com/image/btn_floor_up.png',
            width: 30,
            height: 30,
            positionZ: 100,
            visibleIcon: true,
            async: true,
            // anchor: {
            //   x: 1,
            //   y: 0.5,
            // },
        },
    }, // 출발지 아이콘 및 주행선
    destination: {
        markerOptions: {
            // iconUrl: 'https://assets.dabeeomaps.com/image/btn_floor_up.png',
            width: 30,
            height: 30,
            positionZ: 100,
            visibleIcon: false,
        },
        lineOptions: {
            lineColor: '#ffbb00',
            solidLineEnabled: true,
            solidLineWidth: 20,
        },
        showTag: true,
    }, // 도착지 아이콘 및 주행선
    wayPoints: [
        {
            markerOptions: {
                iconUrl: 'https://assets.dabeeomaps.com/image/btn_floor_up.png',
                width: 30,
                height: 30,
                positionZ: 100,
                visibleIcon: false,
            },
            lineOptions: {
                lineColor: '#ff00ff',
                solidLineEnabled: true,
                solidLineWidth: 30,
            },
        },
        {
            markerOptions: {
                iconUrl: 'https://assets.dabeeomaps.com/image/btn_floor_down_on.png',
                width: 30,
                height: 30,
                positionZ: 100,
                visibleIcon: true,
                async: true,
                anchor: {
                    x: 0.5,
                    y: 0.5,
                },
            },
            lineOptions: {
                lineColor: '#00ff53',
                lineSpotSize: 10,
                lineSpotInterval: 30,
                lineSpotAnimate: true,
                lineSpotAnimateSpeed: 0.08,
            },
        },
    ], // 경유지 아이콘 및 주행선
    defaultLineOption: {
        lineColor: '#0000ff',
        solidLineEnabled: true,
        solidLineWidth: 10,
    }, // 기본 주행선 옵션
    lineDivide: true, // 네비게이션 선 분할여부 결정 (false 인 경우, defaultLineOption 만 사용)
    lineZ: 100,
};

export const animOption = {
    // changeFloorDelay: 1000,
    destOption: {
        activeDest: true,
        color: '#00ffff',
        opacity: 0.3,
        isAnimate: true,
        duration: 1200,
        isRepeat: true,
        isYoyo: false,
    },
    speedRate: 100,
    removeIcon: false,
    markerOptions: {
        iconUrl: 'https://assets.dabeeomaps.com/image/ico/img_person-3x.png',
        width: 30,
        height: 30,
        positionZ: 120,
        async: true,
        //   anchor: {
        //     x: 0.5,
        //     y: 0.5,
        //   },
    },
};
