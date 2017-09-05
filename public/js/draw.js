let Draw = (function() {
  const darkTileColor = "#B29977"
  const lightTileColor = "#FFE5C3"
  const blackPawnImage = new Image()
  blackPawnImage.src = "images/black-pawn.png"
  let tileWidth, pieceWidth

  //private method
  function drawPiece(context, piece, pieceWidth) {
    //if(piece.type == "pawn") {
  //    if(piece.color == "black")
  //  }
    context.drawImage(blackPawnImage, piece.xPos, piece.yPos, pieceWidth, pieceWidth)
  }

  //public method
  return {

    setGameSize: function(newCanvasWidth) {
      tileWidth = newCanvasWidth / 8
      pieceWidth = tileWidth - 5
    },

    drawGame: function(context, board) {
      for (y = 0; y < 8; y+=1) {
        for(x = 0; x < 8; x+=1) {
          context.fillStyle= ((x+y) % 2 == 0) ? lightTileColor: darkTileColor
          context.fillRect(x*tileWidth,y*tileWidth, tileWidth, tileWidth)
        }
      }
      for (y = 0; y < 8; y+=1) {
        for(x = 0; x < 8; x+=1) {
          //if(this.board[y][x] != null && !this.board[y][x].held) {
          if(board[y][x] != null) {
            drawPiece(context, board[y][x], pieceWidth)
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
  }

})()
