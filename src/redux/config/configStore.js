import { configureStore } from "@reduxjs/toolkit";
import commemtsSlice from "../modules/commemtsSlice";

const store = configureStore({
  reducer: {
    commemtsSlice,
  },
});
export default store;
