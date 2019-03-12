import React from 'react';

const SingleSideDeleteEvent = ({item}) => (
  <div>
    <div className="divider"></div>
    <h1>Delete Event By ID</h1>
    <div className="card cardStyleSideMenu">
    <span><i className="medium material-icons deleteIcon">delete_forever</i></span>
      <div className="card-content">
        <p><span className="bold-red">Id#</span> {item.id}</p>
        <p><span className="bold-red">Name:</span> {item.name}</p>
      </div>
    </div>
  </div>
);

export default SingleSideDeleteEvent;