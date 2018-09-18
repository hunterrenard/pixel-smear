//Setting up server
console.log("Starting Node Socket Server...");
let express = require('express');
let app = express();
let server = app.listen(3000);
app.use(express.static('public'));
console.log("Server listening on port 3000...");

// Socket.IO
let socket = require('socket.io');
let io = socket(server);

io.sockets.on('connection', function(socket) {
  console.log("New Connection: " + socket.id);
  let room = "";
  socket.join(room);

  socket.on('joinRoom', function(data) {
    socket.leave(room);
    room = data.room;
    socket.join(room);
    console.log(socket.id + " joined room: " + data.room);
  });

  socket.on('leaveRoom', function(data) {
    room = data.room;
    socket.leave(room);
    console.log(socket.id + " left room: " + data.room);

  });

  socket.on('particle', function(data) {
    io.to(room).emit('particle', data);
    //console.log(data);
  });
});
