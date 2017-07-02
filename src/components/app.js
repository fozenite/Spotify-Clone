import React, { Component } from 'react';
import Button from './button';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      value: '',
      textValue: '',
    };
  }

  textEntered = (event) => {
    this.setState({value: event.target.value });
  }

  changeText = () => {
    this.setState({
      textValue: this.state.value,
      value: '',
     });

  }

  render() {
    return (
      <div>
        <h2>{this.state.textValue}</h2><br />
        <input type="text" value={this.state.value} onChange={this.textEntered}/>
        <Button name={'Click Me'} clicked={this.changeText}/>
      </div>
    );
  }
}


