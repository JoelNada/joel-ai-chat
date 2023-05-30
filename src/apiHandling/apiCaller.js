import { apiCall } from "./apiHandler";

export const login = async (data) => {
  return await apiCall("POST", "/api/user/login", data);
};

export const loginFunction = async (data) => {
  return await apiCall("POST", "/api/user/login", data);
};

export const openAi = async (data) => {
  return apiCall("POST", "/completions", data);
};

export const test = async () => {
  return await apiCall("GET", "/api/user/test", null);
};

export const registerComp = async (data) => {
  return await apiCall("POST", "/api/user/register", data);
};
