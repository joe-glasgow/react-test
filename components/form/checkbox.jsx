import React from 'react';

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: 'Hello'
    }
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  render() {
    let value = this.state.value;
    return <input type='text' value={value} className={value} onChange={this.handleChange}/>
  }

}

export default CheckBox;
