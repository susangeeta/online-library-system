import { createSlice } from "@reduxjs/toolkit";
import { popularBooks } from "../data/Book";

const booksSlice = createSlice({
  name: "books",
  initialState: { items: popularBooks.slice(), loading: false },
  reducers: {
    addBook: (state, action) => {
      state.items.unshift(action.payload);
    },
  },
});
export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;
