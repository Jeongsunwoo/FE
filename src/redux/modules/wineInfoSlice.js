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
