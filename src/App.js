import React from 'react';
import logo from './logo.svg';
import './App.css';
import FacebookLoginComponent from './facebooklogin.component';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Kamen</h1>
        <FacebookLoginComponent />
      </header>
    </div>
  );
}


export default App;
