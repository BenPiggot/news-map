import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';
import AppContainer from './containers/AppContainer';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <AppContainer />
        </MuiThemeProvider>
      </Provider>
    )
  }
}

render(<App />, document.getElementById('app'));