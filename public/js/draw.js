function drawBoard(context, boardHeight) {
  tileSize = boardHeight/8;
  for (y = 0; y < 8; y++) {
    for(x = 0; x < 8; x++) {
      if(((x + y) % 2) == 0){
        context.fillStyle="#FFE5C3";
      }
      else {
        context.fillStyle="#B29977";
      }
      context.fillRect(x*tileSize,y*tileSize, tileSize, tileSize);
    }
  }
}
