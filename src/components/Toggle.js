import React, { Component } from 'react';
// import s from './Toggle.module.css';
import MyButton from './MyButton/MyButton';

class Toggle extends Component {

  render() {
    return (
      <div>
        <MyButton changeColor={this.props.changeColor} />
      </div>
    );
  }
};

export default Toggle;
