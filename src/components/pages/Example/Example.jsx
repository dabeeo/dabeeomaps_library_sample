import { useState } from 'react';
import styles from './Example.module.scss';

const Example = () => {

  const [link, setLink] = useState('getStarted');

  function onClick(e) {
    const lists = document.getElementById('lists');
    lists.childNodes.forEach((list) => {
      list.style.backgroundColor = 'whitesmoke';
      list.style.color = 'black';
      list.style.fontWeight = 'normal';
    });
    e.target.style.backgroundColor = 'black';
    e.target.style.color = 'white';
    e.target.style.fontWeight = 'bold';
    setLink(e.target.innerText);
  }

  return (
    <div className={styles.example}>
      <div className={styles.header}>DabeeoMaps Example</div>
      <div className={styles.body}>
        <ul id='lists' className={styles.lists}>
          <li onClick={onClick} style={{ backgroundColor: 'black', color: 'white', fontWeight: 'bold'}}>getStarted</li>
          <li onClick={onClick}>controls</li>
          <li onClick={onClick}>mapContext</li>
          <li onClick={onClick}>marker</li>
          <li onClick={onClick}>myLocation</li>
          <li onClick={onClick}>navigation</li>
          <li onClick={onClick}>tag</li>
        </ul>
        <iframe src={`https://dabeeo.github.io/dabeeomaps_library_sample/Examples/${link}/index.html`}></iframe>
      </div>
      <a className={styles.viewCode} href={`https://github.com/dabeeo/dabeeomaps_library_sample/blob/master/Examples/${link}/index.html`} target='_blank'>코드로 보기</a>
    </div>
  )
}

export default Example;