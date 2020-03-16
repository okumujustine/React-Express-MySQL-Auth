let socket = io('http://localhost:4000');

let reciever = ""
let sender = ""

//connect to server as me
let user ={
    name:"justine",
    id:"123eee"
}
function connectMe(user){
    socket.emit('user_connected', user.name);
    sender = user.name
}
connectMe(user)

//connected new user
function onUserSelected(username){
    // socket.emit('user_connected', username);
    reciever = username
}

//send message to the connected users
function sendMessage(){
    let message = document.getElementById('message').value
    socket.emit('send_message', {
        reciever:reciever,
        sender:sender,
        message:message
    });
    var html  = ""
    html += "<li>You said: " + message + "</li>"
    document.getElementById('messages').innerHTML += html
    return false
}

//listen to message coming from server
socket.on("new_message", function(data){
    console.log(data)
    var html  = ""
    html += "<li>" + data.sender + "says: " + data.message + "</li>"
    document.getElementById('messages').innerHTML += html
})