import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { token } from "../auth/authOperation";
// import { toast } from "react-toastify";

const getIncome = createAsyncThunk(
  "contacts/getContactsStatus",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      const { data } = await axios.get("/transaction/income");
      console.log("data", data.incomes);

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
      console.log("data", data);

      return data;
    } catch (error) {
      // toast.error(`${"Error, please repeat the request"}`);
    }
  }
);

const deleteIncom = createAsyncThunk(
  "contacts/deleteIncomStatus",
  async (id) => {
    try {
      await axios.delete(`/transaction/${id}`);
      return id;
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

      console.log("data", data);

      return data;
    } catch (error) {
      console.log("error", error);
      // toast.error(`${"Error, please repeat the request"}`);
    }
  }
);
// export { getContacts, addContact, deleteContact };
export { getIncome, addIncome, deleteIncom, getCategories };
