'Use strict';
import React, { Component } from 'react';
import './App.css';
import foods from '../src/data/foods.json';
import Foodbox from './components/Foodbox';

class App extends Component {
  state = {
    foods
  }

  render() {
    const { foods } = this.state;
    return (
      <div className="App">
        <h2>IronNutrition</h2>
        {foods.map((food) => {
          return (
            <Foodbox data={food} key={food.image} />
          )
        })}
      </div>
    );
  }
}

export default App;
