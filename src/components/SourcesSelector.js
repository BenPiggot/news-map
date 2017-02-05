import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { fetchNews } from '../actions/actions';

class SourcesSelector extends Component {
  handleSelect (event, index, value) {
    this.props.fetchNews(value)
  }

  render () {
    return (
      <SelectField style={{fontFamily: 'Raleway'}} onChange={this.handleSelect.bind(this)} floatingLabelText="Choose a Section">
        <MenuItem value='us' primaryText="US News" label="US News"/>
        <MenuItem value='international' primaryText="International News" label="International News" />
        <MenuItem value='sports' primaryText="Sports" label="Sports"/>
        <MenuItem value='technology' primaryText="Technology" label="Technology"/>
        <MenuItem value='business' primaryText="Business" label="Business"/>
        <MenuItem value='german' primaryText="German Language News" label="German Language News"/>
      </SelectField>
    )
  }
}

export default connect(null, { fetchNews })(SourcesSelector);