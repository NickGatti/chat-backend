const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.status(403).end()
})

io.on('connection', socket => {
  console.log('A user connected.');
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  })
})

http.listen(3000, () => {
  console.log('Listening on *:3000');
})