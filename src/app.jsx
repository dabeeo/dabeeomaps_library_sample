import { useEffect, useState } from 'react';
import styles from './app.module.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const [lang, setLang] = useState('ko');

  const dabeeoMaps = new window.dabeeo.Maps();

  return (
    <div className={styles.app}>
      <Header setLang={setLang}/>
      <Main lang={lang} dabeeoMaps={dabeeoMaps}/>
    </div>
  );
}

export default App;
