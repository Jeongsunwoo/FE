import { createSlice } from "@reduxjs/toolkit";
import { checkingLogin } from "../../apis/auth/checkingLogin";

const initialState = {
  isLogin: checkingLogin(),
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    isLogin: (action) => {
      return {
        isLogin: checkingLogin(),
      };
    },
  },
});

export default loginSlice.reducer;
export const { isLogin } = loginSlice.actions;
