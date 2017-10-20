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
    from: 'Admin',
    text: 'Welcome to the Chat room',
    createdAt: new Date().getTime()
  });
  socket.broadcast.emit('newMessage', {
    from: 'Admin',
    text: 'A new user has joined the Chat room',
    createdAt: new Date().getTime()
  });

  // socket.on('createMessage', (message) => {
  //     console.log('createMessage : New message composed by the user',message);
  //     // io.emit('newMessage', {
  //     //   from: message.from,
  //     //   text: message.text,
  //     //   createdAt: new Date().getTime()
  //     // });
  //     socket.broadcast.emit('newMessage', {
  //       from: message.from,
  //       text: message.text,
  //       createdAt: new Date().getTime()
  //     });
  // });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`server is up and running on port ${port}`);
});
