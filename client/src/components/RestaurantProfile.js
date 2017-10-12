import React, { Component } from 'react';

class Restaurant extends Component {
  render() {
    let restaurant_data = this.props.database.filter(
      restaurant => restaurant._id == this.props.match.params.id
    )
    console.log(restaurant_data)
    if (!restaurant_data) {
      return <div>Sorry, but the restaurant was not found</div>
    }

    let restaurant_profile = restaurant_data.map(
      (restaurant) => {
        return(
              <div key={restaurant.id} className="restaurant-detail ">

                <div className="restaurant-name">{restaurant.name}</div>
                <img src={restaurant.picture} id="detail-picture"
                className="img-responsive" alt="Cinque Terre" width="304" height="136" />
                 <div className="details">
                    <h3>Description</h3>
                    <p>{restaurant.description}</p>
                </div>
                <a id="btn-booking-page" className="btn btn-default" href="/booking" role="button">Reserve at {restaurant.name}</a>

              </div>
        )
      }
    )
    return (
      <div>
        {restaurant_profile}
      </div>
    )

  }
}

export default Restaurant;
