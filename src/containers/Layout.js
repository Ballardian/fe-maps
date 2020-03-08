import React from "react";
import { Layout, Menu } from "antd";
import Navbar from "../components/shared/Navbar";

const { Header, Content } = Layout;

class CustomLayout extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <Navbar />
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
            {this.props.children}
          </div>
        </Content>
      </Layout>
    );
  }
}

export default CustomLayout;
