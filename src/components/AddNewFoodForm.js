'Use strict'
import React, { Component } from 'react';

class AddNewFoodForm extends Component {
  state = {
    name:'',
    calories: 0,
    image: ''
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    const { name, calories, image } = this.state
    this.props.handleSubmit({name, calories, image})
    this.setState({
      name:'', calories: 0, image: ''
    })
  }

  render() {
    const { name, calories, image } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInputChange} value={name} name="name" type="text"/>
          <input onChange={this.handleInputChange} value={calories} name="calories" type="number"/>
          <input onChange={this.handleInputChange} value={image} name="image" type="text" placeholder="paste image URL here"/>
          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
}

export default AddNewFoodForm;