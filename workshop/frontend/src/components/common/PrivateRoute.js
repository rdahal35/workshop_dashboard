import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { Spin } from "antd";

import { loadUser } from "../../actions/auth";

const PrivateRoute = ({ component: Component, auth, loadUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isLoading) {
          <div className="spinner">
            <Spin size="large" tip="Loading..." />
          </div>;
        } else if (!auth.token) {
          return <Redirect to="/login" />;
        } else {
          return <Component {...rest} />;
        }
      }}
    />
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { loadUser })(PrivateRoute);
