import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: null,
  curretUser: null,
  numOfUsers: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setNumOfUsers: (state, action) => {
      state.numOfUsers = action.payload.length;
    },
    setCurretUser: (state, action) => {
      state.curretUser = JSON.parse(localStorage["user"]);
    },
  },
});

export const selectAllUsers = (state) => state.users.users;
export const { setUsers, setNumOfUsers, setCurretUser } = userSlice.actions;
export default userSlice.reducer;
