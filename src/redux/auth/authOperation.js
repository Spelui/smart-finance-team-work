import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://kapusta-backend.goit.global/";

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = "";
//   },
// };

const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/register", credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const loginIn = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/login", credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const loginOut = createAsyncThunk(
  "auth/logout",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/logout", credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authOperations = {
  register,
  loginIn,
  loginOut,
};

export default authOperations;
