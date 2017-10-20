var socket = io();
socket.on('connect', function() {
  console.log('Connected to server');
});

socket.on('newMessage', function(message) {
  console.log('Received a message event',message);
});

socket.on('disconnect', function() {
  console.log('disconnected from server');
});
