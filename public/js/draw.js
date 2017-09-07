const Draw = (function() {
  const darkTileColor = "#B29977"
  const lightTileColor = "#FFE5C3"
  
  //loading piece images
  let imgDict = {}
  imgDict.blackpawn = new Image()
  imgDict.blackpawn.src = "images/black-pawn.png"
  imgDict.whitepawn = new Image()
  imgDict.whitepawn.src = "images/white-pawn.png"
  imgDict.blackrook = new Image()
  imgDict.blackrook.src = "images/black-rook.png"
  imgDict.whiterook = new Image()
  imgDict.whiterook.src = "images/white-rook.png"
  imgDict.blackknight = new Image()
  imgDict.blackknight.src = "images/black-knight.png"
  imgDict.whiteknight = new Image()
  imgDict.whiteknight.src = "images/white-knight.png"
  imgDict.blackbishop = new Image()
  imgDict.blackbishop.src = "images/black-bishop.png"
  imgDict.whitebishop = new Image()
  imgDict.whitebishop.src = "images/white-bishop.png"
  imgDict.blackqueen = new Image()
  imgDict.blackqueen.src = "images/black-queen.png"
  imgDict.whitequeen = new Image()
  imgDict.whitequeen.src = "images/white-queen.png"
  imgDict.blackking = new Image()
  imgDict.blackking.src = "images/black-king.png"
  imgDict.whiteking = new Image()
  imgDict.whiteking.src = "images/white-king.png"

  function drawPiece(context, piece, pieceWidth) {
    context.drawImage(imgDict[piece.color+piece.type], piece.xPos, piece.yPos, pieceWidth, pieceWidth)
  }

  return {

    drawGame: function(context, board, tileWidth, pieceWidth) {
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
