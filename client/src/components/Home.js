import React, { Component } from 'react';
import RestaurantList from './RestaurantList.js';


export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }


  render() {
    return(
      <div>
        <h1>Homepage</h1>
        <RestaurantList
          data = {this.props.restaurant_data}
          filtered_data = {this.state.filtered_restaurant_data}
        />
      </div>
    )
  }
}
