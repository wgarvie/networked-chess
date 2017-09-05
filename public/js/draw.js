const darkTileColor = "#B29977"
const lightTileColor = "#FFE5C3"
const tileSize = 75
const pieceWidth = 70
const blackPawnImage = new Image()
blackPawnImage.src = "images/black-pawn.png"


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
        drawPiece(context, board[y][x])
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
  //if(piece.type == "pawn") {
//    if(piece.color == "black")
//  }
  context.drawImage(blackPawnImage, piece.xPos, piece.yPos, pieceWidth, pieceWidth)
}
