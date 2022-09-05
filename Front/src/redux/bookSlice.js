import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: null,
  numOfBooks: 0,
  newBooksList: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setNumOfBooks: (state, action) => {
      state.numOfBooks = state.books.length;
    },
    setListOfNewBooks: (state, action) => {
      for (let i = 0; i < action.payload; i++) {
        state.newBooksList.push(state.books[state.numOfBooks - i]);
      }
    },
  },
});

export const { setBooks, setNumOfBooks, setListOfNewBooks } = bookSlice.actions;
export default bookSlice.reducer;
