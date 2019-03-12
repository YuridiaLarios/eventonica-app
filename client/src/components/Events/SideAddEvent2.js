import React, { Component } from 'react';


class SideAddEvent2 extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const body = {
      'name': this.state.value //body
    };

    const url = `http://localhost:3000/events`;

    fetch(url, { //endpoint
        method: 'post',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then((response) => {
        return response.json();
      })
      .then((event) => {
        // addEvent property passed by parent component, then we call the addEvent function 
        this.props.addEvent(event)
        this.setState({
          value: '' });
      })
      .catch((error) => {
        this.setState({
          error: true
        })
      });
  }

  render() {
    return (
      <div className="row">
        <div>
        <div className="divider"></div>
        <h1>Post New Event</h1>
          <div className="card cardStyleSideMenu">
            <form onSubmit={this.handleSubmit}> 
                <input type="text" placeholder="Type Name press ENTER" required={true} value={this.state.value} onChange={this.handleChange} />
              {/* <input type="submit" value="Submit" /> */}
            </form>
            <span><i className="medium material-icons addIcon">add_circle</i></span>
            </div>
        </div>
      </div>
    );
  }
}


export default SideAddEvent2;
