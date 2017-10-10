import React, { Component } from 'react';

class Restaurant extends Component {

  render() {
    return (
    <div>
        <div className="restaurant-detail col-md-8">
        <div className="restaurant-name">restaurant name</div>
          <div>description....</div>
            <iframe className="embed-responsive-item"></iframe>
        </div>
         <div className="details">
          <p>about</p>
          <div>description....</div>
        </div>
    </div>
    );
  }
}

export default Restaurant;
