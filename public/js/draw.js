const darkTileColor = "#B29977"
const lightTileColor = "#FFE5C3"
const tileSize = 75

function drawGame(context, board) {
  for (y = 0; y < 8; y+=1) {
    for(x = 0; x < 8; x+=1) {
      context.fillStyle= ((x+y) % 2 == 0) ? lightTileColor: darkTileColor
      context.fillRect(x*tileSize,y*tileSize, tileSize, tileSize)
    }
  }
  for (y = 0; y < 8; y+=1) {
    for(x = 0; x < 8; x+=1) {
      //if(this.board[y][x] != null && !this.board[y][x].held) {
      if(board[y][x] != null) {
        console.log(board[y][x])
        drawPiece(context, board[y][x]);
      }
    }
  }
  /*for (y = 0; y < 8; y+=1) {
    for(x = 0; x < 8; x+=1) {
      if(this.board[y][x] != null && this.board[y][x].held) {
        this.board[y][x].drawPiece(context);
      }
    }
  }*/
}

function drawPiece(context, piece) {
  img = new Image();
  console.log("Draw a damn piece")
  img.src = "images/" + "black" + "-" + "pawn" + ".png"
  context.drawImage(img, piece.xPos, piece.yPos, piece.height, piece.width)
}
