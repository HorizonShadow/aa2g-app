import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Stores from './stores/Stores';
import { Provider } from 'mobx-react';
import Main from './components/main/Main.jsx';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/navigation/Navigation.jsx';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  }
});

class App extends Component {

  constructor(props) {
    super(props);
    this.stores = new Stores();
  }

  render() {
    const { classes } = this.props;
    return (
      <Provider stores={this.stores}>
        <BrowserRouter>
          <div className={classes.root}>
            <Navigation>
              <Main />
            </Navigation>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);