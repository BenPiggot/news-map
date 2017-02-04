import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class SourcesSelector extends Component {
  render () {
    return (
      <SelectField floatingLabelText="Choose a Source">
        <MenuItem value='the-new-york-times' primaryText="New York Times" label="New York Times"/>
        <MenuItem value='the-washington-post' primaryText="Washington Post" label="Washington Post" />
        <MenuItem value='die-zeit' primaryText="Die Zeit" label="Die Zeit"/>
        <MenuItem value='espn' primaryText="ESPN" label="ESPN"/>
      </SelectField>
    )
  }
}

export default SourcesSelector;