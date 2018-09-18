let socket;
let socketJoined = false;
let room;

socket = io.connect('http://localhost:3000');

function joinRoom() {
  name = document.getElementById('roomInput').value;

  if(name != "") {
    socketJoined = true;
    room = name;
    $('#roomCode').text(room);

    $('.offline').removeClass("show");
    $('.online').addClass("show");
    $('.room').addClass("superactive");

    let data = {room: name};

    socket.emit('joinRoom', data);

    socket.on('particle', newDrawing);
  }
}

function leaveRoom() {
    socketJoined = false;
    let data = {room: room}

    $('.online').removeClass("show");
    $('.offline').addClass("show");
    $('.room').removeClass("superactive");

    socket.emit('leaveRoom', data);
}
