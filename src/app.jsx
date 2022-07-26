import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import styles from './app.module.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Example from './components/pages/Example/Example';

function App() {
  const [lang, setLang] = useState('ko');

  const dabeeoMaps = new window.dabeeo.Maps();

  return (
    <div className={styles.app}>
      <Routes>
        <Route path='*' element={<div>
          <Header setLang={setLang}/>
          <Main lang={lang} dabeeoMaps={dabeeoMaps}/>
        </div>} 
        />
        <Route path='/example' element={<Example />} />
      </Routes>
    </div>
  );
}

export default App;
