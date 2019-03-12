import React, { Component } from 'react';
import SingleSide from './SingleSideEventById';
import Error from './Error';

class SideEventById extends Component {
  handleSearch = (eventId) =>{
    let url = 'http://localhost:3000/events/'+eventId;
  fetch(url).then(response => response.json()).then((data) => {
      console.log(data);
      this.setState({
        events: data
      })
    }).catch((error) => {
      this.setState({
        error: true
      })
    });
  };



  constructor(props) {
    super(props);
    this.state = {
      events: {},
      error: false,
    };

  }


  renderItems() {
    if (!this.state.error) {
      return (
         <SingleSide key={this.state.events.id} item={this.state.events} />
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
    const text = event.target.eventID.value;
    this.props.handleSubmit(text);
  };

  render() {
    return (
      <div className="numberFieldSearchDiv">
        <form onSubmit={this.handleSubmit}>
          <input
            name="eventID"
            className="form-control textFieldSearch"
            required={true}
            type='number'
            min='1'
            step='1'
            placeholder="Type ID press ENTER"
          />
        </form>
      </div>
    );
  }
}




export default SideEventById;
