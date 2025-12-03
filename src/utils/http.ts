import axios, { type AxiosRequestConfig } from "axios";
const httpClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const get = async (pathUrl: string, config: AxiosRequestConfig) => {
  const res = await httpClient.get(pathUrl, config);
  return res.data;
};
const post = async (pathUrl: string, data: object, config: AxiosRequestConfig) => {
  const res = await httpClient.post(pathUrl, data, config);
  return res.data;
};
const put = async (pathUrl: string, data: object, config: AxiosRequestConfig) => {
  const res = await httpClient.put(pathUrl, data, config);
  return res.data;
};
const patch = async (pathUrl: string, data: object, config: AxiosRequestConfig) => {
  const res = await httpClient.patch(pathUrl, data, config);
  return res.data;
};
const del = async (pathUrl: string, config: AxiosRequestConfig) => {
  const res = await httpClient.delete(pathUrl, config);
  return res.data;
};
const callApi = {
  get,
  post,
  put,
  patch,
  del,
};
export default callApi;
