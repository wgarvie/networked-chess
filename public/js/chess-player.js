Player = function(newColor) {
  this.color = newColor;
  this.turn = newColor == "white" ? true : false;

  this.getValidMoves = function(chessBoard) {
    var validMoves = [];
    for(var row = 0; row < chessBoard.length; row++) {
      for(var col = 0; col < chessBoard.length; col++) {
          if(chessBoard[row][col] != null && chessBoard[row][col].color == this.color) {
            validMoves = validMoves.concat(chessBoard[row][col].getValidMoves(chessBoard,col,row));
          }
      }
    }
    return validMoves;
  }
}
