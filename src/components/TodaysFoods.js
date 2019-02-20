import React, { Component } from 'react';

class TodaysFoods extends Component {

  render() {
    let totalCount = 0
    const foodlist = this.props.demFoodz
    return (
      <div className="column content">
      <h2 className="subtitle">Today's foods</h2>
      <ul>
        {foodlist.map((food, index) => {
          let calories = food[1] * food[2];
          totalCount = totalCount + calories;
          return <li key={index}>{`${food[2]} ${food[0]} = ${food[1] * food[2]} cal`}</li>
        })}
      </ul>
      <strong>Total: {totalCount} cal</strong>
    </div>
    );
  }
}

export default TodaysFoods;