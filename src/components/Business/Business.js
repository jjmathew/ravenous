import React from 'react';
import './Business.css';

let business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

class Business extends React.component {
  render () {
    return (
      <div className="Business">
  <div className="image-container">
    <img src={business.imageSrc} alt={business.name}/>
  </div>
  <h2>{business.name}</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>{business.address}</p>
      <p>{business.city}</p>
      <p>{business.state}  {business.zipCode}</p>
    </div>
    <div className="Business-reviews">
      <h3>{business.category}</h3>
      <h3 className="rating"> {business.rating}}</h3>
      <p> {business.reviewCount} reviews</p>
    </div>
  </div>
</div>
    ) ;
  }
};

export default Business;
/*
class Business extends React.component {
  render () {
    return (
      <div className="Business">
  <div className="image-container">
    <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
  </div>
  <h2>MarginOtto Pizzeria</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>1010 Paddington Way</p>
      <p>Bordertown</p>
      <p>NY 10101</p>
    </div>
    <div className="Business-reviews">
      <h3>ITALIAN</h3>
      <h3 className="rating">4.5 stars}</h3>
      <p>90 reviews</p>
    </div>
  </div>
</div>
    ) ;
  }
}
*/
