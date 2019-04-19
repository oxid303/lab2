import React from 'react';
import s from './Toggle.module.css';

const Toggle = (props) => {
  let buttonChangeColor = () => {
    props.state.changeColor();
  };

  return (
    <div>
      <button className={s.button} onClick={buttonChangeColor} >Toggle</button>
    </div>
  );
};

export default Toggle;
