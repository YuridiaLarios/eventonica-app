import React from 'react';

const SingleSideEventById = ({item}) => (
  <div>
    <h1>Event By ID</h1>
    <div className="card cardStyleSideMenu">
    <span><i className="medium material-icons idIcon">event</i></span>
      <div className="card-content">
        <p><span className="bold-aqua">Id#</span> {item.id}</p>
        <p><span className="bold-aqua">Name:</span> {item.name}</p>
      </div>
    </div>
  </div>
);

export default SingleSideEventById;
