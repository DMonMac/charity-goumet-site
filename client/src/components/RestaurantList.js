import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';
import RestaurantProfile from './RestaurantProfile.js';


export default class RestaurantList extends Component {
  constructor(props){
    super(props);
    this.state = {
      restaurant_db: [],
      filtered_restaurant_names: [],
    }
  }

  componentDidMount() {
    axios.get('/api/restaurant')
      .then(res => {
        this.setState({
          restaurant_db: res.data.results
        }, () => {
          let restaurant_names = this.state.restaurant_db.map(
            restaurant =>
              <Link to={`/restaurants/${restaurant._id}`}>{restaurant.name}</Link>
          )
          this.setState({
            filtered_restaurant_names: restaurant_names
          })
        })
      })
      .catch(function (err) {
        console.log(err);
      });
  }




  //filterRestaurantsByName(event){
    // Creates array of names
  //  let restaurant_names = this.state.restaurant_db.map(
  //    restaurant => <Link to={"/" + restaurant.id}>{restaurant.name}</Link>
  //  )
    // Sets state to what you typed
  //  this.setState({
  //    text: event.target.value
  //  })
  //  let typed = event.target.value.toLowerCase();
    //Filters names
  //  let filtered = restaurant_names.filter(function(restaurant_name){
  //    restaurant_name = restaurant_name.toString().toLowerCase();
  //    return (restaurant_name.indexOf(typed) > -1);
  //  })
  //  this.setState({
  //    filtered_restaurant_names: filtered
  //  })
  //}




  render() {
    console.log(this.state)
    return (
      <Router>
        <div>
        <h2 className="restaurant-list-title">Restaurant List</h2>
        <ul className="restaurant-list-ul">
            {this.state.filtered_restaurant_names.map((restaurant, index) => <li className="restaurant-list-li" key={index}>{restaurant} </li>)}
        </ul>
         <Route path="/restaurants/:id" render={({match}) => (
           <RestaurantProfile
             database = {this.state.restaurant_db}
             match={match}
           />
         )}/>
      </div>
    </Router>
    )
  }
}


//        <h2>Restaurant search bar</h2>
//        <input
//          onChange={(event) => this.filterRestaurantsByName(event)}
//          value={this.state.text}
//          placeholder = "Search Restaurants"
//        />
