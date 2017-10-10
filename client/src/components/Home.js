import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  searchRestaurant(event){
    console.log(event.target.value)
    this.setState({
      text: event.target.value
    })
  }

  render() {
    let restaurant = this.props.restaurant_data.map(restaurant => <li key={restaurant.id}>{restaurant.name} ({restaurant.seat_amt} seats)</li>)
    return(
      <div>
        <h1>This is a placeholder for the homepage</h1>
        <h2>Restaurant search bar</h2>
        <input
          onChange={(event) => this.searchRestaurant(event)}
          value={this.state.text}
        />
        <h2>Restaurant List</h2>
        {restaurant}
      </div>
    )
  }
}
