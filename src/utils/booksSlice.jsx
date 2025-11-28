import { createSlice } from "@reduxjs/toolkit";
import { popularBooks } from "../data/Book";
const savedBooks = JSON.parse(localStorage.getItem("books")) || popularBooks;
const booksSlice = createSlice({
  name: "books",
  initialState: { items: savedBooks.slice(), loading: false },
  reducers: {
    addBook: (state, action) => {
      state.items.unshift(action.payload);
      localStorage.setItem("books", JSON.stringify(state.items));
    },
  },
});
export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;
