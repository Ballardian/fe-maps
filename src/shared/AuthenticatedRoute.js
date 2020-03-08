import React from "react";
import { Route, Redirect } from "react-router-dom";
import routes from "../routes";
// import store from '../../store';

// TODO: Improve readability with props
const AuthenticatedRoute = ({
  exact,
  path,
  extraProps,
  component: Component
}) => {
  const token = localStorage.getItem("token");

  // TODO: Bug where every refresh routes user to /signup. This is because clientId has to be re-fethced and updates too slowly.
  // const storeState = store.getState();
  // if (token && !storeState.user.clientId && !storeState.user.isLoading) {
  //   return <Redirect to={routes.signUp} />;
  // }
  return (
    <Route
      exact={exact}
      path={path}
      render={props => {
        const allProps = { ...props, ...extraProps };
        return token ? (
          <Component {...allProps} />
        ) : (
          <Redirect to={routes.login} />
        );
      }}
    />
  );
};

export default AuthenticatedRoute;
