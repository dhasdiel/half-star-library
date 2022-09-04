import io from "socket.io-client";
import { setUsers } from "../redux/userSlice";
import { setBooks } from "../redux/bookSlice";
import store from "../redux/store";
const socket = io.connect("http://localhost:5000");

socket.on("connect", (data) => {
  if (!data) return;
  console.log("connected!");
  console.log(data);
  store.dispatch(setUsers(data.users));
  store.dispatch(setBooks(data.books));
});

socket.on("test_channel", (data) => {
  alert(data);
});

export default socket;
