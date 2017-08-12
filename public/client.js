$(function() {

  var canvas = $('.game-canvas').get(0);
  var context = canvas.getContext('2d');

  var boardHeight = 600;

  var img = new Image();
  img.src = "images/black_pawn.png";
  //context.drawImage(img,0,0);
  img.onload = function() {
    context.drawImage(img, 3, 3,70,70);
    context.drawImage(img, 78, 3,70,70);
  }

  drawBoard(context, boardHeight);


});
