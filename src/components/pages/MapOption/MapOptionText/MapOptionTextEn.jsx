import styles from './MapOptionText.module.scss';

const MapOptionTextEn = () => {
    return (
        <div className={styles.mapOptionText}>
            <div className={styles.title}>map Options</div>
            <div className={styles.miniTitle}>You can adjust the state of the map by adding options when drawing the map.</div>
            <div className={styles.texts}>mapOption can receive the following values.</div>
            <pre>
                <code className={styles.code}>
{`
let mapOptions = {
    canvasSize: {                               // Resizes the Canvas to its width and height.
        width: number, 
        height: number 
    },
    canvasFitTo: HTMLElement | null,            // If canvasFitTo is null, change the size of the renderer to the size of the HTMLelement if it is not null.
    isPoiSprite: boolean,                       // Make Poi always face-to-face. 
    language: 'ko' | 'en',                      // Initial poi language setting 
    camera: '2d' | '3d',                        // Initial camera mode 3d
    zoom: number,                               // Initial zoom setting
    maxZoom: number,                            // Set max zoom level
    minZoom: number,                            // Set min zoom level
    floor: string,                              // Floor information to be applied
    theme: string,                              // About the theme to be applied
    showPoi: boolean,                           // Whether to show poi on the map or not. default is true
    controlDrag: {                              // Set the user's mouse button when moving the map. 'left' | It has the value 'right'. default = 3d: right, 2d = left
        "3d": string,
        "2d": string
    },
    rotationTouch2d: boolean,                   // Decide whether the user will enable/disable the rotation function by touch in 2d. 
    rotationMouse2d: boolean,                   // Determines whether the user will enable/disable rotation with the mouse in 2d.
    controlZoom: boolean,                       // Determines whether the user will enable/disable map zoom with the mouse wheel.
    poiLevel: any[],                            // Set to show according to the map zoom percentage set according to the poi importance. ex) poiLevel = 50 => Set to show from zoom 50 or higher
    fontWeight: {                               // Poi Title font style
        normal: number,                         // poi title font normal default = 1(100%)
        bold: number                            // poi title font bold default = 1(100%)
    },
    poiSpriteKeppRotation: boolean,             // Whether to keep original angle when drawing with POI sprite
    panningPercent: number,                     // Percentage that the camera can move relative to groupBox3 (0.05 to 1)
    tiltLimitAngle: number,                     // Set the tilt threshold.
    center: {                                   // initial center coordinates
        x: number,                              // coordinates x in the map
        y: number                               // coordinate y in the map
    },
    angle: {                                    // angle when in 3d mode
        vertical: number,                       // underlay
        horizontal: number,                     // horizontal slope
        fixed: boolean                          // fixed or not
    }
};
`}
                </code>
            </pre>
            <div className={styles.texts}>You can try adjusting the map options in the map below.</div>
        </div>
    )
}

export default MapOptionTextEn;