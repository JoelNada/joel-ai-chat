import axios from "axios";

export const apiCall = async (method, url, params) => {
  const body = method === ("get" || "GET") ? "params" : "data";
  const URL = "https://joel-ai-chat-api.onrender.com";

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
