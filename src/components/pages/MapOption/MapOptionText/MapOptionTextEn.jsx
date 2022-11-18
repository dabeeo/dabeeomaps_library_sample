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
    camera: '2d' | '3d',                        // Initial camera mode 3d
    floor: string,                              // Floor information to be applied
    theme: string,                              // About the theme to be applied
    language: 'ko' | 'en',                      // Initial poi language setting 
    showPoi: boolean,                           // Whether to show poi on the map or not. default is true
    poiSpriteEnable: boolean,                   // Make Poi always face-to-face. 
    poiSpriteKeepRotation: boolean,             // Whether to keep original angle when drawing with POI sprite
    },
    controlOption: {
        zoom: 100,                                //initial zoom value 
        pan: {                                  //center position 
            x: number,
            y: number
        },
        rotate: 0,                              //rotation
        tilt: 0                                 //tilt
    },
};
`}
                </code>
            </pre>
            <div className={styles.texts}>You can try adjusting the map options in the map below.</div>
        </div>
    );
};

export default MapOptionTextEn;
