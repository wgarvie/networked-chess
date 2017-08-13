$(document).ready(function(){
  const canvas = $('.game-canvas').get(0);
  const context = canvas.getContext('2d');
  //let blackPawn = new Pawn("black");
  //blackPawn.drawPiece(context);
  const board = new Board;
  board.drawBoard(context);
});
