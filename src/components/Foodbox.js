'Use strict';

import React, { Component } from 'react';
import Quantity from './Quantity'

class Foodbox extends Component {

  doThisLater = (quantity) => {
    console.log('Do this later in iteration 5')
    console.log(quantity)
  }

  render() {
    const { name, calories, image, quantity } = this.props.data
    const index = this.props.index
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
          <small>{calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <Quantity onSubmit={this.doThisLater} quantity={quantity} index={index} />
    </div>
  </article>
      </div>
    );
  }
}

export default Foodbox;