import { instance } from "../axios";

const loginAxios = async (payload) => {
  try {
    const res = await instance.post("/wine/user/login", payload);
    console.log(res);
    console.log("로그인 성공 응답 받았어요");
    const token = res.headers.get("ACCESS_KEY");
    // console.log(acc);
    return res;
  } catch (error) {
    throw error;
  }
};

export { loginAxios };
