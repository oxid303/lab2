import React, { Component } from 'react';
// import s from './Toggle.module.css';
import MyButton from './MyButton/MyButton';

class Toggle extends Component {
  constructor(props) {
    super(props);
    props = this.props;
  }

  render() {
    let buttonChangeColor = () => {
      this.props.changeColor();
    };
    return (
      <div onClick={buttonChangeColor}>
        <MyButton />
      </div>
    );
  }
};

export default Toggle;
