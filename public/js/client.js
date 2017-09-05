$(document).ready(function(){

  const socket = io()
  const canvas = $('.game-canvas').get(0)
  const context = canvas.getContext('2d')
  const $userNameInput = $('.login-screen__input')
  const $loginScreen = $('.login-screen')
  let board, canvasWidth

  function cleanInput (input) {
    return $('<div/>').text(input.trim()).text()
  }

  function setUserName() {
    const username = cleanInput($userNameInput.val())
    if(username) {
      $loginScreen.fadeOut()
      socket.emit('add user', username)
    }
  }

  $userNameInput.keydown(function (event) {
    if(event.which == 13) {
      setUserName()
    }
  })

  socket.on('startClient', function(newBoard, newCanvasWidth) {
    canvasWidth = newCanvasWidth
    board = newBoard
    Draw.setGameSize(canvasWidth)
    //boardHeight = serverGame.boardHeight
    //color = newColor
    //drawBoard(context, board, boardHeight)
    //drawPieces(context, board)
    Draw.drawGame(context,board)
    //setInterval(function() {
    //  mainLoop()
    //}, INTERVAL)
  })

  /*let chessGame = new ChessGame
  let heldPiece = null
  let heldY = -1
  let heldX = -1
  let turn = "white"
  let validMoves = chessGame.getValidMoves(turn)
  canvas.addEventListener('mousedown', clientMouseDown)
  canvas.addEventListener('mousemove', clientMouseMove)
  canvas.addEventListener('mouseup', clientMouseUp)
  canvas.addEventListener('mouseout', clientMouseOut)
  setInterval(function() {
    mainLoop()
  }, 50)

  function mainLoop() {
    chessGame.drawGame(context)
  }

  function clientMouseDown(e) {
    const mouseY = mouseToBoard(e.y)
    const mouseX = mouseToBoard(e.x)
    heldPiece = chessGame.board[mouseY][mouseX]
    if(heldPiece != null) {
      heldY = mouseY
      heldX = mouseX
      heldPiece.held = true
    }
  }

  function clientMouseMove(e) {
    if(heldPiece!=null){
      heldPiece.xPos = (e.x - (heldPiece.width / 2))
      heldPiece.yPos = (e.y - (heldPiece.height / 2))
    }
  }

  function clientMouseUp(e) {
    var mouseX = mouseToBoard(e.x)
    var mouseY = mouseToBoard(e.y)
    //console.log(mouseToBoard(e).x + " " + mouseToBoard(e).y)
    if(heldPiece!=null){
      if(checkMoveValidity(mouseX, mouseY, heldPiece)) {
        chessGame.board[heldY][heldX] = null
        chessGame.board[mouseY][mouseX] = heldPiece
        console.log(chessGame.board)
      }
      heldPiece.held = false
      heldPiece = null
      heldY = -1
      heldX = -1
      chessGame.resetPieces()
    }
  }

  function clientMouseOut(e) {
    if(heldPiece!=null){
      heldPiece.held = false
      heldPiece = null
      heldY = -1
      heldX = -1
      chessGame.resetPieces()
    }
  }

  function mouseToBoard(mouseLocation) {
    return Math.floor(mouseLocation / chessGame.tileSize)
  }

  function checkMoveValidity(x, y, piece) {
    for(var i = 0; i < validMoves.length ;i++) {
      if(x == validMoves[i].x && y ==validMoves[i].y && piece==validMoves[i].piece) {
        return true
      }
    }
    return false
  }*/

})
