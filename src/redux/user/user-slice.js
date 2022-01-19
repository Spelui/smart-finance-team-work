import { createSlice } from "@reduxjs/toolkit";
import { getPeriodData } from "./user-operations";

const initialState = {
  periodData: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getPeriodData.fulfilled](state, { payload }) {
      state.periodData = payload;
    },
    // [getIncomeCategories.fulfilled](state, { payload }) {
    //   state.incomeCategories = payload;
    // },
    // [getExpenseCategories.fulfilled](state, { payload }) {
    //   state.expenseCategories = payload;
    // },
  },
});
export default userSlice.reducer;
