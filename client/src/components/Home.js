import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    let restaurant = this.props.data.map(restaurant => <li key={restaurant.id}>{restaurant.name}</li>)
    return(
      <div>
        <p>This is a placeholder for the homepage</p>
        {restaurant}
      </div>

    )
  }
}
