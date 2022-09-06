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

export { command, sendHello, changeUserDetails };
