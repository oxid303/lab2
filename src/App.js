import React, { Component } from 'react';
import Toggle from './components/Toggle.js';
import Display from './components/Display.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
    };
  }

  changeColor() {
    this.setState({
      color: (this.state.color === 'red') ? 'green' : 'red'
    });
  }

  render() {
    return (
      <div>
        <Toggle changeColor={this.changeColor.bind(this)} />
        <Display color={this.state.color} />
      </div >
    );
  }
}

export default App;
