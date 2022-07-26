import { useState } from 'react';
import styles from './Example.module.scss';

const Example = () => {

  const [link, setLink] = useState('getStarted');

  function onClick(e) {
    const lists = document.getElementById('lists');
    lists.childNodes.forEach((list) => {
      list.style.backgroundColor = 'white';
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
      <ul id='lists' className={styles.lists}>
        <li onClick={onClick} style={{ backgroundColor: 'black', color: 'white', fontWeight: 'bold'}}>getStarted</li>
        <li onClick={onClick}>controls</li>
        <li onClick={onClick}>mapContext</li>
        <li onClick={onClick}>marker</li>
        <li onClick={onClick}>myLocation</li>
        <li onClick={onClick}>navigation</li>
        <li onClick={onClick}>tag</li>
      </ul>
      <iframe src={`https://dabeeo.github.io/dabeeomaps_library_sample/src/components/Examples/${link}/index.html`}></iframe>
    </div>
  )
}

export default Example;