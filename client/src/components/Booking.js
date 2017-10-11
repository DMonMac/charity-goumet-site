import React, { Component } from 'react';

export default class Booking extends Component {
  render() {
    return(
        <div>
          <div className="restaurant-booking">
            <div className="restaurant-name">Chaya</div>
            <div className="restaurant-subtitle">Japanese restaurant</div>
            <a id="btn-booking-page" className="btn btn-default" href="#" role="button">Make a reservation</a>
          </div>

        </div>

    )
  }
}
