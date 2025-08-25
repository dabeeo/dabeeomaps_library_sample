import styles from '../GetText/GetText.module.scss';

const MarkerTextEn = (
    <div className={styles.getStartedText}>
        <div className={styles.title}>Marker</div>
        <div className={styles.miniTitle}>You can create or delete markers at desired coordinates.</div>
        <p>
            You can position each marker and assign the desired icon to each marker.
            <br />
            If you do not enter any other values ​​except for position, the default value is used.
            <br />
            It receives an argument in the form of an array to designate multiple markers.
            <br />
            When drawing markers on only one floor, floor information is omitted, but if you want to display markers on multiple floors at once, you must designate a floor ID for
            each marker.
            <br />
            Even if the map is expressed in 2D, the coordinates of the markers must be given in 3D. This is because the map data is basically in 3D.
            <br />
            The properties of the marker are as in the example below.
        </p>
        <pre>
            <code className={styles.code}>
                {`{
    x: number;              /* x-coordinate of the marker position */
    y: number;              /* y-coordinate of the marker position */
    fixedSize?: boolean;    /* Whether the marker size remains constant regardless of zoom level. Default is true (size changes with zoom). If false, the marker size is fixed according to the input dimensions */
    animate?: {             /* animate: marker icon animation settings */
        duration?: number;  /** duration: (optional) animation cycle duration */
        repeat?: number;    /** repeat: (optional) number of animation repetitions. If undefined, animation repeats infinitely */
        opacity?: number;   /** opacity: (optional) animation opacity (decimal) min: 0, max: 1 */
    };
    textOption?: {
        text?: string;           /** Text displayed below the marker */
        fontSize?: number;       /** Font size of the text */
        fontWeight?: number;     /** Font weight of the text */
        opacity?: number;        /** Opacity of the text */
        letterSpacing?: number;  /** Letter spacing */
        lineSpacing?: number;    /** Line spacing */
        align?: string;          /** Text alignment (LEFT | MIDDLE | RIGHT) */
        color?: string;          /** Text color */
        padding?: {              /** Text padding (horizontal & vertical) */
            horizontal: number;
            vertical: number;
        };
        strokeStyle?: {
            color?: string;        /** Text outline color */
            width?: number;        /** Text outline width */
            opacity?: number;      /** Text outline opacity */
        };
        backgroundStyle?: {
            opacity?: number;      /** Background highlight opacity */
            color?: string;        /** Background highlight color */
            borderRadius?: number; /** Background border radius */
        };
    }
    iconOption?: {
        iconUrl?: string;    /** URL of the marker image */
        width?: number;      /** Marker width */
        height?: number;     /** Marker height */
        anchor?: {           /** Anchor point of the marker (left/bottom is 0,0 and right/top is 1,1) */
            x: number;
            y: number;
        },
    floorId?: string,                        // Floor ID of the marker. Defaults to the current floor if not specified
    data?: any,                              // Additional data returned when the marker is clicked
}`}
            </code>
        </pre>
        <div className={styles.texts}>The method to draw a marker is as follows.</div>
        <pre>
            <code className={styles.code}>
                {`
    const id = await map.markers.set({
        marker: [
            {
                x: 100,
                y: 200,
                iconOption: {
                    positionZ: 400
                },
            },
        ],
    })
`}
            </code>
        </pre>
        <div className={styles.texts}>The methods related to marker deletion are as follows. Delete all markers on the map.</div>
        <pre>
            <code className={styles.code}>map.markers.clear();</code>
        </pre>
        <div className={styles.texts}>Here is a running example</div>
    </div>
);

export default MarkerTextEn;
