import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wineInfo: {},
  reviews: [],
};

const wineInfoSlice = createSlice({
  name: "wineInfo",
  initialState,
  reducers: {
    onFetchWineInfo: (state, action) => {
      console.log(action.payload.review);
      return {
        ...state,
        wineInfo: action.payload.wine,
        reviews: action.payload.review,
      };
    },
  },
});

export default wineInfoSlice.reducer;
export const { onFetchWineInfo } = wineInfoSlice.actions;
