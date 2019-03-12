import React, { Component } from 'react';


class UpdateButton extends Component {

  constructor(props) {
    super(props); // props ia an object that has item.id and item.name in it now
    this.state = {
      events: {},
      error: false
    };
  }


  handleSubmit = (event) => {
    event.preventDefault();
    let valuesToBeUpdated = {
      name: this.props.item.name,
      id: this.props.item.id
    }
    this.props.addValuesToBeUpdated(valuesToBeUpdated);
  };

  render() {
    return (
      <div>
        <div className="updateButtonDiv">
          <button className="updateButton btn-floating btn-small waves-effect waves-light" onClick={this.handleSubmit}>
          <i className="material-icons">edit</i>
          </button>
        </div>
      </div>
    );
  }
}
  


export default UpdateButton;