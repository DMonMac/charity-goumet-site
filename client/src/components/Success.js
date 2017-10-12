import React, { Component } from 'react';

class Success extends Component {

  render() {
    return (
    <div>
        <div className="success-page">
          <h3>Your reservation has been successfully!</h3>
          <span className="thankyou"><img src="http://jiburi.com/wp-content/uploads/P6100121_1890.jpg"/></span>

          <div className="success">Thank your for your reservation!</div>
        </div>
    </div>
    );
  }
}

export default Success;
