import React, { Component } from 'react';
import Header from './components/Header.js';
import Home from './components/Home.js';
import RestaurantList from './components/RestaurantList.js';
import Booking from './components/Booking.js';


import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Router>
          <Header />
          
      </Router>
    );
  }
}

export default App;
