import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './components/Home.js';
import Restaurant from './components/Restaurant.js';
import Booking from './components/Booking.js';

class App extends Component {
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
