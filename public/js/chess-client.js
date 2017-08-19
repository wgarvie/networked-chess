$(document).ready(function(){
  const canvas = $('.game-canvas').get(0);
  const context = canvas.getContext('2d');
  let chessGame = new ChessGame;
  let heldPiece = null;
  var thisPlayer = new Player("white");
  var validMoves = thisPlayer.getValidMoves(chessGame.board);
  console.log(validMoves);
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
    if(heldPiece!=null){
      heldPiece.held = false;
      heldPiece = null;
      chessGame.resetPieces();
      console.log(mouseToBoard(e).x + " " + mouseToBoard(e).y);
      if(checkMoveValidity(mouseToBoard(e).x, mouseToBoard(e).y, heldPiece)) {
        console.log("that will work for me!");
      } else {
        console.log("No WAY!");
      }
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
    console.log(validMoves[0]);
    for(var i = 0; i < validMoves.length; i++) {
      console.log(validMoves[i]);
      if(x == validMoves[i].x && y ==validMoves[i].y && piece==validMoves[i].piece) {
        return true;
      }
    }
    return false;
  }

});
