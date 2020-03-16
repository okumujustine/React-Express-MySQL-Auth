let socket = io('http://localhost:4000');

function enterName() {
    let name = document.getElementById('name').value

    io.emit('user_connected', name);
}