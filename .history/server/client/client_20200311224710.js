
let socket = io('http://localhost:4000');
let messageForm = document.getElementById('send-container')
let messageInput = document.getElementById('message-input')
 
socket.on('chat-message', (data) => {
    console.log(data);
});

messageForm.addEventListener('submit', e => {
    e.preventDefault()
})
  