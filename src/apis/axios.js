import axios from "axios";

export const instance = axios.create({
<<<<<<< HEAD:src/api/axios.js
  baseURL: process.env.REACT_APP_SERVER_URL,
=======
  baseURL: process.env.SERVER,
>>>>>>> 0108c75796149d05a053221683944e5cf8f3928b:src/apis/axios.js
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const baseURL = axios.create({
<<<<<<< HEAD:src/api/axios.js
  baseURL: process.env.REACT_APP_SERVER_URL,
=======
  baseURL: process.env.SERVER,
>>>>>>> 0108c75796149d05a053221683944e5cf8f3928b:src/apis/axios.js
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

//인스턴스 request header
baseURL.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = sessionStorage.getItem("AccessToken");
  config.headers["Authorization"] = `${token}`;
  return config;
});
