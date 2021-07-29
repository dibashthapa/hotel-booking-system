import { createContext } from "react";
import { Credentials, SignUpCredential } from "services/authService";

interface User {
  _id?: string;
  name?: string;
  profilePicUrl?: string;
  roles?: string[];
}
export interface payload {
  user?: Object;
  token?: string;
  credentials?: Credentials;
  registerCredentials?: SignUpCredential;
}
export type ActionType = {
  type:
    | "LOGIN_REQUEST"
    | "LOGIN_SUCCESS"
    | "LOGIN_ERROR"
    | "SIGNUP_REQUEST"
    | "SIGNUP_SUCCESS"
    | "SIGNUP_ERROR"
    | "FETCH_USER_SUCCESS"
    | "FETCH_USER_ERROR"
    | "VERIFIED_SUCESS"
    | "VERIFIED_ERROR"
    | "LOGOUT"
    | "INITIALIZED"
    | "GET_TOKEN"
    | "SET_TOKEN";
  payload?: payload;
  error?: string;
};

export type Dispatch = (action: ActionType) => void;
export type State = {
  isUserLoggedIn?: boolean;
  currentUser?: User;
  isLoading?: boolean;
  errorMessage?: string;
};

export const AuthContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);
