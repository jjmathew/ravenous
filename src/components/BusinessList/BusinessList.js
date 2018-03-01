import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';
class BusinessList extends React.Component{
  render() {
    return (
      <div className="BusinessList">
      {Business.name};
      {Business.address};
      {Business.city};
      {Business.state};
      {Business.zipCode};
      {Business.category};
      {Business.rating};
      {Business.reviewCount};
</div>
    )
  }
}
export default BusinessList;
