import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './components/Home.js';
import Restaurant from './components/Restaurant.js';
import Booking from './components/Booking.js';


class App extends Component {
  // INIT //
  constructor(props) {
    super(props);
    this.state = {
      Restaurant: [
        {name: "Restau 1", rating: 5},
        {name: "Restau 2", rating: 4},
        {name: "Restau 3", rating: 3},
        {name: "Restau 4", rating: 2},
        {name: "Restau 5", rating: 1}
      ]
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/Restaurant" component={Restaurant} />
          <Route path="/Booking" component={Booking} />
        </div>
      </Router>
    );
  }
}

export default App;
