import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dillon Ridge Vistas</h1>
        </header>
          <img src={require('./assets/dillon.svg')} alt="logo" />
          <img src={require('./assets/first.svg')} alt="logo" />
          <img src={require('./assets/second.svg')} alt="logo" />
          <img src={require('./assets/third.svg')} alt="logo" />
        <footer>
          Stuff goes here
        </footer>
      </div>
    );
  }
}

export default App;
