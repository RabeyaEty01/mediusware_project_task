import axios from "axios";
import { baseUrl } from "./apiConfig";

const instance = axios.create({
  baseURL: baseUrl,
});

instance.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

export default async (url, optionsProps = {}, fileUpload) => {
  const options = {
    method: "GET",
    mode: "cors",
    url: url,
    ...optionsProps,
  };


  try {
    const response = await instance(options);

    return {
      status: response.status,
      ...response.data,
    };
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error(error.response.data);
      console.error(error.response.status);
      console.error(error.response.headers);
      // throw error.response;
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.error(error.request);
      // throw error.request;
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error", error.message);
    }
    console.error(error.config);
    throw error;
  }
};
