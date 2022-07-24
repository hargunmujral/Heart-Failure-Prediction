import Header from './components/header';
import SubmitForm from './components/form';
import React from 'react';
import HeaderBreak from './components/headerbreak';

function Home() {
  return (
    <div>
      <HeaderBreak />
        <h1>
            Form
        </h1>
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

export default Home;