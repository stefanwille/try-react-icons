import React from 'react';
import './App.css';

import { IoIosAlarm } from "react-icons/io";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IoIosAlarm className="App-logo" style={{width: 200}} alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
