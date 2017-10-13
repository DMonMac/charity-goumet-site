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
        <h1>Welcome to Grub Tasty</h1>
          <RestaurantList
            database={this.props.restaurant_db}
          />
      </div>
    )
  }
}
