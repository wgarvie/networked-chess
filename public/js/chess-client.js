$(document).ready(function(){
  const canvas = $('.game-canvas').get(0);
  const context = canvas.getContext('2d');
  let chessGame = new ChessGame;
  let heldPiece = null;
  var thisPlayer = new Player("white");
  var validMoves = thisPlayer.getValidMoves(chessGame.board);
  canvas.addEventListener('mousedown', clientMouseDown);
  canvas.addEventListener('mousemove', clientMouseMove);
  canvas.addEventListener('mouseup', clientMouseUp);
  canvas.addEventListener('mouseout', clientMouseOut);
  setInterval(function() {
    mainLoop();
  }, 50);

  function mainLoop() {
    chessGame.drawGame(context);
  }

  function clientMouseDown(e) {
    heldPiece = chessGame.board[Math.floor(e.y / chessGame.tileSize)][Math.floor(e.x / chessGame.tileSize)];
    if(heldPiece != null) {
      heldPiece.held = true;
    }
  }

  function clientMouseMove(e) {
    if(heldPiece!=null){
      heldPiece.xPos = (e.x - (heldPiece.width / 2));
      heldPiece.yPos = (e.y - (heldPiece.height / 2));
    }
  }

  function clientMouseUp(e) {
    var mouseX = mouseToBoard(e).x;
    var mouseY = mouseToBoard(e).y;
    //console.log(mouseToBoard(e).x + " " + mouseToBoard(e).y);
    if(heldPiece!=null){
      if(checkMoveValidity(mouseX, mouseY, heldPiece)) {
        console.log(1);
        chessGame.board[mouseY][mouseX] = heldPiece;
        console.log(chessGame.board);
      }
      heldPiece.held = false;
      heldPiece = null;
      chessGame.resetPieces();
    }
  }

  function clientMouseOut(e) {
    if(heldPiece!=null){
      heldPiece.held = false;
      heldPiece = null;
      chessGame.resetPieces();
    }
  }

  function mouseToBoard(mouseLocation) {
    var boardPosition = {
      x: Math.floor(mouseLocation.x / chessGame.tileSize),
      y: Math.floor(mouseLocation.y / chessGame.tileSize)
    };
    return boardPosition;
  }

  function checkMoveValidity(x, y, piece) {
    for(var i = 0; i < validMoves.length; i++) {
      if(x == validMoves[i].x && y ==validMoves[i].y && piece==validMoves[i].piece) {
        return true;
      }
    }
    return false;
  }

});
