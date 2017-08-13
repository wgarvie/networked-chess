$(document).ready(function(){
  const canvas = $('.game-canvas').get(0);
  const context = canvas.getContext('2d');
  const board = new Board;
  board.drawBoard(context);
});
