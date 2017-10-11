import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


export default class RestaurantList extends Component {
  constructor(props){
    super(props);
    this.state = {
      restaurant_db: [],
      filtered_restaurant_names: [],
      text: ''
    }
  }

  componentDidMount() {
    this.setState({
      restaurant_db: [
        { id: 1, name: "Calle", email: "Calle@calle.com", password: "1234", description: "Honest", picture: "callepic.jpg", seat_amt: 6},
        { id: 2, name: "Uno", email: "uno@uno.com", password: "5678", description: "More honest", picture: "unopic.jpg", seat_amt: 12},
        { id: 3, name: "Road", email: "road@road.com", password: "9101", description: "Has Food", picture: "roadpic.jpg", seat_amt: 18},
        { id: 4, name: "Grill", email: "grill@grill.com", password: "1121", description: "Has More Food", picture: "grillpic.jpg", seat_amt: 24},
      ]
    }, () =>
      {
        console.log(this.state.restaurant_db)
        let restaurant_names = this.state.restaurant_db.map(
          restaurant => restaurant.name)
        console.log(restaurant_names)
        this.setState({
          filtered_restaurant_names: restaurant_names
        })


    })



  }

  filterRestaurantsByName(event){
    let restaurant_names = this.state.restaurant_db.map(
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
      filtered_restaurant_names: filtered
    }, () =>
      {console.log(this.state.filtered_restaurant_names)
    })
  }




  render() {
    let restaurants
    if (!this.state.filtered_restaurant_names) {
      let restaurants = this.state.restaurant_db.map(restaurant => <li key={restaurant.id}>{restaurant.name} ({restaurant.seat_amt} seats)</li>);
    } else {
        let restaurants = this.state.filtered_restaurant_names.map((restaurant, index) => <li key={index}>{restaurant}</li>);
      }
      return (
        <div>
        <h2>Restaurant search bar</h2>
        <input
          onChange={(event) => this.filterRestaurantsByName(event)}
          value={this.state.text}
          placeholder = "Search Restaurants"
        />
        <h2>Restaurant List</h2>
        <ul>
            {this.state.filtered_restaurant_names.map((restaurant, index) => <li key={index}>{restaurant}</li>)}
        </ul>
      </div>
    )
  }
}

//   {this.props.filtered_data.map((restaurant, index) => <li key={index}><Link to="/restaurant">{restaurant}</Link></li>)}
