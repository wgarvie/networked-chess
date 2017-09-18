const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = process.env.PORT || 3000

server.listen(port,function() {
  console.log('Server listening at port ' + port)
})

app.use(express.static(__dirname + '/public'))

const chess = require('./chess')
let numUsers = 0
let whiteLoggedIn = false
let blackLoggedIn = false

io.on('connection', function(client) {

  client.on('add user', function(username) {
    numUsers++
    client.username = username
    console.log(client.username + " has logged in.")
    console.log(numUsers + " users are connected.")
    if(!whiteLoggedIn && !blackLoggedIn) {
      const rand = Math.floor(Math.random() * (2))
      if(rand === 0){
        client.color = "white"
        whiteLoggedIn = true
      } else {
        client.color = "black"
        blackLoggedIn = true
      }
      console.log(client.username + " has been randomly selected to play as " + client.color + ".")
    }
    else if(whiteLoggedIn && blackLoggedIn) {
      client.color = "spectator"
      console.log("This game already has two players, so " + client.username + " will be a " + client.color + " for this match.")
    }
    else {
      if(blackLoggedIn){
        client.color = "white"
        whiteLoggedIn = true
      } else {
        client.color = "black"
        blackLoggedIn = true
      }
      console.log(client.username + " has joined the game second and will play as " + client.color + ".")
    }
    client.emit('startClient', chess.getBoard(), chess.getCanvasWidth(), chess.getTileWidth())
  })

  client.on('disconnect', function() {
    if(client.username) {
      numUsers--
      console.log(client.username + " has logged out.")
      console.log(numUsers + " users are connected.")
      if(client.color === "white") {
        whiteLoggedIn = false
      }
      else if(client.color === "black") {
        blackLoggedIn = false
      }
    }
  })

  client.on('mouseDown', function(mousePosition) {
    chess.selectPiece(client.color, mousePosition)
  })

  client.on('mouseMove', function(mousePosition) {
    if (chess.movePiece(client.color, mousePosition)) {
      io.emit('sync', chess.getBoard())
    }
  })

  client.on('mouseUp', function(mousePosition) {
    chess.placePiece(client.color, mousePosition)
    io.emit('sync', chess.getBoard())
  })

})
