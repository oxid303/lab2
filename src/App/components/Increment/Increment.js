import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { incrementAC } from '../Redux/CounterReducer';

class Increment extends Component {
  render() {
    return (
      <MuiThemeProvider theme={this.props.theme}>
        <Tooltip disableFocusListener title="Increment">
          <Button variant="contained" color="primary" onClick={() => this.props.dispatch(incrementAC())}>
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              <path fill="none" d="M0 0h24v24H0V0z" /></svg>
          </Button>
        </Tooltip>
      </MuiThemeProvider>
    );
  }
}

export default Increment;
