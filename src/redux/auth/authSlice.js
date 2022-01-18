import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./authOperation";

const initialState = {
  user: { email: "" },
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(authOperations.register.fulfilled, (state) => {
        state.isLoggedIn = true;
        alert("Успешно зарегистрирован");
      })
      .addCase(authOperations.register.rejected, () => {
        alert("Ошибка, возможно пользователь с таким email уже существует");
      })
      .addCase(authOperations.loginIn.fulfilled, (state, action) => {
        state.user = action.payload.userData;
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.loginOut.fulfilled, (state) => {
        state.user.email = "";
        state.token = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.fetchCurrentUser.pending, (state) => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(authOperations.fetchCurrentUser.rejected, (state) => {
        state.isFetchingCurrentUser = false;
      })
      .addCase(authOperations.setBalance.fulfilled, (state, action) => {
        state.user.balance = action.payload;
      });
  },
});

export default authSlice.reducer;
