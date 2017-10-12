import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './Home.js';
import RestaurantList from './RestaurantList.js';
import Booking from './Booking.js';

export default class Header extends Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container">
            <div className="navbar-header">
            <Link to="/" className="navbar-brand">Grub Tasty</Link>
            </div>
             <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Menu <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><Link to="/restaurants">Restaurants</Link></li>
                    <li><Link to="/booking">Booking</Link></li>
                  </ul>
                </li>
              </ul>
          </div>
        </nav>
        <Switch>
          <Route
            exact path="/"
            component={Home}
          />
          <Route
            exact path="/restaurants"
            component={RestaurantList}
          />
          <Route
            exact path="/booking"
            component={Booking}
          />
      </Switch>

      </div>
    )
  }
}
