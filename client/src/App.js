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
      restaurant_db: [],
    }
  }

  componentDidMount() {
    this.setState({
      restaurant_db: [
        { id: 1, name: "Calle", email: "Calle@calle.com", password: "1234", description: "Honest", picture: "placeholder", seat_amt: 6},
        { id: 2, name: "Uno", email: "uno@uno.com", password: "5678", description: "More honest", picture: "unopic.jpg", seat_amt: 12}
      ]
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={ () => <Home restaurant_data={this.state.restaurant_db}/>
          }/>
          <Route path="/Restaurant" component={Restaurant} />
          <Route path="/Booking" component={Booking} />
        </div>
      </Router>
    );
  }
}

export default App;
