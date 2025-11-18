import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../utils/booksSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
