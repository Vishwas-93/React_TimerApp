import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from '../src/components/timer_component'

class App extends Component {
  render() {
    console.log(Date.now())
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
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
          </a> */}

          <div className="timer"><Timer/></div>
        </header>
      </div>
    );
  }
}

export default App;
