'Use strict';

import React, { Component } from 'react';

class Foodbox extends Component {
  render() {
    return (
      <div className="box">
        <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={this.props.data.image} alt={this.props.data.name} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{this.props.data.name}</strong> <br />
          <small>{this.props.data.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="number" 
            value="1"
          />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
      </div>
    );
  }
}

export default Foodbox;