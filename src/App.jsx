import { useState } from 'react';
import './App.css';
import Bracket from './components/Bracket';

const App = () => {

  return (
    <div className="App">
      <h1>Worlds 2023 Swiss Stage</h1>
      <Bracket/>
    </div>
  );
};

export default App;
