import React, { Component } from 'react';
import SingleSideDeleteEvent from './SingleSideDeleteEvent';
import Error from './Error';

class SideDeleteEvents extends Component {
  handleSearch = (eventId) =>{
    const url = "http://localhost:3000/events/" + eventId;

    fetch(url, { //endpoint
        method: 'delete'
      })
      .then((response) => {
        return response.json();
      })
      .then((deletedEvent) => {
        this.setState({
          event: deletedEvent
        })
        this.props.deleteEvent(deletedEvent)
      })
      .catch((error) => {
        this.setState({
          error: true
        })
      });
  };



  constructor(props) {
    super(props);
    this.state = {
      event: {},
      error: false,
    };
  }


  renderItems() {
    if (!this.state.error) {
      return (
         <SingleSideDeleteEvent key={this.state.event.id} item={this.state.event} />
      );
    } else {
      return <Error />
    }
  }

  render() {
    return (
      <div className="row">
        {this.renderItems()}
          <div className="app-container">
            <SearchBar handleSubmit={this.handleSearch} />
          </div>
      </div>
    );
  }
}


class SearchBar extends React.Component {
    
  handleSubmit = (event) => {
    event.preventDefault();
    const eventID = event.target.eventID.value;
    this.props.handleSubmit(eventID);
  };

  render() {
    return (
      <div className="textFieldSearchDiv">
        <form onSubmit={this.handleSubmit}>
          <input
            name="eventID"
            className="form-control textFieldSearch"
            type="text"
            placeholder="Type ID and press ENTER"
          />
        </form>
      </div>
    );
  }
}

export default SideDeleteEvents;
