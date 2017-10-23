var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');
  socket.emit('getRoomList');
});

socket.on('setRoomList', function(roomList) {
  console.log(roomList);
  if(roomList.length > 0){
    var availablerooms = $('#available-rooms');
    var select = $('<select></select>');
    roomList.forEach(function(room) {
      select.append($('<option></option>').attr('value',room).text(room));
    });
    availablerooms.append($('<label></label>').text('Available Rooms'));
    availablerooms.append(select);
  }
});
