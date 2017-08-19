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

  this.getValidMoves = function(turn) {
    var validMoves = [];
    for(var row = 0; row < this.board.length; row++) {
      for(var col = 0; col < this.board.length; col++) {
          if(this.board[row][col] != null && this.board[row][col].color == turn) {
            validMoves = validMoves.concat(this.board[row][col].getValidMoves(this.board,col,row));
          }
      }
    }
    return validMoves;
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

  this.getValidMoves = function(chessBoard, xLoc, yLoc) {
    let validMoves = [];
    let newY = -1;
    if(this.color == "white") {
      if(this.initialMove) {
        newY=yLoc-2;
        validMoves = validMoves.concat(getMove(xLoc,newY,this));
      }
      newY=yLoc-1;
      validMoves = validMoves.concat(getMove(xLoc,newY,this));
    } else {
      if(this.initialMove) {
        newY=yLoc+2;
        validMoves = validMoves.concat(getMove(xLoc,newY,this));
      }
      newY=yLoc+1;
      validMoves = validMoves.concat(getMove(xLoc,newY,this));
    }
    return validMoves;
  }
}
Pawn.prototype = Object.create(Piece.prototype);

Rook = function(newColor, xPos, yPos) {
  Piece.call(this, newColor, xPos, yPos);
  this.img.src = "images/" + this.color + "-" + "rook" + ".png";
  this.getValidMoves = function(chessBoard, xLoc, yLoc) {
  }
  this.getValidMoves = function(chessBoard, xLoc, yLoc) {
    var newX = xLoc;
    var newY = yLoc;
    if(this.color == "white") {
      newY = this.initialMove ? yLoc-2 : yLoc-1;
    } else {
      newY = this.initialMove ? yLoc+2 : yLoc+1;
    }
    var move = {
      piece: this,
      x: newX,
      y: newY
    };
    return move;
  }
}
Rook.prototype = Object.create(Piece.prototype);

Bishop = function(newColor, xPos, yPos) {
  Piece.call(this, newColor, xPos, yPos);
  this.img.src = "images/" + this.color + "-" + "bishop" + ".png";
  this.getValidMoves = function(chessBoard, xLoc, yLoc) {
  }
  this.getValidMoves = function(chessBoard, xLoc, yLoc) {
    var newX = xLoc;
    var newY = yLoc;
    if(this.color == "white") {
      newY = this.initialMove ? yLoc-2 : yLoc-1;
    } else {
      newY = this.initialMove ? yLoc+2 : yLoc+1;
    }
    var move = {
      piece: this,
      x: newX,
      y: newY
    };
    return move;
  }
}
Bishop.prototype = Object.create(Piece.prototype);

Knight = function(newColor, xPos, yPos) {
  Piece.call(this, newColor, xPos, yPos);
  this.img.src = "images/" + this.color + "-" + "knight" + ".png";
  this.getValidMoves = function(chessBoard, xLoc, yLoc) {
  }
  this.getValidMoves = function(chessBoard, xLoc, yLoc) {
    var newX = xLoc;
    var newY = yLoc;
    if(this.color == "white") {
      newY = this.initialMove ? yLoc-2 : yLoc-1;
    } else {
      newY = this.initialMove ? yLoc+2 : yLoc+1;
    }
    var move = {
      piece: this,
      x: newX,
      y: newY
    };
    return move;
  }
}
Knight.prototype = Object.create(Piece.prototype);

Queen = function(newColor, xPos, yPos) {
  Piece.call(this, newColor, xPos, yPos);
  this.img.src = "images/" + this.color + "-" + "queen" + ".png";
  this.getValidMoves = function(chessBoard, xLoc, yLoc) {
  }
  this.getValidMoves = function(chessBoard, xLoc, yLoc) {
    var newX = xLoc;
    var newY = yLoc;
    if(this.color == "white") {
      newY = this.initialMove ? yLoc-2 : yLoc-1;
    } else {
      newY = this.initialMove ? yLoc+2 : yLoc+1;
    }
    var move = {
      piece: this,
      x: newX,
      y: newY
    };
    return move;
  }
}
Queen.prototype = Object.create(Piece.prototype);

King = function(newColor, xPos, yPos) {
  Piece.call(this, newColor, xPos, yPos);
  this.img.src = "images/" + this.color + "-" + "king" + ".png";
  this.getValidMoves = function(chessBoard, xLoc, yLoc) {
  }
  this.getValidMoves = function(chessBoard, xLoc, yLoc) {
    var newX = xLoc;
    var newY = yLoc;
    if(this.color == "white") {
      newY = this.initialMove ? yLoc-2 : yLoc-1;
    } else {
      newY = this.initialMove ? yLoc+2 : yLoc+1;
    }
    var move = {
      piece: this,
      x: newX,
      y: newY
    };
    return move;
  }
}
King.prototype = Object.create(Piece.prototype);

function getMove(xLoc, yLoc, newPiece) {
  const move = {
    x: xLoc,
    y: yLoc,
    piece: newPiece
  }
  return move;
}
