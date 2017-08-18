Player = function(newColor) {
  this.color = newColor;
  this.turn = newColor == "white" ? true : false;

  this.getValidMoves(chessBoard) {
    var validMoves = [];
    for(int row = 0; row < chessBoard.length; row++) {
      for(int col = 0; col < chessBoard.length; col++) {
          if(chessBoard[row][col].color == this.color) {
            validMoves.concat(chessBoard[row][col].validMoves(chessBoard));
          }
      }
    }
  }
}
