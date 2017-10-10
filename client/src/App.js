import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
