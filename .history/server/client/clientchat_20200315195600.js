let socket = io('http://localhost:4000');

let reciever = ""
let sender = ""

function enterName() {

    socket.emit('user_connected', "justine");
    sender = "justine"

    return false
}

socket.on("user_connected", function(username){
    let html = ""
    html += "<li><button onclick='onUserSelected(this.innerHTML)'>"+username+"</button></html>"
    document.getElementById('users').innerHTML += html
})

function onUserSelected(username){
    console.log(username)
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