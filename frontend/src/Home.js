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
      <HeaderBreak />
      <HeaderBreak />
      <HeaderBreak />
      <HeaderBreak />
    </div>
  );
}

export default Home;

// Remove the header breaks, currently just there to demonstrate the page extends