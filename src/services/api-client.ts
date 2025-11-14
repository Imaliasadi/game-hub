import axios, { type AxiosRequestConfig } from "axios";

export interface FetchRes<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstence = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b708c390538c49efb9d7d3871e0abad2",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstence.get<FetchRes<T>>(this.endpoint, config).then((res) => res.data);
  };
}

export default APIClient;
