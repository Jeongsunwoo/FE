import { configureStore } from "@reduxjs/toolkit";
import wineInfoSlice from "../modules/wineInfoSlice";
import loginSlice from "../modules/loginSlice";

const store = configureStore({
  reducer: {
    wineInfoSlice,
    loginSlice,
  },
});
export default store;
