import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
  currentUser: null,
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
      state.numOfUsers = state.users.length;
    },
    setCurrentUser: (state, action) => {
      if (localStorage["user"]) {
        state.currentUser = JSON.parse(localStorage["user"]);
      } else {
        state.currentUser = action.payload;
        localStorage["user"] = JSON.stringify(state.currentUser);
      }
    },
    updateCurrentUser: (state, action) => {
      let updateUser = state.users.find(
        (user) => user.id === state.currentUser.id
      );
      state.currentUser = updateUser;
      localStorage["user"] = JSON.stringify(updateUser);
    },
  },
});

// export const selectAllUsers = (state) => state.users.users;
// export const selectCurrentUser = (state) => state.users.currentUser;
export const { setUsers, setNumOfUsers, setCurrentUser, updateCurrentUser } =
  userSlice.actions;
export default userSlice.reducer;
