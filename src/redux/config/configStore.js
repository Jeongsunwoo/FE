import { configureStore } from "@reduxjs/toolkit";
import wineInfoSlice from "../modules/wineInfoSlice";

const store = configureStore({
  reducer: {
    wineInfoSlice,
  },
});
export default store;
