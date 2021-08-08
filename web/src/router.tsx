import { Home } from "pages/Home";
import { Login } from "pages/Login";
import { SignUp } from "pages/Signup";
import { Notfound } from "pages/Notfound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  LOGIN_PAGE,
  REGISTRATION_PAGE,
  MY_BOOKINGS,
  NOT_FOUND,
} from "settings/constant";
import Navbar from "components/Navbar";
import { Listing } from "pages/Listing";
import { PrivateRoute } from "components/PrivateRoute";
import { Hotel } from "pages/Hotel";
import { Bookings } from "pages/Bookings";
const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Login} path={LOGIN_PAGE} exact />
        <Route component={SignUp} path={REGISTRATION_PAGE} exact />
        <Route component={Listing} path={LISTING_POSTS_PAGE} exact />
        <Route component={Home} path={HOME_PAGE} exact />
        <Route component={Notfound} path={NOT_FOUND} exact />
        <PrivateRoute
          component={Hotel}
          path={`${LISTING_POSTS_PAGE}/id/:id`}
          exact
        />
        <PrivateRoute component={Bookings} path={MY_BOOKINGS} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
