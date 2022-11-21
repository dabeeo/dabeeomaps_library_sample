import styles from './GetStartedText.module.scss';
import { useEffect } from 'react';
import text from './GetStartedText copy';

const GetStartedText = () => {
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

    return text;
};
export default GetStartedText;
