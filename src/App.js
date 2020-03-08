import React, { Component } from "react";
import "antd/dist/antd.css";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import * as actions from "./store/actions/auth";
import AuthenticatedRoute from "./shared/AuthenticatedRoute";

import routes from "./routes";

import CustomLayout from "./containers/Layout";
import FeedList from "./containers/FeedList";
import RouteDetailView from "./containers/RouteDetailView";
import LoginPage from "./LoginPage/LoginPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import WorldPage from "./components/World/index";
import ProfilePage from "./components/Profile/index";

class App extends Component {
  render() {
    const history = createBrowserHistory();
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route
              exact
              path={routes.home}
              render={() => <Redirect to={routes.world} />}
            />
            <Route exact path={routes.login} component={LoginPage} />
            <Route exact path={routes.signUp} component={SignUpPage} />
            <CustomLayout history={history}>
              <Switch>
                {/* <Route render={() => <Redirect to={routes.world} />} /> */}
                <Route exact path={routes.profile} component={ProfilePage} />
                <Route exact path={routes.world} component={WorldPage} />
                <Route exact path={routes.feed} component={FeedList} />
                {/* <AuthenticatedRoute
                  path={routes.routeDetail}
                  component={RouteDetailView}
                /> */}
                {/* <AuthenticatedRoute path={routes.world} component={WorldPage} />
                <AuthenticatedRoute
                  path={routes.profile}
                  component={ProfilePage}
                /> */}
              </Switch>
            </CustomLayout>
          </Switch>
        </Router>
      </div>
    );
  }
}

// mapStateToProps = state => {
//   return {
//     isAuthenticated: state.token !== null
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onTryAutoSignUp: () => dispatch(actions.authCheckState())
//   };
// };

export default App;
