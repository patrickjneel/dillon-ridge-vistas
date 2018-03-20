import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top">
        </div>
        <header className="app-header">
          <h1 className="app-title">Dillon Ridge VISTAS</h1>
        </header>
          <img className="welcome-image" src={require('./assets/dillon.svg')} alt="logo" />
        <footer className="app-footer">
          <h1 className="app-title">Leasing Now for the Summer of 2018</h1>      
        </footer>
        <div className="top">
        </div>
      </div>
    );
  }
}

export default App;
