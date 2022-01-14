import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./authOperation";

const initialState = {
  user: { email: "" },
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.user;
      })
      .addCase(authOperations.loginIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.user;
      })
      .addCase(authOperations.loginOut.fulfilled, (state, action) => {
        state.user.email = "";
        state.token = null;
      });
  },
});

export default authSlice.reducer;
