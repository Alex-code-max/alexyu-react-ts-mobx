import axios from "axios";
const validateStatus = (status: number) =>
  (status >= 200 && status < 300) || status === 700;

export const apiGet = (url: string, params?: any) => {
  return axios.get(url, { params, validateStatus });
};
export const apiPost = (url: string, params?: any, config?: any) => {
  return axios.post(url, { ...params, validateStatus });
};

export const apiPut = (url: string, params?: any, config?: any) => {
  return axios.put(url, { ...params, validateStatus });
};
