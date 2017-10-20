const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');
  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the Chat room'));
  socket.broadcast.emit('newMessage', generateMessage('Admin', 'A new user has joined the Chat room'));

  socket.on('createMessage', (message, callback) => {
      console.log('createMessage : New message composed by the user',message);
      io.emit('newMessage', generateMessage(message.from, message.text));
      callback('This is from the server');
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`server is up and running on port ${port}`);
});
