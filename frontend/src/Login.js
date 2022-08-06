import Header from './components/header';
import SubmitLogin from './components/user';
import React from 'react';
import HeaderBreak from './components/headerbreak';

function Login() {
  return (
    <div>
      <HeaderBreak />
        <h1>
            Sign In
        </h1>
      <div useStyle={{ display: "flex", justifyContent: "space-between" }}>
        <SubmitLogin />
      </div>
      <HeaderBreak />
      <HeaderBreak />
      <HeaderBreak />
      <HeaderBreak />
    </div>
  );
}

export default Login;

// Remove the header breaks, currently just there to demonstrate the page extends