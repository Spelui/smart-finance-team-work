import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://kapusta-backend.goit.global/";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

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
      token.set(data.accessToken);
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
      token.unset();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const fetchCurrentUser = createAsyncThunk(
  "auth/refreshUserData",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    console.log("persistedToken :>> ", persistedToken);
    try {
      const { data } = await axios.get("/user");
      return data;
    } catch (error) {}
  }
);

const setBalance = createAsyncThunk(
  "auth/setBalance",
  async (balance, { rejectWithValue }) => {
    try {
      const data = await axios.patch("/user/balance", balance);
      return data.newBalance;
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);

const refreshTokens = createAsyncThunk(
  "auth/refreshTokens",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const oldRefreshToken = state.auth.refreshToken;
    const sid = state.auth.sid;

    axios.defaults.headers.common.Authorization = `Bearer ${oldRefreshToken}`;
    try {
      const { data } = await axios.post("/auth/refresh", { sid });
      axios.defaults.headers.common.Authorization = `Bearer ${data.newAccessToken}`;
      return data;
    } catch (error) {}
  }
);

const authOperations = {
  register,
  loginIn,
  loginOut,
  fetchCurrentUser,
  setBalance,
  refreshTokens,
};

export default authOperations;
