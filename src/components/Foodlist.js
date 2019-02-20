"Use strict";
import React, { Component } from "react";
import foods from "../data/foods.json";
import AddNewFoodForm from "./AddNewFoodForm";
import Foodbox from "./Foodbox";
import TodaysFoods from "./TodaysFoods";

class Foodlist extends Component {
  //save your original state
  
  state = {
    foods,
    foodArr: [],
    input: ''
  };

  handleChange = event => {
    const searched = []
    event.preventDefault();
    foods.filter(food => {
      if (food.name.includes(event.target.value)) {
        searched.push(food)
      }
      return searched
    })
    console.log(searched)
    this.setState({
      input: event.target.value
    })
  }

  addNewFoodToList = newFoodInfo => {
    const foods = this.state.foods;
    foods.push(newFoodInfo);
    this.setState({ foods });
  };

  getTodaysFoods = food => {
    this.setState({
      foodArr: [...this.state.foodArr, food]
    });
  };

  render() {

    const { foods, input } = this.state;
    return (
      <div>
        <input type="text" value={input} onChange={this.handleChange}/>
        <TodaysFoods demFoodz={this.state.foodArr} />
        <AddNewFoodForm handleSubmit={this.addNewFoodToList} />
        {foods.map((food, index) => {
          return (
            <Foodbox
              data={food}
              index={index}
              key={food.image}
              countCals={this.getTodaysFoods}
            />
          );
        })}
      </div>
    );
  }
}

export default Foodlist;
