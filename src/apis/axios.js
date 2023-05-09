import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const baseURL = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// //인스턴스 request header
// baseURL.interceptors.request.use((config) => {
//   if (config.headers === undefined) return;
//   const token = sessionStorage.getItem("AccessToken");
//   config.headers["ACCESS_KEY"] = `${token}`;
//   return config;
// });

instance.interceptors.request.use(
  function (response) {
    console.log("인터넵트 요청 받았어요!");
    // 정상 응답
    return response;
  },
  function (error) {
    console.log("인터셉트 요청 못받았어요...ㅠㅠ");
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    const token = response.headers.get("ACCESS_KEY");
    const sliceToken = token.slice(6, token.length - 1).trim();
    if (sliceToken) {
      // 추출한 토큰 값을 처리하는 코드 작성
      sessionStorage.setItem("AccessToken", sliceToken);
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
