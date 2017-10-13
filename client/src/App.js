import React, { Component } from 'react';
import Header from './components/Header.js';


import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
          <Header />
      </Router>
    );
  }
}

export default App;
