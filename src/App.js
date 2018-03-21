import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top">
        </div>
        <header className="app-footer">
        </header>
        <div className="all-info">
          <div className="welcome-area">
            <div className="welcome-image"></div>
            <div className="plaid-image"></div>
          </div>
          <div className="info-area">
            <h1 className="app-title">Dillon Ridge VISTAS</h1>
            <h1 className="app-title">Leasing Now for the Summer of 2018</h1>      
          </div>
        </div>
        <footer className="app-footer">
        </footer>
        <div className="top">
        </div>
      </div>
    );
  }
}

export default App;
