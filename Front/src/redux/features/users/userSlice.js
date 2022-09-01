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
  },
});

export const { setUsers, setNumOfUsers } = userSlice.actions;
export default userSlice.reducer;
