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
        <h2 className="home-title">Welcome to Grub Tasty</h2>
        <p  className="home-description">Your reservation will be able to donate healthy meals to children.</p>
        <RestaurantList/>
      </div>
    )
  }
}
