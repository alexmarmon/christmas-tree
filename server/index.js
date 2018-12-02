const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
let socket;

io.on('connection', (s) => {
  socket = s;
  console.log('new connection');
});

app.get('/on', (req, res) => {
  res.send('turn lights on');
  socket.emit('on');
});

app.get('/off', (req, res) => {
  res.send('turn lights off');
  socket.emit('off');
});

server.listen(3000);