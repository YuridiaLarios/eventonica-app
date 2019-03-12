import React, { Component } from 'react';
// import SingleSideAddEvent from './SingleSideUpdateEvent';
// import FormTest from './News/FormSmall';
// import Error from './Error';

class SideUpdateEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInputField: '',
      idInputField: '',
      events: {},
      error: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // COLLECTING CORRESPONDING EVENTID AND EVENTNAME AFTER CLICKING INDIVIDUAL UPDATES BUTTON
  // binds this method to SideUpdateEvent instance
  // passCurrentValues = (currentValues) => {
  //     this.setState(
  //       {
  //        nameInputField: currentValues.name,
  //        idInputField: currentValues.id,
  //       }
  //     )
  // }



  handleInputChange(event) {
    // get the event.target.name (which will be either "nameInputField" or "idInputField")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [event.target.name]: event.target.value });
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.eventToBeUpdated !== prevProps.eventToBeUpdated) {
      // console.log("inside SideUpdateEvent.js");
      // console.log("the name from state is: " + this.props.eventToBeUpdated.name + "the id from state is: " + this.props.eventToBeUpdated.id) 
      this.setState({ 
        nameInputField: this.props.eventToBeUpdated.name,
        idInputField: this.props.eventToBeUpdated.id
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log('A new name was submitted: ' + this.state.nameInputField + 'for id=' + this.state.idInputField);
    
    // function to put/update the name of the event using fetch
    // updateData(id, newName) {
      const body = {
        'name': this.state.nameInputField,
      };
      fetch('http://localhost:3000/events/' + this.state.idInputField, {
        method: 'put',
        body: JSON.stringify(body),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then((response) => {
        return response.json();
      })
      .then((event) => {
        this.props.deleteEvent(event)
        this.props.addEvent(event)
        this.setState({
          nameInputField: '',
          idInputField: '', });
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
         <div className="divider"></div>
         <div className="updateIconDiv">
            <span><i className="medium material-icons updateIcon">update</i></span>
        </div>
        <h1>Update an Event</h1>
        <form onSubmit={this.handleSubmit}>
        <label>
          Id:
          <input value={this.state.idInputField} type="number" name="idInputField" required={true} onChange={this.handleInputChange} />
        </label>
        <label>
          Name:
          <input value={this.state.nameInputField} type="text" name="nameInputField" required={true} onChange={this.handleInputChange} />
        </label>
        <button type="submit" value="Submit">Update</button>
      </form>
      </div>
    );
  }
}


// Create component for button
// class Button extends Component {
//   render() {
//     return (
//       <fieldset>
//         <button
//           type={this.props.type || 'button'}
//           value={this.props.value || null}
//         >
//           {this.props.text}
//         </button>
//       </fieldset>
//     );
//   }
// };


// Create component for label
// class Label extends Component {
//   render() {
//     if (this.props.hasLabel === 'true') {
//       return <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
//     }
//   }
// }

// Create component for input
// class Input extends Component {
//   render() {
//     return (
//       <fieldset>
//         <Label
//           hasLabel={this.props.hasLabel}
//           htmlFor={this.props.htmlFor}
//           label={this.props.label}
//         />

//         <input
//           id={this.props.htmlFor}
//           max={this.props.max || null}
//           min={this.props.min || null}
//           name={this.props.name || null}
//           placeholder={this.props.placeholder || null}
//           required={this.props.required || null}
//           step={this.props.step || null}
//           type={this.props.type || 'text'}
//         />
//       </fieldset>
//     );
//   }
// }


// Create component for form
// class Form extends Component {
//   render() {
//     return (
//       <form method='' action=''>
    
//         <Input
//           name='idInputField'
//           hasLabel='true'
//           htmlFor='numberInput'
//           label='Id of Event to be Updated: '
//           required={true}
//           type='number'
//           min='1'
//           step='1'
//           onChange={this.handleInputChange}
//         />

//         <Input
//           name='nameInputField'
//           hasLabel='true'
//           htmlFor='textInput'
//           label='New Event Name: '
//           required={true}
//           type='text'
//           onChange={this.handleInputChange}
//         />
        
//         <Button
//           value='submit'
//           text='Update Event'
//         />
//       </form>
//     )
//   }
// }

export default SideUpdateEvents;
