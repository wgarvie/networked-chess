module.exports = {

  newBoard: function(tileWidth) {
    let board = new Array(8)
    for(let i = 0; i < board.length; i++) {
      board[i] = new Array(8).fill(null)
    }
    for(let x = 0; x < 8; x++) {
      const xPos = (tileWidth * x) + 2
      let yPos = y => (tileWidth * y) + 2
      board[1][x] = new Piece("pawn","black", xPos, yPos(1))
      board[6][x] = new Piece("pawn", "white", xPos, yPos(6))
      switch(x) {
        case 0:
        case 7:
          board[0][x] = new Piece("rook","black", xPos, yPos(0))
          board[7][x] = new Piece("rook","white", xPos, yPos(7))
          break
        case 1:
        case 6:
          board[0][x] = new Piece("knight","black", xPos, yPos(0))
          board[7][x] = new Piece("knight","white", xPos, yPos(7))
          break
        case 2:
        case 5:
          board[0][x] = new Piece("bishop","black", xPos, yPos(0))
          board[7][x] = new Piece("bishop","white", xPos, yPos(7))
          break
        case 3:
          board[0][x] = new Piece("queen","black", xPos, yPos(0))
          board[7][x] = new Piece("queen","white", xPos, yPos(7))
          break
        case 4:
          board[0][x] = new Piece("king","black", xPos, yPos(0))
          board[7][x] = new Piece("king","white", xPos, yPos(7))
          break
      }
    }
    return board
  }

}

function Piece(type,color,xPos,yPos) {
    this.type = type
    this.color = color
    this.xPos = xPos
    this.yPos = yPos
}
