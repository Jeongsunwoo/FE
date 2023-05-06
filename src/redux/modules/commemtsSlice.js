import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const commentsSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    onAddComment: () => {
      console.log("comment");
    },
  },
});

export default commentsSlice.reducer;
export const { onAddComment } = commentsSlice.actions;
