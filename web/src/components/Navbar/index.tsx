import { Nav, NavContainer } from "./index.style";
import { Text, List, ListItem, Button } from "@hotel-ui";
import { useHistory } from "react-router";
import { Avatar, Dropdown, Menu } from "antd";
import { useAuth } from "auth";
import {
  LOGIN_PAGE,
  REGISTRATION_PAGE,
  LISTING_POSTS_PAGE,
  HOME_PAGE,
  PROFILE,
} from "settings/constant";
import { logoutUser, verifyUser } from "auth/actions";
import { useEffect } from "react";
const Navbar = () => {
  const history = useHistory();

  const { state, dispatch } = useAuth();
  const handlePushLogin = () => {
    history?.push({ pathname: LOGIN_PAGE });
  };

  const handlePushRegister = () => {
    history?.push({ pathname: REGISTRATION_PAGE });
  };

  const handlePushHome = () => {
    history.push({ pathname: HOME_PAGE });
  };

  const handlePushListing = () => {
    history?.push({ pathname: LISTING_POSTS_PAGE });
  };

  const handleLogout = () => {
    logoutUser(dispatch);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      verifyUser(dispatch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isLoading]);

  const UnAuthorizedNav = () => (
    <>
      <ListItem>
        <Button clickHandler={handlePushLogin}>Login</Button>
      </ListItem>
      <ListItem>
        <Button
          clickHandler={handlePushRegister}
          fill="outlined"
          variant="primary"
        >
          Sign Up
        </Button>
      </ListItem>
    </>
  );

  const menu = (
    <Menu>
      <Menu.Item key="3" onClick={() => history.push(PROFILE)}>
        Account Settings
      </Menu.Item>
      <Menu.Item key="4" onClick={handleLogout}>
        Log Out
      </Menu.Item>
    </Menu>
  );

  const AuthorizedNav = ({ profile }: { profile: string | undefined }) => (
    <ListItem padding="20px">
      <Dropdown overlay={menu} trigger={["click"]}>
        <Avatar src={profile} />
      </Dropdown>
    </ListItem>
  );

  return (
    <Nav>
      <NavContainer>
        <div>
          <Text margin="10px" onClick={handlePushHome} cursor="pointer">
            Mero Hotel
          </Text>
        </div>
        <List>
          <ListItem onClick={handlePushListing}>Listing</ListItem>
          {state.isUserLoggedIn ? (
            <AuthorizedNav profile={state?.currentUser?.profilePicUrl} />
          ) : (
            <UnAuthorizedNav />
          )}
        </List>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
