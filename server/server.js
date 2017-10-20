const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');
  socket.emit('newMessage', {
    from: 'Mike',
    text: 'Learnign node.js socket.io',
    createdAt: 144
  });

  socket.on('createMessage', (message) => {
      console.log('createMessage : New message composed by the user',message);
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`server is up and running on port ${port}`);
});
