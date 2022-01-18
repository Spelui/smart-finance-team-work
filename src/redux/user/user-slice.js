import { createSlice } from "@reduxjs/toolkit";
import {
  getUserData,
  getIncomeCategories,
  getExpenseCategories,
} from "./user-operations";

const initialState = {
  incomeCategories: [],
  expenseCategories: [],

  periodData: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getUserData.fulfilled](state, action) {
      state.periodData = action.payload;
    },
    [getIncomeCategories.fulfilled](state, { payload }) {
      state.incomeCategories = payload;
    },
    [getExpenseCategories.fulfilled](state, { payload }) {
      state.expenseCategories = payload;
    },
  },
});
export default userSlice.reducer;
