import io from 'socket.io-client';
const socket = io.connect('http://localhost:5000');


socket.on('connect', (data) => {
    console.log("connected!");
})

socket.on('test_channel', (data) => {
    alert(data)
})
export default socket;