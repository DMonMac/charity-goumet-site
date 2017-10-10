import React, { Component } from 'react';
import Home from './components/Home.js';
import Restaurant from './components/Restaurant.js';
import Booking from './components/Booking.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

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
          <nav className="navbar navbar-inverse">
            <div className="container">
              <div className="navbar-header">
               <a className="navbar-brand">Grub Tasty</a>
              </div>
               <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Menu <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/Restaurant">Restaurant</Link></li>
                      <li><Link to="/Booking">Booking</Link></li>
                    </ul>
                  </li>
                </ul>
            </div>
          </nav>
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
