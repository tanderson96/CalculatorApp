import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator/Calculator';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Calculator/>
      </div>
    );
  }
}

export default App;
