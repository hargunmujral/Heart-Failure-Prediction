import './App.css';
import Header from './components/header';
import SubmitForm from './components/form';
import React from 'react';
import Home from './Home';
import About from './About';
import Footer from './components/footer';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
      </Routes>
      <Footer />
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

  * improve the form look

*/
