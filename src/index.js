import React, { Component } from 'react';
import { render } from 'react-dom';

class AppContainer extends Component {
  render () {
    return (
      <div>News Map</div>
    )
  }
}

render(<AppContainer />, document.getElementById('app'));