import { useEffect } from 'react';
import styles from './GetStartedText.module.scss';

const GetStartedTextEn = () => {
    useEffect(() => {
        let codeElement = document.querySelectorAll('code');
        if (!codeElement) return;
        codeElement.forEach((data) => {
            let text = data.innerHTML;
            let text1 = text.replace(/&lt;/gi, '<');
            let text2 = text1.replace(/&gt;/gi, '>');
            let text3 = text2.replace(/[<>]/g, `<span>$&</span>`);
            let text4 = text3.replace(/['"]([^'"]*)["']/g, `<span class=${styles.value}>$&</span>`);
            let text5 = text4.replace(/ var | if | return| let | const | function | new | window| document| for /g, `<span class=${styles.reserved}>$&</span>`);
            let text6 = text5.replace(/[{}()]/g, `<span class=${styles.special}>$&</span>`);
            let text7 = text6.replace(/\/\/.+/g, `<span class=${styles.comment}>$&</span>`);
            data.innerHTML = text7;
        });
    }, []);

    return (
        <div className={styles.getStartedText}>
            <div className={styles.title}>Getting Started</div>
            <div className={styles.miniTitle}>1. Call Dabeeomaps API.</div>
            <div className={styles.texts}>
                * The official api link of Dabeeomaps JS API is{' '}
                <a href="https://dabeeomaps.com/" target="_blank">
                    [Dabeeomaps indoor map platform]
                </a>{' '}
                you can check it in.
            </div>
            <code className={styles.code}>{`<script type="text/javascript" src="[Dabeeomaps official api link]" ></script>`}</code>
            <div className={styles.miniTitle}>2. Obtain map authentication information from Dabeeomaps platform server.</div>
            <div className={styles.texts}>
                * To load a map from the API, you need to know the Client ID / Secret code of the map. Follow the steps below to check your information.
            </div>
            <p>
                1.{' '}
                <a href="https://dabeeomaps.com/" target="_blank">
                    [Dabeeomaps indoor map platform]
                </a>{' '}
                {`>`} indoor map {`>`} Go to map management menu
                <br />
                2. Click Map Information in the Map Management list.
                <br />
                3. Check the authentication access information in the detailed map information.
                <br />
                4. Enter the client ID and client secret in the code.
            </p>
            <div className={styles.texts}>The code to call mapData is as follows.</div>
            <pre>
                <code className={styles.code}>
                    {`const dabeeoMaps = new dabeeo.Maps();

const mapData = await dabeeoMaps.getMapData({
    clientId: [The clientId of the map to load],
    clientSecret: [clientSecret of the map to load]
});`}
                </code>
            </pre>
            <div className={styles.texts}>Call showMap based on the loaded mapData.</div>
            <pre>
                <code className={styles.code}>
                    const mapContainer = document.getElementById("viewport"); // div to display map
                    <br />
                    const mapOption = Object.assign(); // map options. If not present, default values ​​are assigned.
                    <br />
                    const map = await dabeeoMaps.showMap(mapContainer, mapOption, mapData); // show a map on the screen
                </code>
            </pre>
            <div className={styles.texts}>Here is an example of a map.</div>
        </div>
    );
};

export default GetStartedTextEn;
