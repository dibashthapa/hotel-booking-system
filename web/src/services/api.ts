import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { config } from "config";

export default class Api {
  public axiosFunction: AxiosInstance;
  constructor(setToken = false, version = "v1") {
    this.axiosFunction = axios.create({
      baseURL: `${config.baseUrl}/${version}`,
    });

    if (setToken) {
      this.setLocalStorageToken();
    }
  }

  setLocalStorageToken = () => {
    this.axiosFunction.interceptors.request.use(
      (config) => {
        config.headers["Authorization"] =
          "Bearer " + localStorage.getItem("token");
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  };

  get = (url: string, data?: any) => {
    return this.axiosFunction
      .get(url, { params: data })
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  };

  post = (
    url: string,
    data: any,
    headers: AxiosRequestConfig["headers"] | null = null
  ) => {
    if (headers) {
      for (const header in headers) {
        if (headers[header]) {
          this.axiosFunction.defaults.headers[header] = headers[header];
        }
      }
    }

    return this.axiosFunction
      .post(url, data)
      .then((res) => res.data)
      .catch((err) => {
        throw err;
      });
  };
}
