import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
  render() {
    if (this.props.showFooter)
      return (
        <div className="footer">
          Powered by NewsAPI.org
        </div>
      )
    else {
      return <div />
    }
  }
};

const mapStateToProps = (state) => {
  return {
    showFooter: state.news.footer
  }
}

export default connect(mapStateToProps)(Footer)