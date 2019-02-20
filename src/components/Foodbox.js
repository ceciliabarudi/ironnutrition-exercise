"Use strict";

import React, { Component } from "react";

class Foodbox extends Component {
  state = {
    name: this.props.data.name,
    calories: this.props.data.calories,
    quantity: 0
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      quantity: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, calories, quantity } = this.state;
    if (quantity > 0) {
      this.props.countCals([ name, calories, quantity ]);
      this.setState({
        quantity: 0
      });
    }
  };
  render() {
    const { name, calories, image } = this.props.data;
    const { quantity } = this.state;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt={name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <form onSubmit={this.handleSubmit}>
                <input
                  onChange={this.handleInputChange}
                  className="input"
                  value={quantity}
                  type="number"
                  name="quantity"
                />
                <div className="control">
                  <button
                    type="submit"
                    value="submit"
                    className="button is-info"
                  >
                    +
                  </button>
                </div>
              </form>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Foodbox;
