import React, { Component } from 'react';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Restaurant from './components/Restaurant.js';
import Booking from './components/Booking.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: [],
    }
  }

  componentDidMount() {
    this.setState({
      restaurant: [
        {
          id: 1,
          name: "Calle",
          email: "Calle@calle.com",
          password: "1234",
          description: "Honest",
          picture: "placeholder",
          seat_amt: 6
        }
      ]
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Route component={Header} />
          <Route exact path="/" render={ () => <Home data={this.state.restaurant}/>
          }/>
          <Route path="/Restaurant" component={Restaurant} />
          <Route path="/Booking" component={Booking} />
        </div>
      </Router>
    );
  }
}

export default App;
