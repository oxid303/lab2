import React from 'react';
import s from './App.module.css';
import Counter from './components/Counter/Counter';
import Decrement from './components/Decrement/Decrement';
import Increment from './components/Increment/Increment';
import cyan from '@material-ui/core/colors/cyan';
import { createMuiTheme } from '@material-ui/core/styles';
import { incrementAC, decrementAC, resetCounterAC } from './components/Redux/CounterReducer';

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.state;
  }

  increment() {
    this.props.dispatch(incrementAC());
    this.setState(this.props.state);
  }

  decrement() {
    this.props.dispatch(decrementAC());
    this.setState(this.props.state);
  }

  resetCounter() {
    this.props.dispatch(resetCounterAC());
    this.setState(this.props.state);
  }
  
  render() {
    return (
      <div className={s.wrapper}>
        <div className={s.decrement}>
          <Decrement theme={theme} decrement={this.decrement.bind(this)} />
        </div>
        <div className={s.button}>
          <Counter theme={theme} state={this.props.state} resetCounter={this.resetCounter.bind(this)} />
        </div>
        <div className={s.increment}>
          <Increment theme={theme} increment={this.increment.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
