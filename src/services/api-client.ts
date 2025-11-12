import axios from "axios";

export interface FetchRes<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b708c390538c49efb9d7d3871e0abad2",
  },
});
