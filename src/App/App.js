import React, { Component } from 'react';
import s from './App.module.css';
import Counter from './components/Toggle/Counter';
import Decrement from './components/Decrement/Decrement';
import Increment from './components/Increment/Increment';
import cyan from '@material-ui/core/colors/cyan';
import { createMuiTheme } from '@material-ui/core/styles';

const colorMain = cyan['500'];
const colorDark = cyan['700'];

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colorMain,
      dark: colorDark,
      contrastText: '#fff'
    }
  },
  typography: {
    useNextVariants: true,
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  decrement() {
    this.setState({
      counter: this.state.counter -1
    })
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  resetCounter() {
    this.setState({
      counter: 0
    })
  }

  render() {
    return (
      <div className={s.wrapper}>
        <div className={s.decrement}>
          <Decrement theme={theme} decrement={this.decrement.bind(this)} />
        </div>
        <div className={s.button}>
          <Counter theme={theme} counter={this.state.counter} resetCounter={this.resetCounter.bind(this)} />
        </div>
        <div className={s.increment}>
          <Increment theme={theme} increment={this.increment.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
