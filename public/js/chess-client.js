$(document).ready(function(){
  const canvas = $('.game-canvas').get(0);
  const context = canvas.getContext('2d');
  let chessGame = new ChessGame;
  let heldPiece = null;
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
      x: mouseLocation.x / chessGame.tileSize,
      y: mouseLocation.y / chessGame.tileSize
    };
    return boardPosition;
  }

});
