// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
// import './assets/css/custom.css';
// import './assets/css/layout-dark.css';
// import './assets/css/layout-rtl.css';
// import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <NavbarComp></NavbarComp>
    </div>
  );
}

export default App;
