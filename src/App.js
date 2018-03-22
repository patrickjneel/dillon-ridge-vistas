import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ViewFloorPlans from './components/ViewFloorPlans';
import Contact from './components/Contact';
import NavArea from './components/NavArea';
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top"></div>
          <Route path="/" component={NavBar} key="NavBar" />
          <Route exact path="/" component={NavArea} key="NavArea" />
          <Route exact path="/viewfloorplans" component={ViewFloorPlans} key="ViewFloorPlans" />
          <Route exact path="/contact" component={Contact} key="Contact" />
        <div className="top"></div>
      </div>
    );
  }
}

export default App;
