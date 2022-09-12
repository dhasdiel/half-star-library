import socket from "./socketConnection";

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
  changeUserDetails,
  borrowAction,
  returnAction,
  addBookAction,
  addUserAction,
  removeBookAction,
  removeUserAction,
};
