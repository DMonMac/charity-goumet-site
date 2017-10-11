import React, { Component } from 'react';
import RestaurantList from './RestaurantList.js';


export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      filtered_restaurant_data: []
    }
    this.filterRestaurants = this.filterRestaurants.bind(this);
  }


  filterRestaurants(event){
    let restaurant_names = this.props.restaurant_data.map(
      restaurant => restaurant.name.toLowerCase()
    )
    this.setState({
      text: event.target.value
    }, () =>
      {console.log(this.state.text)
    })
    let typed = event.target.value.toLowerCase();
    let filtered = restaurant_names.filter(function(restaurant_name){
      return restaurant_name.indexOf(typed) > -1;
    })
    //console.log(filtered)
    this.setState({
      filtered_restaurant_data: filtered
    }, () =>
      {console.log(this.state.filtered_restaurant_data)
    })
  }

  render() {
    return(
      <div>
        <h1>Homepage</h1>
        <h2>Restaurant search bar</h2>
        <input
          onChange={(event) => this.filterRestaurants(event)}
          value={this.state.text}
          placeholder = "Search Restaurants"
        />
        <RestaurantList
          data = {this.props.restaurant_data}
          filtered_data = {this.state.filtered_restaurant_data}
        />
      </div>
    )
  }
}
