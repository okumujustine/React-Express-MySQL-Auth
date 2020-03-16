
  let socket = io('http://localhost:4000');

  socket.on('connection', function (data) {
    console.log(data);
    // socket.emit('my other event', { my: 'data' });
  });