import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const setBalance = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await axios.post("/user/balance", credentials);
      return data.newBalance;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const balanceOperations = {
  setBalance,
};

export default balanceOperations;
