let socket = io('http://localhost:4000');

let reciever = ""
let sender = ""

function enterName() {
    let name = document.getElementById('name').value

    socket.emit('user_connected', name);
    sender = name

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
        reciever,
        sender,
        message
    });
}