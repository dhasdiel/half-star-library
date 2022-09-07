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

export { command, sendHello, changeUserDetails, borrowAction, returnAction };
