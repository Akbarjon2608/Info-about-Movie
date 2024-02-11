import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Nzg3ZTdkZjQ1MGExYTUxODcxYjE3N2QzYzExMGZmZiIsInN1YiI6IjY1YzRiMzc1NzEzZWQ0MDE2YzE3M2QyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BaXwFoaovO90qQTxjY5qtQKAgOrnw9d4ULobSPpz3d4";
export const Axios = axios.create({
  baseURL: baseUrl,
});
Axios.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
});
