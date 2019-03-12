import React, { Component } from 'react';


// Create component for button
class Button extends Component {
  render() {
    return (
      <fieldset>
        <button
          type={this.props.type || 'button'}
          value={this.props.value || null}
        >
          {this.props.text}
        </button>
      </fieldset>
    );
  }
};

// Create component for datalist input
// class Datalist extends Component {
//   render() {
//     // Get all options from option prop
//     const dataOptions = this.props.options.split(', ');

//     // Generate list of options
//     const dataOptionsList = dataOptions.map((dataOption, index) => {
//       return <option key={index} value={dataOption} />
//     });

//     return (
//       <fieldset>
//         <Label
//           hasLabel={this.props.hasLabel}
//           htmlFor={this.props.htmlFor}
//           label={this.props.label}
//         />
        
//         <input list={this.props.htmlFor} />
          
//         <datalist
//           defaultValue=''
//           id={this.props.htmlFor}
//           name={this.props.name || null}
//           required={this.props.required || null}
//         >
//           <option value='' disabled>Select one option</option>

//           {dataOptionsList}
//         </datalist>
//       </fieldset>
//     );
//   }
// };

// Create component for checkbox input
// class Checkbox extends Component {
//   render() {
//     return (
//       <fieldset>
//         <label
//           htmlFor={this.props.htmlFor}
//           label={this.props.label}
//         >
//           <input
//             id={this.props.htmlFor}
//             name={this.props.name || null}
//             required={this.props.required || null}
//             type='checkbox'
//           />
//           {this.props.label}
//         </label>
//       </fieldset>
//     );
//   }
// }

// Create component for label
class Label extends Component {
  render() {
    if (this.props.hasLabel === 'true') {
      return <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
    }
  }
}

// Create component for input
class Input extends Component {
  render() {
    return (
      <fieldset>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />

        <input
          id={this.props.htmlFor}
          max={this.props.max || null}
          min={this.props.min || null}
          name={this.props.name || null}
          placeholder={this.props.placeholder || null}
          required={this.props.required || null}
          step={this.props.step || null}
          type={this.props.type || 'text'}
        />
      </fieldset>
    );
  }
}

// Create component for radio input
// class Radio extends Component {
//   render() {
//     return (
//       <fieldset>
//         <label
//           htmlFor={this.props.htmlFor}
//           label={this.props.label}
//         >
//           <input
//             id={this.props.htmlFor}
//             name={this.props.name || null}
//             required={this.props.required || null}
//             type='radio'
//           />
//           {this.props.label}
//         </label>
//       </fieldset>
//     );
//   }
// }

// Create component for select input
// class Select extends Component {
//   render() {
//     // Get all options from option prop
//     const selectOptions = this.props.options.split(', ');

//     // Generate list of options
//     const selectOptionsList = selectOptions.map((selectOption, index) => {
//       return <option key={index} value={index}>{selectOption}</option>
//     });

//     return (
//       <fieldset>
//         <Label
//           hasLabel={this.props.hasLabel}
//           htmlFor={this.props.htmlFor}
//           label={this.props.label}
//         />
        
//         <select
//           defaultValue=''
//           id={this.props.htmlFor}
//           name={this.props.name || null}
//           required={this.props.required || null}
//         >
//           <option value='' disabled>Select one option</option>

//           {selectOptionsList}
//         </select>
//       </fieldset>
//     );
//   }
// };

// Create component for textarea
// class Textarea extends Component {
//   render() {
//     return (
//       <fieldset>
//         <Label
//           hasLabel={this.props.hasLabel}
//           htmlFor={this.props.htmlFor}
//           label={this.props.label}
//         />

//         <textarea
//           cols={this.props.cols || null}
//           id={this.props.htmlFor}
//           name={this.props.name || null}
//           required={this.props.required || null}
//           rows={this.props.rows || null}
//         >
//         </textarea>
//       </fieldset>
//     );
//   }
// };

// Create component for form
class Form extends Component {
  render() {
    return (
      <form method='' action=''>
    
{/*         
        <Input
          hasLabel='true'
          htmlFor='emailInput'
          label='Email input'
          required='true'
          type='email'
        />
         */}
        <Input
          hasLabel='true'
          htmlFor='numberInput'
          label='Id of Event to be Updated: '
          required='true'
          type='number'
          min='1'
          step='1'
        />

        <Input
          hasLabel='true'
          htmlFor='textInput'
          label='New Event Name: '
          required='true'
          type='text'
        />
        
        {/* <Input
          hasLabel='true'
          htmlFor='passwordInput'
          label='Password input'
          required='true'
          type='password'
        />
        
        <Select
          hasLabel='true'
          htmlFor='select'
          label='Select'
          options='one, two, three, option four, five'
          required='true'
        />
        
        <Datalist
          hasLabel='true'
          htmlFor='datalist'
          label='Datalist'
          options='Chrome, Edge, Firefox, Internet Explorer, Opera, Safari, Vivaldi'
          required='true'
        />
        
        <Textarea
          hasLabel='true'
          htmlFor='textarea'
          label='Textarea'
          required='true'
        />
        
        <Checkbox
          hasLabel='true'
          htmlFor='checkbox'
          label='Checkbox'
          required='true'
        />
        
        <Radio
          hasLabel='true'
          htmlFor='radioOne'
          label='Radio one'
          name='radios'
          required='true'
        />
        
        <Radio
          hasLabel='true'
          htmlFor='radioTwo'
          label='Radio two'
          name='radios'
          required='true'
        /> */}
        
        <Button
          type='submit'
          value='submit'
          text='Send form'
        />
      </form>
    )
  }
}

export default Form;


