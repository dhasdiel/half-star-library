import io from "socket.io-client";
import { setNumOfUsers, setUsers, updateCurrentUser } from "../redux/userSlice";
import { setBooks, setNumOfBooks } from "../redux/bookSlice";
import store from "../redux/store";
const socket = io.connect("http://localhost:5000");

socket.on("connect", (data) => {
  if (!data) return;
  console.log("Connected to server! ", data);
  store.dispatch(setUsers(data.users));
  store.dispatch(setBooks(data.books));
  store.dispatch(setNumOfBooks());
  store.dispatch(setNumOfUsers());
  if (localStorage["user"]) {
    store.dispatch(updateCurrentUser());
  }
});

socket.on("update_users", (users) => {
  if (!users) return;
  store.dispatch(setUsers(users));
  store.dispatch(setNumOfUsers());
  if (localStorage["user"]) {
    store.dispatch(updateCurrentUser());
  }
});

socket.on("update_books", (books) => {
  if (!books) return;
  store.dispatch(setBooks(books));
  store.dispatch(setNumOfBooks());
});

export default socket;
