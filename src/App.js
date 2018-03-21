import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ViewFloorPlans from './components/ViewFloorPlans';
import Contact from './components/Contact';
import NavArea from './components/NavArea';
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
          </div>
          <div className="info-area">
            <h1 className="app-title">Dillon Ridge VISTAS</h1>
            <h1 className="app-title">Leasing Now for the Summer of 2018</h1>
            <div className="button-links">
              <NavArea />
              <Route exact path="/viewfloorplans" component={ViewFloorPlans} key="ViewFloorPlans" />
              <Route exact path="/contact" component={Contact} key="Contact" />
            </div>      
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
