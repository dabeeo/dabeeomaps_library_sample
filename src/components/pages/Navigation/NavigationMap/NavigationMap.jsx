import { useEffect, useState } from 'react';
import styles from './NavigationMap.module.scss';

const NavigationMap = ({ dabeeoMaps, mapData }) => {

  const [dabeeoMap, setDabeeoMap] = useState();

    const route = {
        origin: {
          poiId : "PO-4JvSQCWHC2270", // 남자화장실 (11층)
          floorId: "FL-t4vqgyek3jnb8146"
        },
        destination:  {
          poiId : "PO-M02DvTVjp8449", // 회의실1 (11층)
          floorId: "FL-t4vqgyek3jnb8146"
        },
        type: "recommendation",
        // type: "stairs",
        // type: "elevator",
        waypoints: [
          {
            poiId : "PO-NMvw3E0pe1690", // 플랫폼사업부 회의실 (11층)
            floorId: "FL-t4vqgyek3jnb8146"
          },
          {
            poiId : "PO-bG8eepPeB2502", // 여자화장실 (2층)
            floorId: "FL-vf3q07spbmsw8132" 
          }
        ],
        retResponse: true
      }

    useEffect(() => {
        async function viewMap() {
            const mapContainer = document.getElementById('viewport');
            const mapOption = Object.assign({
                canvasSize: {
                  width: 800,
                  height: 300,
                }
            });
            const map = await dabeeoMaps.showMap(mapContainer, mapOption, mapData);
            setDabeeoMap(map);
        }
        viewMap();
    }, [mapData]);

    function onRoute() {
        const naviOption = {
            lineColor:"#ff00ff",
            lineSpotSize: 12,
            lineZ : 200,
            speedRate: 50,
            solidLineEnabled: true,
            solidLineWidth: 3
        }

        dabeeoMap.routeSimulation.set(naviOption);
        dabeeoMap.routeSimulation.setRoute(route);
    }

    function onNav() {
        const animOption = {
            destOption:{
                activeDest: true,
                color: "#00ffff",
                opacity: 0.3,
                isAnimate: true,
                duration: 1200,
                isRepeat: true,
                isYoyo: false
            },
        };

        dabeeoMap.routeSimulation.draw(animOption);
    }

    return (
        <div className={styles.navigationMap} id='viewport'>
            <div className={styles.route} onClick={onRoute}>set Route</div>
            <div className={styles.navi} onClick={onNav}>on Navigation</div>
        </div>
    )
}

export default NavigationMap;