import React, { Component } from 'react';

class Success extends Component {

  render() {
    return (
    <div>
        <div className="success-page">
          <h1>Your reservation has been successfully
          !</h1>
          <span className="thankyou"><img src="http://kids.wanpug.com/illust/illust1779.png"  /></span>

          <div className="success">Thank your for your reservation!</div>
        </div>
    </div>
    );
  }
}

export default Success;
