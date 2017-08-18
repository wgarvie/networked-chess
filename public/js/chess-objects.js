ChessGame = function() {
  this.gameHeight = 600;
  this.tileSize = this.gameHeight / 8;
  this.darkTileColor = "#B29977";
  this.lightTileColor = "#FFE5C3";
  this.board = new Array(8);
  for(let i = 0; i < this.board.length; i++) {
    this.board[i] = new Array(8).fill(null);
  }
  this.initializeBoard = function() {
    for(let x = 0; x < 8; x++) {
      const xPos = (75*x)+2;
      let yPos = y => (75 * y) + 2;
      this.board[1][x] = new Pawn("black", xPos, yPos(1));
      this.board[6][x] = new Pawn("white", xPos, yPos(6));
      switch(x) {
        case 0:
        case 7:
          this.board[0][x] = new Rook("black", xPos, yPos(0));
          this.board[7][x] = new Rook("white", xPos, yPos(7));
          break;
        case 1:
        case 6:
          this.board[0][x] = new Knight("black", xPos, yPos(0));
          this.board[7][x] = new Knight("white", xPos, yPos(7));
          break;
        case 2:
        case 5:
          this.board[0][x] = new Bishop("black", xPos, yPos(0));
          this.board[7][x] = new Bishop("white", xPos, yPos(7));
          break;
        case 3:
          this.board[0][x] = new Queen("black", xPos, yPos(0));
          this.board[7][x] = new Queen("white", xPos, yPos(7));
          break;
        case 4:
          this.board[0][x] = new King("black", xPos, yPos(0));
          this.board[7][x] = new King("white", xPos, yPos(7));
          break;
      }
    }
  }
  this.initializeBoard();

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

  this.resetPieces = function() {
    for (y = 0; y < 8; y+=1) {
      for(x = 0; x < 8; x+=1) {
        if(this.board[y][x] != null) {
          this.board[y][x].xPos = (this.tileSize*x) + 2;
          this.board[y][x].yPos = (this.tileSize*y) + 2;
        }
      }
    }
  }

}

Piece = function(newColor, xPos, yPos) {
  this.color = newColor;
  this.xPos = xPos;
  this.yPos = yPos;
  this.height = 70;
  this.width = 70;
  this.img = new Image();
  this.held = false;

  this.drawPiece = function (context) {
    context.drawImage(this.img, this.xPos, this.yPos, this.height, this.width);
  }

}

Pawn = function(newColor, xPos, yPos) {
  Piece.call(this, newColor, xPos, yPos);
  this.img.src = "images/" + this.color + "-" + "pawn" + ".png";
  this.initialMove = true;
}
Pawn.prototype = Object.create(Piece.prototype);

Rook = function(newColor, xPos, yPos) {
  Piece.call(this, newColor, xPos, yPos);
  this.img.src = "images/" + this.color + "-" + "rook" + ".png";
}
Rook.prototype = Object.create(Piece.prototype);

Bishop = function(newColor, xPos, yPos) {
  Piece.call(this, newColor, xPos, yPos);
  this.img.src = "images/" + this.color + "-" + "bishop" + ".png";
}
Bishop.prototype = Object.create(Piece.prototype);

Knight = function(newColor, xPos, yPos) {
  Piece.call(this, newColor, xPos, yPos);
  this.img.src = "images/" + this.color + "-" + "knight" + ".png";
}
Knight.prototype = Object.create(Piece.prototype);

Queen = function(newColor, xPos, yPos) {
  Piece.call(this, newColor, xPos, yPos);
  this.img.src = "images/" + this.color + "-" + "queen" + ".png";
}
Queen.prototype = Object.create(Piece.prototype);

King = function(newColor, xPos, yPos) {
  Piece.call(this, newColor, xPos, yPos);
  this.img.src = "images/" + this.color + "-" + "king" + ".png";
}
King.prototype = Object.create(Piece.prototype);
