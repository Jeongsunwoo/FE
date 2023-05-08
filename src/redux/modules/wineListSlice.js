import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wineList: [],
};

const wineListSlice = createSlice({
  name: "wineList",
  initialState,
  reducers: {
    onFetchWineList: (state, action) => {
      return {
        wineList: action.payload,
      };
    },
  },
});

export default wineListSlice.reducer;
export const { onFetchWineList } = wineListSlice.actions;
