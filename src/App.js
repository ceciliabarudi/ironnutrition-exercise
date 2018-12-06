'Use strict';
import React, { Component } from 'react';
import './App.css';
import Foodlist from './components/Foodlist'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>IronNutrition</h2>
        <Foodlist/>
      </div>
    );
  }
}

export default App;
