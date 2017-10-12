import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Restaurant from './Restaurant.js';


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
        let restaurant_names = this.state.restaurant_db.map(
          restaurant =>
            <Link to={"/" + restaurant.id}>{restaurant.name}</Link>
        )
        this.setState({
          filtered_restaurant_names: restaurant_names
        })
    })
  }


  filterRestaurantsByName(event){
    // Creates array of names
    let restaurant_names = this.state.restaurant_db.map(
      restaurant => <Link to={"/" + restaurant.id}>{restaurant.name}</Link>
    )


    // Sets state to what you typed
    this.setState({
      text: event.target.value
    })
    let typed = event.target.value.toLowerCase();
    //Filters names
    let filtered = restaurant_names.filter(function(restaurant_name){
      restaurant_name = restaurant_name.toString().toLowerCase();
      return (restaurant_name.indexOf(typed) > -1);
    })
    this.setState({
      filtered_restaurant_names: filtered
    })
  }


  render() {
    return (
      <Router>
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
         <Route path="/:id" component={Restaurant}/>
      </div>
    </Router>
    )
  }
}
