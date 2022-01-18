import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { token } from "../auth/authOperation";
// import { toast } from "react-toastify";

const getIncome = createAsyncThunk(
  "transaction/getTransactionStatus",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      const { data } = await axios.get("/transaction/income");
      return data;
    } catch (error) {
      // toast.error(`${"Error, please repeat the request"}`);
    }
  }
);

const addIncome = createAsyncThunk(
  "transaction/addTransactionStatus",
  async (transaction) => {
    try {
      const { data } = await axios.post("/transaction/income", transaction);
      return data;
    } catch (error) {
      // toast.error(`${"Error, please repeat the request"}`);
    }
  }
);

const deleteIncom = createAsyncThunk(
  "transaction/deleteIncomStatus",
  async (id) => {
    try {
      await axios.delete(`/transaction/${id}`);
      return id; // + newBalance
    } catch (error) {
      // toast.error(`${"Error, please repeat the request"}`);
    }
  }
);

const getCategories = createAsyncThunk(
  "transaction/getCategoriesStatus",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    token.set(persistedToken);
    try {
      const data = await axios.get("/transaction/income-categories");
      return data;
    } catch (error) {
      console.log("error", error);
      // toast.error(`${"Error, please repeat the request"}`);
    }
  }
);

/////////////////////////////////
const getExpense = createAsyncThunk(
  "transaction/getExpenseStatus",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      const { data } = await axios.get("/transaction/expense");
      return data;
    } catch (error) {
      // toast.error(`${"Error, please repeat the request"}`);
    }
  }
);

const addExpense = createAsyncThunk(
  "transaction/addExpenseStatus",
  async (transaction) => {
    try {
      const { data } = await axios.post("/transaction/expense", transaction);
      return data;
    } catch (error) {
      // toast.error(`${"Error, please repeat the request"}`);
    }
  }
);

const deleteExpense = createAsyncThunk(
  "transaction/deleteExpenseStatus",
  async (id) => {
    try {
      await axios.delete(`/transaction/${id}`);
      return id;
    } catch (error) {
      // toast.error(`${"Error, please repeat the request"}`);
    }
  }
);

const getCategoriesExpense = createAsyncThunk(
  "transaction/getCategoriesExpenseStatus",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    token.set(persistedToken);
    try {
      const data = await axios.get("/transaction/expense-categories");
      return data;
    } catch (error) {
      console.log("error", error);
      // toast.error(`${"Error, please repeat the request"}`);
    }
  }
);

export {
  getIncome,
  addIncome,
  deleteIncom,
  getCategories,
  getExpense,
  addExpense,
  deleteExpense,
  getCategoriesExpense,
};
