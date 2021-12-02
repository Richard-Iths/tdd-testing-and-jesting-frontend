import axios, { AxiosResponse } from "axios";

interface IApi<T> {
  getRequest(url: string): Promise<AxiosResponse<T>>;
}

export default class Api<T> implements IApi<T> {
  private instance = axios.create({
    baseURL: "https://localhost:5000/api/",
    timeout: 1000,
  });

  async getRequest(url: string): Promise<AxiosResponse<T>> {
    return axios.get(url);
  }
}
