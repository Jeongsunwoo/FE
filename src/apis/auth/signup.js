import { instance } from "../axios";

const signUpUserAxios = async (payload) => {
  await instance.post(`${process.env.REACT_APP_SERVER_URL}/newUser`, payload);
};

export { signUpUserAxios };
