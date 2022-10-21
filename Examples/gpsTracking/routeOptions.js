export const routeOptions = {
//이동수단 복수개 지정
stairs: {
  origin: {
    poiId: "PO-4JvSQCWHC2270", // 남자화장실 (11층)
    floorId: "FL-t4vqgyek3jnb8146",
  },
  destination: {
    poiId: "PO-M02DvTVjp8449", // 회의실1 (11층)
    floorId: "FL-t4vqgyek3jnb8146",
  },
  type: ["stairs"],
  waypoints: [
    {
      poiId: "PO-NMvw3E0pe1690", // 플랫폼사업부 회의실 (11층)
      floorId: "FL-t4vqgyek3jnb8146",
    },
    {
      poiId: "PO-bG8eepPeB2502", // 여자화장실 (2층)
      floorId: "FL-vf3q07spbmsw8132",
    }
  ],
},
elevator: {
  origin: {
    poiId: "PO-4JvSQCWHC2270", // 남자화장실 (11층)
    floorId: "FL-t4vqgyek3jnb8146",
  },
  destination: {
    poiId: "PO-M02DvTVjp8449", // 회의실1 (11층)
    floorId: "FL-t4vqgyek3jnb8146",
  },
  type: ["elevator"],
  waypoints: [
    {
      poiId: "PO-NMvw3E0pe1690", // 플랫폼사업부 회의실 (11층)
      floorId: "FL-t4vqgyek3jnb8146",
    },
    {
      poiId: "PO-bG8eepPeB2502", // 여자화장실 (2층)
      floorId: "FL-vf3q07spbmsw8132",
    }
  ],
},
  
    multiType: {
        origin: {
            poiId: "PO-4JvSQCWHC2270", // 남자화장실 (11층)
            floorId: "FL-t4vqgyek3jnb8146",
        },
        destination: {
            poiId: "PO-M02DvTVjp8449", // 회의실1 (11층)
            floorId: "FL-t4vqgyek3jnb8146",
        },
        type: ["recommendation", "stairs", "elevator"],
        waypoints: [
            {
                poiId: "PO-NMvw3E0pe1690", // 플랫폼사업부 회의실 (11층)
                floorId: "FL-t4vqgyek3jnb8146",
            },
            {
                poiId: "PO-bG8eepPeB2502", // 여자화장실 (2층)
                floorId: "FL-vf3q07spbmsw8132",
            },
        ],
    },
    errorRoute: {
        origin: {
            poiId: "PO-bG8eepPeB2502", // 여자화장실 (2층)
            floorId: "FL-vf3q07spbmsw8132",
        },
        destination: {
            poiId: "PO-bG8eepPeB2502", // 여자화장실 (2층)
            floorId: "FL-vf3q07spbmsw8132",
        },
        type: ["recommendation"],
    },
    up: {
        origin: {
            poiId: "PO-bG8eepPeB2502", // 여자화장실 (2층)
            floorId: "FL-vf3q07spbmsw8132",
        },
        destination: {
            poiId: "PO-NMvw3E0pe1690", // 플랫폼사업부 회의실 (11층)
            floorId: "FL-t4vqgyek3jnb8146",
        },
        type: ["recommendation"],
        waypoints: [
            {
                poiId: "PO-NMvw3E0pe1690", // 플랫폼사업부 회의실 (11층)
                floorId: "FL-t4vqgyek3jnb8146",
            },
            {
                poiId: "PO-WgCv1-qBo8094", // 사업전략부 (11층)
                floorId: "FL-t4vqgyek3jnb8146",
            },
        ],
    },
    upDown: {
        origin: {
            poiId: "PO-bG8eepPeB2502", // 여자화장실 (2층)
            floorId: "FL-vf3q07spbmsw8132",
        },
        destination: {
            poiId: "PO-9InVzIGv20417", // 남자화장실 (2층)
            floorId: "FL-vf3q07spbmsw8132",
        },
        type: ["recommendation"],
        waypoints: [
            {
                poiId: "PO-NMvw3E0pe1690", // 플랫폼사업부 회의실 (11층)
                floorId: "FL-t4vqgyek3jnb8146",
            },
            {
                poiId: "PO-WgCv1-qBo8094", // 사업전략부 (11층)
                floorId: "FL-t4vqgyek3jnb8146",
            },
        ],
    },
    down: {
        origin: {
            poiId: "PO-4JvSQCWHC2270", // 남자화장실 (11층)
            floorId: "FL-t4vqgyek3jnb8146",
        },
        destination: {
            poiId: "PO-bG8eepPeB2502", // 여자화장실 (2층. 모의주행 중 층변경 테스트 목적)
            floorId: "FL-vf3q07spbmsw8132",
        },
        type: ["recommendation"],
        waypoints: [
            {
                poiId: "PO-NMvw3E0pe1690", // 플랫폼사업부 회의실 (11층)
                floorId: "FL-t4vqgyek3jnb8146",
            },
            {
                poiId: "PO-9InVzIGv20417", // 남자화장실 (2층)
                floorId: "FL-vf3q07spbmsw8132",
            },
        ],
    },
    downUp: {
        origin: {
            poiId: "PO-4JvSQCWHC2270", // 남자화장실 (11층)
            floorId: "FL-t4vqgyek3jnb8146",
        },
        destination: {
            poiId: "PO-M02DvTVjp8449", // 회의실1 (11층)
            floorId: "FL-t4vqgyek3jnb8146",
        },
        type: ["recommendation"],
        // type: ["stairs"],
        // type: ["elevator"],
        waypoints: [
            {
                poiId: "PO-NMvw3E0pe1690", // 플랫폼사업부 회의실 (11층)
                floorId: "FL-t4vqgyek3jnb8146",
            },
            {
                poiId: "PO-bG8eepPeB2502", // 여자화장실 (2층)
                floorId: "FL-vf3q07spbmsw8132",
            },
        ],
    },
    doubleFloor: {
        origin: {
            poiId: "PO-4JvSQCWHC2270", // 남자화장실 (11층)
            floorId: "FL-t4vqgyek3jnb8146",
        },
        destination: {
            poiId: "PO-bG8eepPeB2502", // 여자화장실 (2층)
            floorId: "FL-vf3q07spbmsw8132",
        },
        type: ["recommendation"],
        // type: ["stairs"],
        // type: ["elevator"],
    },
    singleFloor: {
        origin: {
            poiId: "PO-4JvSQCWHC2270", // 남자화장실 (11층)
            floorId: "FL-t4vqgyek3jnb8146",
        },
        destination: {
            poiId: "PO-M02DvTVjp8449", // 회의실1 (11층)
            floorId: "FL-t4vqgyek3jnb8146",
        },
        type: ["recommendation"],
        waypoints: [
            {
                poiId: "PO-NMvw3E0pe1690", // 플랫폼사업부 회의실 (11층)
                floorId: "FL-t4vqgyek3jnb8146",
            },
            {
                poiId: "PO-WgCv1-qBo8094", // 사업전략부 (11층)
                floorId: "FL-t4vqgyek3jnb8146",
            },
        ],
    },
    stonebrea1: {
        origin: {
            position: {x: 3000, y: 1000, z: 10},
            floorId: "FL-rhg41w7x6vy15369",
        },
        destination: {
            position: {x: 1000, y: 4000, z: 10},
            floorId: "FL-rhg41w7x6vy15369",
        },
        type: ["recommendation"],
        waypoints: [
            {
                position: {x: 2500, y: 2500, z: 10},
                floorId: "FL-rhg41w7x6vy15369",
            },
            {
                position: {x: 1000, y: 1300, z: 10},
                floorId: "FL-rhg41w7x6vy15369",
            },
        ],
    },
    stonebrea2: {
        origin: {
            poiId: "PO-pj_ZnnxgP3527",
            floorId: "FL-rhg41w7x6vy15369",
        },
        destination: {
            poiId: "PO-wHBP0M02D8080",
            floorId: "FL-rhg41w7x6vy15369",
        },
        type: ["recommendation"],
        waypoints: [
            {
                poiId: "PO-1-KsQDd4d4610",
                floorId: "FL-rhg41w7x6vy15369",
            },
            {
                poiId: "PO-CTp2GiX216388",
                floorId: "FL-rhg41w7x6vy15369",
            },
        ],
    },
    mergedMesh: {
        origin: {
            poiId: "PO-f8vJQCqQu4019",
            floorId: "FL-s4p4cv32e5gy2500",
        },
        destination: {
            poiId: "PO-EPI-L2vme6633",
            floorId: "FL-s4p4cv32e5gy2500",
        },
        type: ["recommendation"],
        waypoints: [
            {
                poiId: "PO-Fss-i6RV01863",
                floorId: "FL-s4p4cv32e5gy2500",
            },
            {
                poiId: "PO-lcCAUrGGl9460",
                floorId: "FL-s4p4cv32e5gy2500",
            },
        ],
    },
    gongdeok: {
      origin: {
        poiId: "PO-ejPr3RRiv8155", // 마포T타운
        floorId: "FL-s4p4cv32e5gy2500"
      },
      destination:  {
        poiId: "PO-OscIB428A9697", // 카페
        floorId: "FL-s4p4cv32e5gy2500"
      },
      type: ["recommendation"],
    }
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
      }
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
          lineColor: "#ffbb00",
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
              lineColor: "#ff00ff",
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
              lineColor: "#00ff53",
              lineSpotSize: 10,
              lineSpotInterval: 30,
              lineSpotAnimate: true,
              lineSpotAnimateSpeed: 0.08,
          },
      },
  ], // 경유지 아이콘 및 주행선
  defaultLineOption: {
      lineColor: "#0000ff",
      solidLineEnabled: true,
      solidLineWidth: 10,
  }, // 기본 주행선 옵션
  lineDivide: true, // 네비게이션 선 분할여부 결정 (false 인 경우, defaultLineOption 만 사용)
  lineZ: 100,
}

export const animOption = {
  // changeFloorDelay: 1000,
  destOption: {
      activeDest: true,
      color: "#00ffff",
      opacity: 0.3,
      isAnimate: true,
      duration: 1200,
      isRepeat: true,
      isYoyo: false
  },
  speedRate: 100,
  removeIcon: false,
  markerOptions: {
    iconUrl: "https://assets.dabeeomaps.com/image/ico/img_person-3x.png",
    width: 30,
    height: 30,
    positionZ: 120,
    async: true,
  //   anchor: {
  //     x: 0.5,
  //     y: 0.5,
  //   },
  },
}

