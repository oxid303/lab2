import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const styles = () => ({
  button: {
    'width': '100%',
    'font-size': '30px',
    'font-family': 'Kanit',
    'text-transform': 'none'
  },
  lowFontSize: {
    'font-size': '10px',
    'margin-top': '12px'
  }
});

class MyButton extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={this.props.theme}>
        <Tooltip disableHoverListener title="Counter was reset">
          <Button variant="contained" color="primary"
            className={this.props.classes.button} onClick={() => this.props.resetCounter()}>
            Count: {this.props.state.counterReducer.counter},&nbsp;
            <span className={this.props.classes.lowFontSize}>click to reset</span>
          </Button>
        </Tooltip>
      </MuiThemeProvider>
    );
  }
}

MyButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyButton);
