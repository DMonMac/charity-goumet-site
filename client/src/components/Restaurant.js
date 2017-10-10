import React, { Component } from 'react';

class Restaurant extends Component {

  render() {
    return (
    <div>
        <div className="restaurant-detail ">

          <div className="restaurant-name">restaurant name</div>
          <div className="restaurant-subtitle">subtitle</div>
          <iframe className="embed-responsive-item"></iframe>
           <div className="details">
              <p>about</p>
              <div>description....</div>
          </div>

        </div>
    </div>
    );
  }
}

export default Restaurant;
