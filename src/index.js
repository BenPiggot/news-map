import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';
import NewsList from './components/NewsList';

class AppContainer extends Component {
  render () {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <NewsList />
        </MuiThemeProvider>
      </Provider>
    )
  }
}

render(<AppContainer />, document.getElementById('app'));