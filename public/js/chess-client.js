$(document).ready(function(){
  const canvas = $('.game-canvas').get(0);
  const context = canvas.getContext('2d');
  let chessBoard = new ChessBoard;
  let heldPiece = null;
  canvas.addEventListener('mousedown', clientMouseDown);
  canvas.addEventListener('mousemove', clientMouseMove);
  canvas.addEventListener('mouseup', clientMouseUp);
  setInterval(function() {
    mainLoop();
  }, 50);

  function mainLoop() {
    chessBoard.drawBoard(context);
  }

  function clientMouseDown(e) {
    heldPiece = chessBoard.board[Math.floor(e.y / chessBoard.tileSize)][Math.floor(e.x / chessBoard.tileSize)];
  }

  function clientMouseMove(e) {
    if(heldPiece!=null){
      heldPiece.xPos = (e.x - (heldPiece.width / 2));
      heldPiece.yPos = (e.y - (heldPiece.height / 2));
      console.log(heldPiece.xPos);
    }
  }

  function clientMouseUp(e) {
    heldPiece = null;
  }

});
