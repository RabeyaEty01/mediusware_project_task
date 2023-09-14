import Axios from "axios";

import { baseUrl } from "./apiConfig";

export default class BaseApi {
  static Axios = Axios.create({
    baseURL: baseUrl,
    validateStatus: (status) => status < 500,
  });
}
