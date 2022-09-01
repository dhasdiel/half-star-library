import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const DUMB_USERS = [
  {
    id: 0,
    fullname: "Daniel Hasdiel",
    age: 24,
    genre: "fantasy",
    isManager: true,
  },
  {
    id: 1,
    fullname: "Peter Parker",
    age: 19,
    genre: "sci-fi",
    isManager: false,
  },
  {
    id: 2,
    fullname: "Bruce Wayne",
    age: 40,
    genre: "finance",
    isManager: false,
  },
  { id: 3, fullname: "Tony Stark", age: 43, genre: "tech", isManager: false },
];

const initialState = {
  loading: false,
  users: DUMB_USERS,
  numOfUsers: DUMB_USERS.length,
  error: "",
};
