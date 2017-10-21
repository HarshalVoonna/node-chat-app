var socket = io();
socket.on('connect', function() {
  console.log('Connected to server');
});

socket.on('newMessage', function(message) {
  // console.log('Received a message event',message);
  var formattedTime = moment(message.createdAt).format('h:mm a');
  // var li = $('<li></li>');
  // li.text(`${message.from} ${formattedTime}: ${message.text}`)
  // $('#messages').append(li);
  var template = $('#message-template').html();
  var html = Mustache.render(template, {
    text: message.text,
    from: message.from,
    createdAt: formattedTime
  });
  $('#messages').append(html);
});

socket.on('newLocationMessage', function(message) {
  var formattedTime = moment(message.createdAt).format('h:mm a');
  // var li = $('<li></li>');
  // var a = $('<a target="_blank">My current location</a>');
  // li.text(`${message.from} ${formattedTime}: `);
  // a.attr('href', message.url);
  // li.append(a);
  // $('#messages').append(li);
  var template = $('#location-message-template').html();
  var html = Mustache.render(template, {
    url: message.url,
    from: message.from,
    createdAt: formattedTime
  })
  $('#messages').append(html);
});

socket.on('disconnect', function() {
  console.log('disconnected from server');
});

$('#message-form').on('submit', function (e) {
  e.preventDefault();
  var messageTextbox = $('[name=message]');
  socket.emit('createMessage', {
    from: 'Harsha',
    text: messageTextbox.val()
  }, function(data) {
    messageTextbox.val('');
  });
});

var locationButton = $('#send-location');
locationButton.on('click', function() {
  if (!navigator.geolocation){
    return alert('geolocation not supported by your browser');
  }
  locationButton.attr('disabled', 'disabled').text('Sending location...');
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position);
    locationButton.removeAttr('disabled').text('Send location');
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }, function() {
    locationButton.removeAttr('disabled').text('Send location');
    alert('Unable to fetch location');
  })
});
