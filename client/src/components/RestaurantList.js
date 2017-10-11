import React, { Component } from 'react';



export default class RestaurantList extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    //var restaurants
    //if (!this.props.filtered_data) {
    let restaurants = this.props.data.map(restaurant => <li key={restaurant.id}>{restaurant.name} ({restaurant.seat_amt} seats)</li>)
    //} else {
    //    let restaurants = this.props.data.map(restaurant => <li key={restaurant.id}>{restaurant.name} ({restaurant.seat_amt} seats)</li>)
     //}


    return(
      <div>
        <h2>Restaurant List</h2>
        <ul>
          {this.props.filtered_data.map((restaurant, index) => <li key={index}>{restaurant}</li>)}
        </ul>
      </div>
    )
  }
}
