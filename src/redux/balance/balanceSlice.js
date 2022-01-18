import { createSlice } from "@reduxjs/toolkit";
import balanceOperations from "./balanceOperation";

const initialState = {
  user: { balance: null },
};

const balanceSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(balanceOperations.setBalance.fulfilled, (state, action) => {
      state.user.balance = action.payload;
    });
  },
});

export default balanceSlice.reducer;
