import socket from "./socketConnection";

const command = (data) => {
  socket.emit("command", data);
  console.log(data);
};

const sendHello = () => {
  socket.emit("hello", "Hello World");
};

const changeUserDetails = (changedUser) => {
  socket.emit("change", changedUser);
};

const borrowAction = (borrowAction) => {
  socket.emit("borrow", borrowAction);
};

const returnAction = (returnAction) => {
  socket.emit("return", returnAction);
};

const addUserAction = (newUser) => {
  socket.emit("adduser", newUser);
};

const addBookAction = (newBook) => {
  socket.emit("addbook", newBook);
};

const removeBookAction = (removedBook) => {
  socket.emit("removebook", removedBook);
};

const removeUserAction = (removedUser) => {
  socket.emit("removeuser", removedUser);
};

export {
  command,
  sendHello,
  changeUserDetails,
  borrowAction,
  returnAction,
  addBookAction,
  addUserAction,
  removeBookAction,
  removeUserAction,
};
