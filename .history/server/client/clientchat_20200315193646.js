let socket = io('http://localhost:4000');

function enterName() {
    let name = document.getElementById('name').value

    socket.emit('user_connected', name);

    return false
}

socket.on("user_connected", function(username){
    console.log(username)
})