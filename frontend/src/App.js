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

/* TO DO:

  * Create an endpoint called landing page where the form is located. 
    Consider nesting it into an accordion

  * Create an endpoint to demonstrate the request sample, with the point of 
    helping the user know how to use each input field

  * (Possibly) create an authentication system to practice this skill

*/
