import React from 'react';
import s from './Display.module.css';

const Display = (props) => {
  return (
    <div className={`${s.display} ${s[props.color]}`}></div>
  );
};

export default Display;
