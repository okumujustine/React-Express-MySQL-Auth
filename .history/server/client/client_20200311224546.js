
let socket = io('http://localhost:4000');
let messageForm = document.getElementById('send-container')
 
socket.on('chat-message', (data) => {
    console.log(data);
});
  