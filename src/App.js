import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="app-header">
          <h1 className="app-title">Dillon Ridge VISTAS</h1>
        </header>
          <img src={require('./assets/dillon.svg')} alt="logo" />

        <footer className="app-footer">
          <h1 className="app-title">Leasing Now for the Summer of 2018</h1>      
        </footer>
      </div>
    );
  }
}

export default App;
