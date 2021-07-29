import { useAuth } from "auth";
import { LOGIN_PAGE } from "settings/constant";
import { Route, Redirect, RouteProps } from "react-router-dom";

export const PrivateRoute: React.FC<RouteProps> = (props) => {
  const { state } = useAuth();

  if (state.isLoading) {
    return null;
  }

  if (state.isUserLoggedIn) {
    return (
      <Route
        path={props.path}
        exact={props.exact}
        component={props.component}
      />
    );
  } else {
    return (
      <Redirect
        to={{
          pathname: LOGIN_PAGE,
          state: {
            prevLocation: props.location,
          },
        }}
      />
    );
  }
};
