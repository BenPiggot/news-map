import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NewsList from './components/NewsList';

class AppContainer extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <NewsList />
      </MuiThemeProvider>
    )
  }
}

render(<AppContainer />, document.getElementById('app'));