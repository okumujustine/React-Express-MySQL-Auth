let io = io('http://localhost:4000');

function enterName() {
    let name = document.getElementById('name').value

    io.emit('user_connected', name);

    return false
}

io.on("user_connected", function(username){
    console.log(username)
})