import React, { Component, Fragment } from "react";

import { withAlert } from "react-alert";

import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alert extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error != prevProps.error) {
      // sdaf
    }
    if (message !== prevProps.message) {
      //   dsaf logoutSuccess
      if (message.loginSuccess) alert.success(message.loginSuccess);
      if (message.logoutSuccess) alert.success(message.logoutSuccess);
    }
  }

  render() {
    return <Fragment />;
  }
}
const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alert));
