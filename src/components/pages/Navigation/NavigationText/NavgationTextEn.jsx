import styles from './NavigationText.module.scss';

const NavigationTextEn = () => {
    return(
        <div className={styles.navigationText}>
            <div className={styles.title}>Navigation</div>
            <div className={styles.miniTitle}>You can set the route from the origin to the destination on the map and receive guidance.</div>
            <p>
                After setting the route on the map, you can set the simulation driving animation that draws and moves the route.<br />
            </p>
            <div className={styles.texts}>You can set options for the route via map.routeSimulation.set.</div>
            <pre>
                <code className={styles.code}>
                    {`
    const naviOption = {
        lineColor:"#ff00ff",        // Specifies the color of the navigation driving line
        lineSpotSize: number,       // Specifies the thickness of the points on the driving line. Applies when the driving line property is dotted line.
        lineZ : number,             // Specifies the z-axis value of the travel line.
        speedRate: number,          // Designation of simulated driving speed. For example, if 1.5 is specified, the speed is 1.5 times faster than the default.
        solidLineEnabled: true,     // Determines the properties of the driving line. When false, it is drawn with a dotted line, and when true, it is drawn with a solid line. default is false.
        solidLineWidth: number      // The thickness of the solid line. default is 1
    }

    map.routeSimulation.set(naviOption);
                    `}
                </code>
            </pre>
            <div className={styles.texts}>You can set the route via map.routeSimulation.setRoute. You have to use it asynchronously.</div>
            <pre>
                <code className={styles.code}>
                    {`
    routeOption = {
        origin: {                               // Starting point
            poiId: [Origin POI ID] or position: { x: number, y: number, z: number},
            floorId: [Floor ID of origin]
        },
        destination:  {                         // destination
            poiId: [Destination POI ID] or position: { x: number, y: number, z: number},
            floorId: [Floor ID of destination]
        },
        type: "recommendation",                 // Inter-floor movement path (recommendation - recommended, stairs - stairs, elevator - elevator)
        waypoints: [                            // waypoint
            {
                poiId: [Waypoint POI ID] or position: { x: number, y: number, z: number},
                floorId: [Floor ID of waypoints]
            }
        ],
        retResponse: boolean                    // Option for the return value, if set to true, the required time and distance are returned. If false, only the required time is returned.
    }

    map.routeSimulation.setRoute(routeOption);
                    `}
                </code>
            </pre>
            <p>
                You can run simulation driving animations through map.routeSimulation.draw.<br />
                It must be executed after setting the route through setRoute.
            </p>
            <pre>
                <code className={styles.code}>
                    {`
    const animOption = {
        destOption: {                   //  destination option
            activeDest: boolean,        //  active or not
            color: "#00ffff",           //  The color value you want to change
            opacity: number,            //  Transparency value you want to change
            isAnimate: boolean,         //  Whether to apply color animation effects
            duration: number,           //  Time to complete animation in milliseconds, the default is 1000
            isRepeat: boolean,          //  Whether the animation repeats true is repeat, false is repeat x. default is false
            isYoyo: boolean             //  When the animation is complete, if the isRepeat option is true, the repeat method, if true, the reverse order is performed, and the default is false.
        },
        zoom: number,                   //  Zoom Level during animation operation
        changeFloorDelay: number        //  Delay time when changing floors
    }
    map.routeSimulation.draw(animOption);`}
                </code>
            </pre>
            <div className={styles.texts}>You can stop navigation while it is running through the following method</div>
            <code className={styles.code}>map.routeSimulation.stop();</code>
            <div className={styles.texts}>You can delete a route using the following method</div>
            <code className={styles.code}>map.routeSimulation.clear();</code>
            <div className={styles.texts}>Use getNavigation() to return a list of directions for directions.</div>
            <code className={styles.code}>map.routeSimulation.getNavigation();</code>
        </div>
    )
}

export default NavigationTextEn;