import io from "socket.io-client";
import { setNumOfUsers, setUsers, updateCurrentUser } from "../redux/userSlice";
import { setBooks, setNumOfBooks } from "../redux/bookSlice";
import store from "../redux/store";
const socket = io.connect("http://localhost:5000");

socket.on("connect", (data) => {
  if (!data) return;
  console.log("connected!");
  console.log(data);
  store.dispatch(setUsers(data.users));
  store.dispatch(setBooks(data.books));
  store.dispatch(setNumOfBooks());
  store.dispatch(setNumOfUsers());
  // store.dispatch(setListOfNewBooks(3));
  if (localStorage["user"]) {
    store.dispatch(updateCurrentUser());
  }
});

socket.on("test_channel", (data) => {
  alert(data);
});

export default socket;
