import React, { Component } from 'react';

class Restaurant extends Component {
  render() {
    return (
    <div>
        <div className="restaurant-detail ">

          <div className="restaurant-name">Chaya</div>
          <div className="restaurant-subtitle">Japanese restaurant</div>
          <img src="https://c2.staticflickr.com/6/5524/11545216616_d79a8718d0_b.jpg" id="detail-picture"
          className="img-responsive" alt="Cinque Terre" width="304" height="136" />
           <div className="details">
              <p>about</p>
              <p>Chaya stands for Authentic Japanese Cuisine, Wholesome Food and Healthy Lifestyle. Whether you are planning an intimate dinner for friends, a corporate luncheon,or an extravagant gathering, you will find the perfect setting at Chaya. It’s as authentic as you can get out of Japan.. Oishikata!” Teng G.</p>
          </div>
          <a id="btn-booking-page" className="btn btn-default" href="/Booking" role="button">Booking Page</a>

        </div>
    </div>
    );
  }
}

export default Restaurant;
