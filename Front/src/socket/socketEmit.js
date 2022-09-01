import socket from "./socketConnection";

const command = (data) => {
  socket.emit("command", data);
};

const sendHello = () => {
  socket.emit("hello", "Hello World");
};

export { command, sendHello };
