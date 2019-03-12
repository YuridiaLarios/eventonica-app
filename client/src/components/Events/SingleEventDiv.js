import React, { Component } from 'react';
import DeleteButton from './DeleteButton';
import UpdateButton from './UpdateButton';

class SingleEventDiv extends Component {
  constructor(props) {
    super(props); // props ia an object that has item.id and item.name in it now
    this.state = {
      events: {},
      error: false
    };
  }






  // to handle deleting an event from database
  handleDeleteSearch = (eventId) =>{
    const url = "http://localhost:3000/events/" + eventId;

    fetch(url, { //endpoint
        method: 'delete'
      })
      .then((response) => {
        return response.json();
      })
      .then((deletedEvent) => {
        // deleteEvent property passed by parent component, then we call the deleteEvent function 
        this.props.deleteEvent(deletedEvent)
      })
      .catch((error) => {
        this.setState({
          error: true
        })
      });
  };




  
  // to handle updating an event from database
  handleUpdateSearch = (eventId) =>{
    const url = "http://localhost:3000/events/" + eventId;
    const body = {
      'name': "hardcoded new name"
    };
    fetch(url, { //endpoint
        method: 'put',
        body: JSON.stringify(body),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      .then((response) => {
        return response.json();
      })
      .then((updatedEvent) => {
        // deleteEvent and addEvent property passed by parent component, then we call both of those function 
        this.props.deleteEvent(this.state.events)
        this.props.addEvent(updatedEvent)
      })
      .catch((error) => {
        this.setState({
          error: true
        })
      });
  };


  render(){
    return (
      <div className="col s12 m12 l4">
      <div className="card cardStyle">
        <div className="card-content">
          <p><span className="bold-pink">Id#</span> {this.props.item.id}</p>
          <p><span className="bold-pink">Name:</span> {this.props.item.name}</p> 
        </div>
        <DeleteButton item={this.props.item}  handleSubmit={this.handleDeleteSearch} />
        <UpdateButton item={this.props.item}  handleSubmit={this.handleUpdateSearch} addValuesToBeUpdated={this.props.addValuesToBeUpdated}/>
      </div>
    </div>
    );
  }
}

export default SingleEventDiv;
