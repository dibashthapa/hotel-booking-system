import Api from "./api";

export interface Credentials {
  email: string;
  password: string;
}

export interface SignUpCredential extends Credentials {
  name: string;
}
const auth = {
  signIn: (credentials?: Credentials) => {
    const api = new Api(false);
    return api.post("login/basic", credentials);
  },

  signUp: (credentials?: SignUpCredential) => {
    const api = new Api(false);
    return api.post("signup/basic", credentials);
  },
  verifyUser: () => {
    const api = new Api(false);
    const token = localStorage.getItem("token");
    return api.post("verify/basic", null, {
      Authorization: "Bearer " + token,
    });
  },

  fetchLoggedInUser: (token: string) => {
    const api = new Api(false);
    return api.post("/profile/my", { token });
  },
};

export default auth;
