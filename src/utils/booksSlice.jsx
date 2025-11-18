import { createSlice } from "@reduxjs/toolkit";
import { browseBooks } from "../data/Book";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    list: browseBooks,
  },
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      state.list.unshift(newBook);
    },
  },
});
export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;
