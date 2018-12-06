'Use strict'
import React, { Component } from 'react';
import foods from '../data/foods.json';
import AddNewFoodForm from './AddNewFoodForm';
import Foodbox from './Foodbox';


class Foodlist extends Component {
  state = {
    foods
  }

  addNewFoodToList = (newFoodInfo) => {
    console.log('called in parent')
    const foods = this.state.foods
    foods.push(newFoodInfo)
    this.setState({ foods })
  }

  render() {
    const { foods } = this.state;
    return (
      <div>
        <AddNewFoodForm handleSubmit={this.addNewFoodToList} />
        {foods.map((food, index) => {
          return (
            <Foodbox data={food} index={index} key={food.image} />
          )
        })}
      </div>
    );
  }
}

export default Foodlist;