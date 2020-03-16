
let socket = io('http://localhost:4000');
let messageForm = document.getElementById('send-container')
let messageInput = document.getElementById('message-input')
let messageContainer = document.getElementById('message-container')

let name = prompt('What is your name?')
appendMessage("You joined")
// socket.emit('new-user', name);

socket.on('chat-message', (data) => {
    console.log(data);
    appendMessage(data)
});

messageForm.addEventListener('submit', e => {
    e.preventDefault()

    let message = messageInput.value
    socket.emit('send-chat-message', message);
    messageInput.value = ""
})

function appendMessage(message){
    let messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
}
  