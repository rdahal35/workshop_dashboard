import React, { Component } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Avatar, Affix, Menu, Dropdown, Button, Icon } from "antd";

import { logout } from "../../actions/auth";
import { loadUser } from "../../actions/auth";

export class UserMenu extends Component {
  state = {
    top: 10,
    bottom: 10
  };

  render() {
    const menu = (
      <Menu className="user-menu-items">
        <div className="user-name">
          <span className="text-center">Hello!</span>
        </div>
        <span />
        <Menu.Item className="user-menu-item">
          <a rel="noopener noreferrer" href="#">
            <Icon type="user" style={{ marginRight: "4px" }} /> My Profile
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href="#" onClick={this.props.logout}>
            <Icon type="logout" style={{ marginRight: "4px" }} />
            Log Out
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <div>
          <Dropdown overlay={menu} placement="topRight">
            <Affix className="user-menu" offsetBottom={this.state.bottom}>
              <a href="#">
                <Avatar
                  style={{ size: "550px", color: "#0f0f0f" }}
                  icon="user"
                />
              </a>
            </Affix>
          </Dropdown>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout, loadUser })(UserMenu);
