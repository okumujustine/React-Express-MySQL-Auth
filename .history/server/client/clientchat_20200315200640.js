let socket = io('http://localhost:4000');

let reciever = ""
let sender = ""

let user ={
    name:"justine",
    id="123eee"
}
connectMe(user)
function connectMe(user){
    socket.emit('user_connected', user.name);
    sender = user.name
}

function onUserSelected(username){
    socket.emit('user_connected', username);
    reciever = username
}

function sendMessage(){
    let message = document.getElementById('message').value
    socket.emit('send_message', {
        reciever:reciever,
        sender:sender,
        message:message
    });

    return false
}