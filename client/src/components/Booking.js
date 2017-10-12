import React, { Component } from 'react';

export default class Booking extends Component {
  render() {
    return(
        <div>
        <div className="restaurant-booking">
            <div className="restaurant-name">Chaya</div>
            <div className="restaurant-subtitle">Japanese restaurant</div>
            <p>Opnen : AM 11:00 ~　PM 10:00</p>

            <br/>
            <div className="booking-form">
            <p>Date / Time </p>
            <input
              className="form-control"
              type="datetime-local"
              onChange={event => this.setState({reserveDate: event.target.value})} />

           <br/>
            <p> How many seats? </p>
            <input
              type="number" name="number"
               min="1" max="100"
              className="form-control"
              onChange={event => this.setState({seatsNumber: event.target.value})} />

           <br/>

            <a id="btn-booking-page" className="btn btn-default" href="/success" role="button">Make a reservation</a>

            </div>
            </div>

        </div>

    )
  }
}
