const canvasWidth = 600
const tileWidth = canvasWidth / 8
let turn = "white"
let heldPiece = null, heldCol = -1, heldRow = -1
const pieceXPos = pieceCol => (pieceCol * tileWidth) + 2
const pieceYPos = pieceRow => (pieceRow * tileWidth) + 2
let board = newBoard()

function Piece(type,color,xPos,yPos) {
  this.type = type
  this.color = color
  this.xPos = xPos
  this.yPos = yPos
  this.held = false
}

function mouseToBoardPosition(mousePosition) {
  return boardPosition = {
    row: Math.floor(mousePosition.y / tileWidth),
    col: Math.floor(mousePosition.x / tileWidth)
  }
}

function newBoard() {
  let board = new Array(8)
  for(let i = 0; i < board.length; i++) {
    board[i] = new Array(8).fill(null)
  }
  for(let x = 0; x < 8; x++) {
    const xPos = pieceXPos(x)
    board[1][x] = new Piece("pawn","black", xPos, pieceYPos(1))
    board[6][x] = new Piece("pawn", "white", xPos, pieceYPos(6))
    switch(x) {
      case 0:
      case 7:
        board[0][x] = new Piece("rook","black", xPos, pieceYPos(0))
        board[7][x] = new Piece("rook","white", xPos, pieceYPos(7))
        break
      case 1:
      case 6:
        board[0][x] = new Piece("knight","black", xPos, pieceYPos(0))
        board[7][x] = new Piece("knight","white", xPos, pieceYPos(7))
        break
      case 2:
      case 5:
        board[0][x] = new Piece("bishop","black", xPos, pieceYPos(0))
        board[7][x] = new Piece("bishop","white", xPos, pieceYPos(7))
        break
      case 3:
        board[0][x] = new Piece("queen","black", xPos, pieceYPos(0))
        board[7][x] = new Piece("queen","white", xPos, pieceYPos(7))
        break
      case 4:
        board[0][x] = new Piece("king","black", xPos, pieceYPos(0))
        board[7][x] = new Piece("king","white", xPos, pieceYPos(7))
        break
    }
  }
  return board
}

function getValidMoves(piece) {
  let moves = []
  if(piece.type === 'pawn') {
    boardPosition = {
      row: heldRow,
      col: heldCol
    }
    if(piece.color === 'black') {
      boardPosition.row += 1
    } else {
      boardPosition.row -= 1
    }
    moves.push(boardPosition)
  }
  return moves
}

module.exports = {

  selectPiece: function(clientColor, mousePosition) {
    if(heldPiece == null) {
      const boardPosition = mouseToBoardPosition(mousePosition, tileWidth)
      if(board[boardPosition.row][boardPosition.col] != null) {
        heldPiece = board[boardPosition.row][boardPosition.col]
        heldPiece.held = true
        heldRow = boardPosition.row
        heldCol = boardPosition.col
      }
    }
  },

  movePiece: function(clientColor, mousePosition) {
    if(heldPiece!=null){
      heldPiece.xPos = mousePosition.x-32
      heldPiece.yPos = mousePosition.y-32
      return true
    }
    return false
  },

  getBoard: function() {
    return board
  },

  getCanvasWidth: function() {
    return canvasWidth
  },

  getTileWidth: function() {
    return tileWidth
  },

  returnHeldPiece: function(clientColor) {
    if(heldPiece!=null) {
      heldPiece.xPos = pieceXPos(heldCol)
      heldPiece.yPos = pieceYPos(heldRow)
      heldCol = -1
      heldRow = -1
      heldPiece = null
    }
  },

  placePiece: function(clientColor, mousePosition) {
    if(heldPiece!=null){
      const validMoves = getValidMoves(heldPiece)
      const attemptedMove = mouseToBoardPosition(mousePosition)
      for(let i = 0; i < validMoves.length; i++) {
        if(validMoves[i].row === attemptedMove.row && validMoves[i].col === attemptedMove.col) {
          console.log(true)
        }
      }
      this.returnHeldPiece(clientColor)
    }
  }

}
