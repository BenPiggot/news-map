import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

const styles = { 
  fontFamily: 'Raleway, sans-serif',
  backgroundColor: '#222'
};

const Header = () => (
  <AppBar
    style={styles}
    title={<span>NewsMap</span>}
    iconElementRight={<FlatButton label="Save" />}
  />
);

export default Header;