import { createSlice } from "@reduxjs/toolkit";

const DUMB_BOOKS = [{ id: 0, name: "", genre: "", isBorrow: true }];

const initialState = {
  books: DUMB_BOOKS,
  numOfBooks: DUMB_BOOKS.length,
};
