import React, { Component } from 'react';
import './App.css';
import AllEvents from './Events/AllEvents';
import SideEventById from './Events/SideEventById';
// import SideAddEvent from './Events/SideAddEvent';
import SideAddEvent2 from './Events/SideAddEvent2';
import SideUpdateEvents from './Events/SideUpdateEvent';
import SideDeleteEvent from './Events/SideDeleteEvent';




/*************************************************
 MAIN PARENT COMPONENT
**************************************************/
class EventsManager extends Component {
  // CONSTRUCTOR
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      eventToBeUpdated: {}            
    }
  }


  // COLLECTING CORRESPONDING EVENTID AND EVENTNAME AFTER CLICKING INDIVIDUAL UPDATES BUTTON
  // binds this method to SideUpdateEvent instance
  addValuesToBeUpdated = (currentEvent) => {
    console.log("the name is: " + currentEvent.name + "the id is: " + currentEvent.id);
    this.setState({
      eventToBeUpdated: currentEvent
    })
    // console.log("the name from state is: " + this.state.eventToBeUpdated.name + "the id from state is: " + this.state.eventToBeUpdated.id)    
}



  // ADDING EVENT TO UI
  // binds this method to EventsManager instance
  addEvent = (newEvent) => {
    // CREATING A NEW INSTANCE SO REACT CAN COMPARE OLD STATES TO NEW STATES
    let updatedEvents = Array.from(this.state.events);
    updatedEvents.push(newEvent);
    this.setState({ // takes an object and merges that object into the current state
      events: updatedEvents
    })
  }






   // DELETING FROM UI
   //binds this method to EventsManager instance
   deleteEvent = (deletedEvent) => {
    // CREATING A NEW INSTANCE SO REACT CAN COMPARE OLD STATES TO NEW STATES
    let updatedEvents = Array.from(this.state.events);
    let oldEvent = this.state.events.findIndex(function (element) {
      return deletedEvent.id === element.id;
    });
    updatedEvents.splice(oldEvent, 1);
    this.setState({ // takes an object and merges that object into the current state
      events: updatedEvents
    })
  }



  //MAIN ALL EVENTS UI
  // moving it here makes it accessible to all children components
  componentDidMount() {
    const url = `http://localhost:3000/events`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          events: data
        })
      })
      .catch((error) => {
        this.setState({
          error: true
        })
      });
  }


  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper pink darken-1">
              <a href="/" className="brand-logo logo">Eventonica</a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col m5 l8">
          {/* giving things to child components (think of it as parameters been passed to a function) */}
            <AllEvents events={this.state.events} addEvent={this.addEvent} deleteEvent={this.deleteEvent} addValuesToBeUpdated={this.addValuesToBeUpdated}/> 
          </div>
          <div className="col m7 l4">
            <SideEventById />
            {/* parent to child we give them props, in order to give things back, we give the child a function that they can call with whatever data they want to give back to the parent  */}
            {/* <SideAddEvent addEvent={this.addEvent} /> */}
            <SideAddEvent2 addEvent={this.addEvent} />
            <SideUpdateEvents eventToBeUpdated={this.state.eventToBeUpdated} deleteEvent={this.deleteEvent} addEvent={this.addEvent}/>
            <SideDeleteEvent deleteEvent={this.deleteEvent}/>
          </div>
        </div>
      </div>
    );
  }
}

export default EventsManager;
