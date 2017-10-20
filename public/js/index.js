var socket = io();
socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Jen',
    text: 'hey I am learning too'
  });
});

socket.on('newMessage', function(message) {
  console.log('Received a message event',message);
});

socket.on('disconnect', function() {
  console.log('disconnected from server');
});
