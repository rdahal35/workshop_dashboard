import React, { Component, useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { Layout, Menu, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import "./main.css";

const Sidebar = props => {
  const [collapsed, setCollapsed] = useState(false);

  let { path, url } = useRouteMatch();

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider collapsible collapsed={collapsed} trigger={null} className="sidebar">
      <div
        className="sidebar-title"
        style={{
          height: "65px"
        }}
      >
        <b>Admin</b>
      </div>
      <Menu theme="dark" defaultSelectedKeys={props.active} mode="inline">
        <Menu.Item key="1">
          <Link to="/">
            <Icon type="pie-chart" />
            <span>Dashboard</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/admin/customers">
            <Icon type="desktop" />
            <span>Customers</span>
          </Link>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="user" />
              <span>User</span>
            </span>
          }
        >
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="team" />
              <span>Team</span>
            </span>
          }
        >
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9">
          <Icon type="file" />
          <span>File</span>
        </Menu.Item>
      </Menu>
      <div className="toggle">
        <Icon
          className="trigger"
          type={collapsed ? "menu-unfold" : "menu-fold"}
          onClick={toggle}
        />
      </div>
    </Sider>
  );
};

export default Sidebar;
