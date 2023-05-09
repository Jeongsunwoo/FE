import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    isLogin: (state, action) => {
      console.log(action.payload);
      return {
        isLogin: action.payload,
      };
    },
  },
});

export default loginSlice.reducer;
export const { isLogin } = loginSlice.actions;
