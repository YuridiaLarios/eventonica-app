import React, { Component } from 'react';
import SingleEventDiv from './SingleEventDiv';
import Error from './Error';

class AllEvents extends Component {

  constructor(props) {
    super(props); // props is an object that has events in it now
    this.state = {
      events: props.events,
      error: false
    };
  }


  renderItems() {
    if (!this.state.error) {
      // All events come from its parent
      return this.props.events.map((item) => (
        <SingleEventDiv addEvent={this.addEvent} deleteEvent={this.props.deleteEvent} key={item.id} item={item} addValuesToBeUpdated={this.props.addValuesToBeUpdated}/>
      ));
    } else {
      return <Error />
    }
  }

  render() {
    return (
      <div className="row">
        <h1>All Events</h1>
        {this.renderItems()}
      </div>
    );
  }
}

export default AllEvents;
