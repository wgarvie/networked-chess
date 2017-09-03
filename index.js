const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = process.env.PORT || 3000;

const chessobjects = require('./chess-objects')

server.listen(port,function() {
  console.log('Server listening at port ' + port)
})

app.use(express.static(__dirname + '/public'))

const board = chessobjects.newBoard(75)
for(let i = 0; i < board.length; i++) {
  for(let j = 0; j < board.length; j++) {
    //checking truthiness
    if(board[i][j])
      process.stdout.write(board[i][j].type + " ")
  }
  console.log()
}

io.on('connection', function(client) {
  console.log("User connected")
})
