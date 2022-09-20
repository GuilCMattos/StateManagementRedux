import logo from './logo.svg';
import './App.css';
import React from 'react';


import Interval from './components/Interval';
import Media from './components/Media';
import Soma from './components/Soma';
import Sort from './components/Sort';

function App() {

  return (
    <div className="App">
      <h1>Exercício React-Redux(simples)</h1>

      <div className='linha'>
      <Interval>  </Interval>
      
      </div>

      <div className='linha'>
      <Media />
      <Soma />
      <Sort />

      </div>
    
    </div>
  );
}

export default App;
