import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './Home.js';
import RestaurantList from './RestaurantList.js';
import Booking from './Booking.js';
import Success from './Success.js';

export default class Header extends Component {
  render() {
    return(


      <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#defaultNavbar1"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
              <div className=" animbrand">
                <a className=" navbar-brand animate" id="header-logo" href="/">Grub Tasty</a>
              </div>
          </div>
          <div className="collapse navbar-collapse" id="defaultNavbar1" >
            <ul className="nav navbar-nav navbar-right">
                <li><a href="/restaurants">Restaurant</a></li>
                <li><a href="/booking" >Booking</a></li>
            </ul>
          </div>
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
          <Route
            exact path="/success"
            component={Success}
          />
      </Switch>

      </div>
    )
  }
}
