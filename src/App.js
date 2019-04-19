import React from 'react';
import Toggle from './components/Toggle.js';
import Display from './components/Display.js';

const App = (props) => {
  return (
    <div>
      <Toggle state={props.state} />
      <Display color={props.state.color} />
    </div>
  );
};

export default App;
