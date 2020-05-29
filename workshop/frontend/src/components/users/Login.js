import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import { Form, Icon, Input, Button, Checkbox, Spin } from "antd";

import "./css/login.css";
import "./css/spinner.css";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

export class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.auth.isLoading) {
      return (
        <div className="spinner">
          <Spin size="large" tip="Loading..." />
        </div>
      );
    }
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    const { username, password } = this.state;
    return (
      <div className="login-div">
        <div className="card login-card">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              <Input
                prefix={
                  <Icon
                    type="user"
                    style={{ color: "rgba(0,0,0,.25)", marginRight: "5px" }}
                  />
                }
                placeholder="Username"
                name="username"
                value={username}
                onChange={this.onChange}
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon
                    type="lock"
                    style={{ color: "rgba(0,0,0,.25)", marginRight: "5px" }}
                  />
                }
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.onChange}
              />
            </Form.Item>
            <Form.Item>
              <div>
                <Checkbox className="remember-me">Remember me</Checkbox>
                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </div>
              <Button
                type="default"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth
});

export default connect(mapStateToProps, { login })(Login);
