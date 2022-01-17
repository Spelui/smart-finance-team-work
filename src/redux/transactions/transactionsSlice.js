import { createSlice } from "@reduxjs/toolkit";
//import { getContacts, addContact, deleteContact } from "./contactsOperations";
import {
  getIncome,
  addIncome,
  deleteIncom,
  getCategories,
} from "./transactionsOperation";

const initialState = {
  items: [],
  categories: [],

  // filter: "",
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getIncome.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addIncome.fulfilled, (state, action) => ({
        ...state,
        items: [action.payload, ...state.items],
      }))

      .addCase(getCategories.fulfilled, (state, action) => ({
        ...state,
        categories: [...action.payload.data],
      }))
      .addCase(deleteIncom.fulfilled, (state, { payload }) => {
        const idx = state.items.findIndex((contact) => contact.id === payload); ///payload.id не видаляє останній
        state.items.splice(idx, 1);
      });
  },
});

export default transactionSlice.reducer;
