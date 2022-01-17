import { createSlice } from "@reduxjs/toolkit";
import { getUserData } from "./user-operations";

const initialState = {
  periodData: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getUserData.fulfilled](state, action) {
      state.periodData = action.payload;
    },
  },
});
export default userSlice.reducer;
