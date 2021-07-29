import { Home } from "pages/Home";
import { Login } from "pages/Login";
import { SignUp } from "pages/Signup";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  LOGIN_PAGE,
  PROFILE,
  REGISTRATION_PAGE,
} from "settings/constant";
import Navbar from "components/Navbar";
import { Listing } from "pages/Listing";
import { PrivateRoute } from "components/PrivateRoute";
import { Profile } from "pages/Profile";
import { Hotel } from "pages/Hotel";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Login} path={LOGIN_PAGE} exact />
        <Route component={SignUp} path={REGISTRATION_PAGE} exact />
        <Route component={Listing} path={LISTING_POSTS_PAGE} exact />
        <PrivateRoute component={Home} path={HOME_PAGE} exact />
        <PrivateRoute component={Profile} path={PROFILE} exact />
        <Route component={Hotel} path={`${LISTING_POSTS_PAGE}/id/:id`} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
