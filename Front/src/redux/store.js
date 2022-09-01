import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/users/userSlice";
import bookReducer from "./features/books/bookSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    books: bookReducer,
  },
});

export default store;
