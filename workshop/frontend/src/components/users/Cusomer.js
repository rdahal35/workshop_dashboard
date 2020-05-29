import React, { Component } from "react";

import { Layout } from "antd";

const { Content } = Layout;

import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";

export class Cusomer extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar active={["2"]} />
        <Layout>
          <Layout>
            <Navbar />
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default Cusomer;
