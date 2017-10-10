import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    let restaurant = this.props.data.map(restaurant => <li key={restaurant.id}>{restaurant.name}</li>)
    return(
      <div>
        <h1>This is a placeholder for the homepage</h1>
        <h2>Reastaurant search bar</h2>
        <h2>Restaurant List</h2>
        {restaurant}
      </div>
    )
  }
}
