import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#defaultNavbar1"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
          </div>
        <div className="collapse navbar-collapse" id="defaultNavbar1" >
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Home</a></li>
                  <li><a href="#" >Search</a></li>
                  <li><a href="#">Sign out</a></li>
            </ul>
          </div>

        </div>
      </nav>
    )
  }
}
