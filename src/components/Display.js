import React, { Component } from 'react';
import s from './Display.module.css';

class Display extends Component {
  constructor(props) {
    super(props);
    props = this.props;
  }

  render() {
    return (
      <div className={`${s.display} ${s[this.props.color]}`}></div>
    );
  }
};

export default Display;
