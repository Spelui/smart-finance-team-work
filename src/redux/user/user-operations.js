import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { token } from "../auth/authOperation";

const getUserData = createAsyncThunk(
  "user/getUserDataStatus",
  async (currentDate, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get(
        `transaction/period-data?date=${currentDate}`
      );
      //   console.log("data :>> ", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const getIncomeCategories = createAsyncThunk(
  "user/getIncomeCategoriesStatus",
  async (_, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const persistedToken = state.auth.token;
    // if (persistedToken === null) {
    //   return thunkAPI.rejectWithValue();
    // }

    // token.set(persistedToken);
    try {
      const { data } = await axios.get(`transaction/income-categories`);
      console.log("data :>> ", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const getExpenseCategories = createAsyncThunk(
  "user/getExpenseCategoriesStatus",
  async (_, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const persistedToken = state.auth.token;
    // if (persistedToken === null) {
    //   return thunkAPI.rejectWithValue();
    // }

    // token.set(persistedToken);
    try {
      const { data } = await axios.get(`transaction/expense-categories`);
      console.log("data :>> ", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export { getUserData, getIncomeCategories, getExpenseCategories };
