import React, { Component } from 'react';
import s from './Toggle.module.css';

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
      <div>
        <button className={s.button} onClick={buttonChangeColor} >Toggle</button>
      </div>
    );
  }
};

export default Toggle;
