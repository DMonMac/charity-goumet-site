import React, { Component } from 'react';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Restaurant from './components/Restaurant.js';
import Booking from './components/Booking.js';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
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
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#defaultNavbar1"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
                <div className=" animbrand">
                  <a className=" navbar-brand animate" href="/">Grab tasty</a>
                </div>
            </div>
            <div className="collapse navbar-collapse" id="defaultNavbar1" >
              <ul className="nav navbar-nav navbar-right">
                  <li><a href="/restaurant">Restaurant</a></li>
                  <li><a href="/booking" >Booking</a></li>
              </ul>
            </div>
          </div>
        </nav>

          <Route exact path="/" render={ () => <Home restaurant_data={this.state.restaurant_db}/>
          }/>
          <Route path="/restaurant" component={Restaurant} />
          <Route path="/booking" component={Booking} />
        </div>
      </Router>
    );
  }
}

export default App;
