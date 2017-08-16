ChessGame = function() {
  this.gameHeight = 600;
  this.tileSize = this.gameHeight / 8;
  this.darkTileColor = "#B29977";
  this.lightTileColor = "#FFE5C3";
  this.board = new Array(8);
  for(let i = 0; i < this.board.length; i++) {
    this.board[i] = new Array(8).fill(null);
  }

  this.initializePieces = function() {
    for(let x = 0; x < 8; x++) {
      const xPos = (75*x)+2;
      let yPos = y => (75 * y) + 2;
      this.board[1][x] = new Piece("pawn", "black", xPos, yPos(1));
      this.board[6][x] = new Piece("pawn", "white", xPos, yPos(6));
      switch(x) {
        case 0:
        case 7:
          this.board[0][x] = new Piece("rook","black", xPos, yPos(0));
          this.board[7][x] = new Piece("rook","white", xPos, yPos(7));
          break;
        case 1:
        case 6:
          this.board[0][x] = new Piece("bishop","black", xPos, yPos(0));
          this.board[7][x] = new Piece("bishop","white", xPos, yPos(7));
          break;
        case 2:
        case 5:
          this.board[0][x] = new Piece("knight","black", xPos, yPos(0));
          this.board[7][x] = new Piece("knight","white", xPos, yPos(7));
          break;
        case 3:
          this.board[0][x] = new Piece("queen","black", xPos, yPos(0));
          this.board[7][x] = new Piece("queen","white", xPos, yPos(7));
          break;
        case 4:
          this.board[0][x] = new Piece("king","black", xPos, yPos(0));
          this.board[7][x] = new Piece("king","white", xPos, yPos(7));
          break;
      }
    }
  }

  this.initializePieces();

  this.drawGame = function(context) {
    for (y = 0; y < 8; y+=1) {
      for(x = 0; x < 8; x+=1) {
        context.fillStyle= ((x+y) % 2 == 0) ? this.lightTileColor: this.darkTileColor;
        context.fillRect(x*this.tileSize,y*this.tileSize, this.tileSize, this.tileSize);
      }
    }
    for (y = 0; y < 8; y+=1) {
      for(x = 0; x < 8; x+=1) {
        if(this.board[y][x] != null && !this.board[y][x].held) {
          this.board[y][x].drawPiece(context);
        }
      }
    }
    for (y = 0; y < 8; y+=1) {
      for(x = 0; x < 8; x+=1) {
        if(this.board[y][x] != null && this.board[y][x].held) {
          this.board[y][x].drawPiece(context);
        }
      }
    }
  }

}

Piece = function(newType, newColor, xPos, yPos) {
  this.color = newColor;
  this.type = newType;
  this.xPos = xPos;
  this.yPos = yPos;
  this.height = 70;
  this.width = 70;
  this.img = new Image();
  this.img.src = "images/" + this.color + "-" + this.type + ".png";
  this.held = false;

  this.drawPiece = function (context) {
    context.drawImage(this.img, this.xPos, this.yPos, this.height, this.width);
  }
}
