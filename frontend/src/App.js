import './App.css';
import Header from './components/header';
import SubmitForm from './components/form';
import React from 'react';

function App() {
  return (
    <div className='App'>
      <Header />
      <br />
      <br />
      <br />
      <div useStyle={{ display: "flex", justifyContent: "space-between" }}>
        <SubmitForm />
      </div>
      <div>
        <p>Made By Hargun Mujral</p>
        <a href="https://github.com/hargunmujral/Heart-Failure-Prediction">Link to Github Repo</a>
      </div>
    </div>
  );
}

export default App;
