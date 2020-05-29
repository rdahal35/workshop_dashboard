import React, { Component, Fragment } from "react";

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-oldschool-dark";

import { Layout } from "antd";

const { Content } = Layout;

import "antd/dist/antd.css";
import "../assets/css/main.css";

import { loadUser } from "../actions/auth";

import PrivateRoute from "./common/PrivateRoute";

import Alert from "./layouts/Alert";
import Dashboard from "./users/Dashboard";
import Cusomer from "./users/Cusomer";

import Login from "./users/Login";

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center"
};

export class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    let auth = store.getState("auth");

    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Alert />
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute
                  exact
                  path="/admin/customers"
                  component={Cusomer}
                />
                <Route exact path="/login" component={Login} />
              </Switch>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
