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
  render() {
    return (
      <div className={s.wrapper}>
        <div className={s.decrement}>
          <Decrement theme={theme} dispatch={this.props.dispatch} />
        </div>
        <div className={s.button}>
          <Counter theme={theme} state={this.props.state} dispatch={this.props.dispatch} />
        </div>
        <div className={s.increment}>
          <Increment theme={theme} dispatch={this.props.dispatch} />
        </div>
      </div>
    );
  }
}

export default App;
