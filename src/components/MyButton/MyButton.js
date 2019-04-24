import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import cyan from '@material-ui/core/colors/cyan';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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

const styles = () => ({
  button: {
    display: 'block',
    margin: '100px auto 10px auto',
    width: '40%',
    height: '70px',

    'font-size': '30px',
    'font-family': 'Kanit',
    'text-transform': 'none'
  }
});

function MyButton(props) {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <Button variant="contained" color="primary" className={classes.button} onClick={props.changeColor}>
        Toggle
      </Button>
    </MuiThemeProvider>
  );
}

MyButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyButton);
