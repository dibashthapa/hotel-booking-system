import authService from "services/authService";
import { payload, Dispatch } from "./authContext";

export async function loginUser(
  dispatch: Dispatch,
  payload: payload["credentials"]
) {
  try {
    dispatch({
      type: "LOGIN_REQUEST",
    });

    const {
      data: { user, tokens },
    } = await authService.signIn(payload);

    if (user) {
      dispatch({ type: "LOGIN_SUCCESS", payload: { user: user } });
      localStorage.setItem("token", tokens.accessToken);
      return user;
    }
  } catch (err) {
    dispatch({ type: "LOGIN_ERROR", error: err.response.data.message });
  }
}

export async function verifyUser(dispatch: Dispatch) {
  try {
    const {
      data: { user },
    } = await authService.verifyUser();

    if (user) {
      dispatch({ type: "VERIFIED_SUCESS", payload: { user: user } });
    } else {
      dispatch({ type: "VERIFIED_ERROR", error: "Connection Error" });
    }
  } catch (err) {
    dispatch({ type: "VERIFIED_ERROR", error: err.response.data.message });
  }
}

export function logoutUser(dispatch: Dispatch) {
  localStorage.removeItem("token");
  dispatch({ type: "LOGOUT" });
}

export async function registerUser(
  dispatch: Dispatch,
  payload: payload["registerCredentials"]
) {
  try {
    dispatch({
      type: "SIGNUP_REQUEST",
    });

    const {
      data: { user, tokens },
    } = await authService.signUp(payload);

    if (user) {
      dispatch({ type: "SIGNUP_SUCCESS", payload: { user: user } });
      localStorage.setItem("token", tokens.accessToken);
      return user;
    }
  } catch (err) {
    dispatch({ type: "SIGNUP_ERROR", error: err.response.data.message });
  }
}
