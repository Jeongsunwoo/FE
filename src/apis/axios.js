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
    // const sliceToken = token.slice(6, token.length - 1).trim();
    if (token) {
      // 추출한 토큰 값을 처리하는 코드 작성
      sessionStorage.setItem("AccessToken", token);
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// baseURL
baseURL.interceptors.request.use((config) => {
  // console.log(config);
  if (config.headers === undefined) return;
  const token = sessionStorage.getItem("AccessToken");
  // console.log(token);
  config.headers["ACCESS_KEY"] = `${token}`;
  return config;
});

// CORS 리액트 확인할 점
// 1. 리액트) index.js 에 axios.defaults.withcredentials = true; 추가
// 2. WebMvcConfigurer 에.allowCredentials(true) 추가
// 3. allowedOrigins("") 에 백앤드, 프론트엔드 url 전부 추가
// 4. 리액트) package.json에 프록시 속성자 추가
