import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import Home from './Home.js';
import Booking from './Booking.js';
import Success from './Success.js';
import axios from 'axios';
import RestaurantProfile from './RestaurantProfile.js';
import RestaurantList from './RestaurantList.js';

export default class Header extends Component {
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
          restaurant_db: res.data.results.splice(2)
        })
      })
      .catch(function (err) {
        console.log(err);
      })
  }


  render() {
    return(
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#defaultNavbar1"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
                <div className=" animbrand">
                  <Link to='/' className=" navbar-brand animate" id="header-logo">Grub Tasty</Link>
                </div>
            </div>
            <div className="collapse navbar-collapse" id="defaultNavbar1" >
              <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/restaurants">Restaurants</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <Route
          exact path="/"
          component={() => <Home
             restaurant_db={this.state.restaurant_db}
          />}
        />
        <Route
          exact path="/booking"
          component={Booking}
        />
        <Route
          exact path="/success"
          component={Success}
        />
        <Route path="/restaurants" render={() =>
          <RestaurantList database={this.state.restaurant_db}/>
        }/>
        <Route exact path="/restaurants/:id" render={({match}) => (
          <RestaurantProfile
            database = {this.state.restaurant_db}
            match={match}
          />
        )}/>
      </div>
    )
  }
}
