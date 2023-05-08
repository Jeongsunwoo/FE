import { instance } from "../axios";

const loginAxios = async (payload) => {
  try {
    const { token } = await instance.post("/wine/user/login", payload);
    console.log(token);
    return token;
  } catch (error) {
    throw error;
  }
};

export { loginAxios };
