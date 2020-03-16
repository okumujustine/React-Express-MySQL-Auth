let socket = io('http://localhost:4000');

let reciever = ""
let sender = ""


function onUserSelected(username){
    socket.emit('user_connected', "justine");
    socket.emit('user_connected', username);
    sender = "justine"
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