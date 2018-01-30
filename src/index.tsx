import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store.js';
import AppContainer from './containers/AppContainer';
import injectTapEventPluginRequire = require("react-tap-event-plugin");
injectTapEventPluginRequire();

class App extends React.Component<{}, {}> {
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