import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: null,
  numOfBooks: 0,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setNumOfBooks: (state, action) => {
      state.numOfBooks = action.payload.length;
    },
  },
});

export const { setBooks, setNumOfBooks } = bookSlice.actions;
export default bookSlice.reducer;
