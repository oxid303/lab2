import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

class Increment extends Component {
  render() {
    return (
      <MuiThemeProvider theme={this.props.theme}>
        <Tooltip disableFocusListener title="Decrement">
          <Button variant="contained" color="primary" onClick={this.props.decrement}>
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 24 24">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
              <path fill="none" d="M0 0h24v24H0V0z" /></svg>
          </Button>
        </Tooltip>
      </MuiThemeProvider>
    );
  }
}

export default Increment;
