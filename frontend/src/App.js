import './App.css';
import Header from './components/header';
import React from 'react';

function App() {
  return (
    <div className='App'>
      <Header />
      <header>
        <h1>
          Heart Failure Prediction App
        </h1>
      </header>
      <div>
        <p>Made By Hargun Mujral</p>
        <a href="https://github.com/hargunmujral/Heart-Failure-Prediction">Link to Github Repo</a>
      </div>
    </div>
  );
}

export default App;
