import { baseURL, instance } from "../axios";

const loginAxios = async (payload) => {
  try {
    const res = await instance.post("/wine/user/login", payload);
    return res.data.message;
  } catch (error) {
    throw error;
  }
};

const logoutAxios = async () => {
  try {
    const { res } = await baseURL.post("/wine/user/logout");
    // console.log(res.message);
    // return res.message;
    return res;
  } catch (error) {
    throw error;
  }
};

export { loginAxios, logoutAxios };
