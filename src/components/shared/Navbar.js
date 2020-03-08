import React from "react";
import { Icon, Menu } from "antd";
import { matchPath, withRouter } from "react-router";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/auth";
// import logo from "../../assets/images/helpster_logo_white.svg";
// import { environment, getEnvironment } from "../../utilities";
import routes from "../../routes";
import MenuItem from "antd/lib/menu/MenuItem";

class Navbar extends React.Component {
  menuItems = [
    {
      icon: "environment",
      name: "World",
      to: routes.world
    },
    {
      icon: "user",
      name: "Profile",
      to: routes.profile
    },
    {
      icon: "picture",
      name: "Feed",
      to: routes.feed
    },
    {
      icon: "message",
      name: "Chat",
      to: routes.chatAll
    }
  ];

  onLogout = () => {
    this.props.logout();
    this.props.history.push(routes.login);
  };

  render() {
    const { location } = this.props;

    const selectedKeys = this.menuItems
      .filter(item => {
        return matchPath(location.pathname, {
          path: item.to,
          exact: false,
          strict: false
        });
      })
      .map(item => item.to);

    return (
      <Menu theme="dark" selectedKeys={selectedKeys} mode="horizontal">
        {/* <img
          src={logo}
          alt="Helpster Logo"
          style={{
            padding: collapsed ? 8 : 32,
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%"
          }}
        /> */}
        {this.menuItems.map(item => {
          return (
            <Menu.Item key={item.to}>
              <Link to={item.to}>
                <Icon type={item.icon} />
                <span>{item.name}</span>
              </Link>
            </Menu.Item>
          );
        })}
        <Menu.Item key={5} onClick={this.onLogout}>
          <Icon type="logout" />
          <span>Logout</span>
        </Menu.Item>
      </Menu>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Navbar)
);
