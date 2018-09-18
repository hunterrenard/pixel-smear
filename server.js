console.log("Starting Node Socket Server...");

console.log("Setting up Express...");
let express = require('express');
let app = express();

console.log("Starting server on port 3000...");
let server = app.listen(3000);
app.use(express.static('public'));
console.log("Server listening on port 3000...");

console.log("Setting up socket.IO...");
let socket = require('socket.io');
let io = socket(server);
console.log("Listening for clients...");

io.sockets.on('connection', newConnection);

function newConnection(socket) {
  console.log('New connection: ' + socket.id);

  socket.on('particle', particleMSG);

  function particleMSG(data) {
    socket.broadcast.emit('particle', data);
    console.log(data);
  }
}
