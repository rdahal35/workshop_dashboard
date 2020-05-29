import React, { Component } from "react";

import { Row, Col, Layout, Menu, Breadcrumb, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

import UserMenu from "./UserMenu";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <Header className="header logo">
          <UserMenu />
          <img
            src="static/img/reactlogo.png"
            style={{
              height: "45px",
              width: "75px"
            }}
          />
        </Header>
        <hr className="line-divider" />
      </div>
    );
  }
}

export default Navbar;
