//import { store } from "../../store";
import axios from "axios";

class Api {
  static endPointBaseUrl = `https://www.reddit.com/r/reactjs`;

  static defaultHeaders = () => {
    const headers = {
      Accept: "application/json",
    };

    return headers;
  };

  /**
   * Creates a instance with the API information's
   */
  static initialize = () => {
    const instance = axios.create({
      baseURL: Api.endPointBaseUrl,
      headers: Api.defaultHeaders(),
    });

    return instance;
  };
}

export default Api;
