
let socket = io('http://localhost:4000');

 
socket.on('welcomeMessage', (data) => {
    console.log(data);
});
  