import { instance } from "../axios";

const loginAxios = async (payload) => {
  try {
    const res = await instance.post("/wine/user/login", payload);
    return res.data.message;
  } catch (error) {
    throw error;
  }
};

export { loginAxios };
