'Use strict';
import React, { Component } from 'react';

class Quantity extends Component {
  state = {
    quantity : 0
  }

handleInputChange = (event) => {
  this.setState({ 
    quantity: event.target.value 
  }) 
}

handleSubmit = (event) => {
  event.preventDefault()
  const quantity = this.state
  this.props.onSubmit(quantity)
  this.setState({
    quantity: 0
  })
}

  render() {
    const quantity = this.state.quantity
    return (
      <div className="field has-addons">
        <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleInputChange} className="input" value={quantity}
        type="number" name="quantity" />
        <div className="control">
          <button type="submit" value="submit" className="button is-info">
            +
          </button>
        </div>
        </form>
      </div>
      
    );
  }
}

export default Quantity;