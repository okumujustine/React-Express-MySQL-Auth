
let socket = io('http://localhost:4000');

 
socket.on('chat-message', (data) => {
    console.log(data);
});
  