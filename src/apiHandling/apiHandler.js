import axios from "axios";

export const apiCall = async (method, url, params) => {
  const body = method === ("get" || "GET") ? "params" : "data";
  const URL = process.env.REACT_APP_BP_URL;

  const config = {
    method,
    url,
    baseURL: URL,
    [body]: params || {},
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  return await axios.request(config);
};
