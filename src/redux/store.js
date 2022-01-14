import { configureStore } from "@reduxjs/toolkit";
import authReduser from "./auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authReduser,
  },
  devTools: process.env.NODE_ENV === "development",
});

export { store };
