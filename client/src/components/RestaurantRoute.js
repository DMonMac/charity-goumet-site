import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';
import RestaurantProfile from './RestaurantProfile.js';
import RestaurantList from './RestaurantList.js';


export default class RestaurantRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant_db: []
    }
  }


  componentDidMount(){
    axios.get('/api/restaurant')
      .then(res => {
        this.setState({
          restaurant_db: res.data.results
        })
      .catch(function (err) {
        console.log(err);
      });
    });
  }


  const RestaurantRoute = () => (
    <Switch>

    </Switch>
  )


  render() {
    return (
      <div>
        <Route exact path="/restaurants" component={
          <RestaurantList
            database = {this.state.restaurant_db}
          />
        }/>
        <Route exact path="/restaurants/:id" component={({match}) => (
          <RestaurantProfile
            database = {this.state.restaurant_db}
            match={match}
          />
        )}/>
      </div>
    )
  }
}


//        <h2>Restaurant search bar</h2>
//        <input
//          onChange={(event) => this.filterRestaurantsByName(event)}
//          value={this.state.text}
//          placeholder = "Search Restaurants"
//        />


//<img src={`${restaurant.picture}`}/>
