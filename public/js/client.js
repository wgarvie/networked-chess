$(document).ready(function(){
  const canvas = $('.game-canvas').get(0);
  const context = canvas.getContext('2d');

  /*var img = new Image();
  img.src = "images/black_pawn.png";
  //context.drawImage(img,0,0);
  img.onload = function() {
    context.drawImage(img, 3, 3,70,70);
    context.drawImage(img, 78, 3,70,70);
  }*/

  let blackPawn = new Pawn;
  blackPawn.drawPiece(context);
  const board = new Board;
  board.drawBoard(context);
});
