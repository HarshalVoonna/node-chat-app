var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');
  socket.emit('getRoomList');
});

socket.on('setRoomList', function(roomList) {
  console.log(roomList);
  if(roomList.length > 0){
    var availablerooms = $('#available-rooms');
    var select = $('<select onchange="selectRoomOption(this)"></select>');
    roomList.forEach(function(room) {
      select.append($('<option></option>').attr('value','Select a room').text('Select a room'));
      select.append($('<option></option>').attr('value',room).text(room));
    });
    availablerooms.append($('<label></label>').text('Available Rooms'));
    availablerooms.append(select);
  }
});

function selectRoomOption(room) {
  if(room.value === 'Select a room'){
    $('#roomfield').val('');
  } else {
    $('#roomfield').val(room.value);
  }
}
