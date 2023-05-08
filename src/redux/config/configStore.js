import { configureStore } from "@reduxjs/toolkit";
import wineListSlice from "../modules/wineListSlice";

const store = configureStore({
  reducer: {
    wineListSlice,
  },
});
export default store;
