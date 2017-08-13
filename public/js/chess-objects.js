Board = function() {
  this.boardHeight = 600;
  this.tileSize = this.boardHeight / 8;
  this.darkTileColor = "#B29977";
  this.lightTileColor = "#FFE5C3";
  this.board = new Array(8);
  for(let i = 0; i < this.board.length; i++) {
    this.board[i] = new Array(8);
  }
  //initializing black and white pieces
  for(let x = 0; x < 8; x++) {
    this.board[1][x] = new Pawn("black", (75*x)+2, (75*1)+2);
    this.board[6][x] = new Pawn("white", (75*x)+2, (75*6)+2);
    switch(x) {
      case 0:
      case 7:
        this.board[0][x] = new Rook("black", (75*x)+2, (75*0)+2);
        this.board[7][x] = new Rook("white", (75*x)+2, (75*7)+2);
        break;
      case 1:
      case 6:
        this.board[0][x] = new Bishop("black", (75*x)+2, (75*0)+2);
        this.board[7][x] = new Bishop("white", (75*x)+2, (75*7)+2);
        break;
      case 2:
      case 5:
        this.board[0][x] = new Knight("black", (75*x)+2, (75*0)+2);
        this.board[7][x] = new Knight("white", (75*x)+2, (75*7)+2);
        break;
      case 3:
      this.board[0][x] = new Queen("black", (75*x)+2, (75*0)+2);
      this.board[7][x] = new Queen("white", (75*x)+2, (75*7)+2);
        break;
      case 4:
      this.board[0][x] = new King("black", (75*x)+2, (75*0)+2);
      this.board[7][x] = new King("white", (75*x)+2, (75*7)+2);
        break;
    }
  }

  this.drawBoard = function(context) {
    for (y = 0; y < 8; y+=1) {
      for(x = 0; x < 8; x+=1) {
        context.fillStyle= ((x+y) % 2 == 0) ? this.lightTileColor: this.darkTileColor;
        context.fillRect(x*this.tileSize,y*this.tileSize, this.tileSize, this.tileSize);
        if(this.board[y][x] != null) {
          this.board[y][x].drawPiece(context);
        }
      }
    }
  }

}

Piece = function(newColor, xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  this.height = 70;
  this.width = 70;
  this.img = new Image();
  this.color = newColor;

  this.drawPiece = function (context) {
    //callback enclosed code must have the current state of this
    //bounded to it.
    this.img.onload = function() {
      context.drawImage(this.img, this.xPos, this.yPos, this.height, this.width);
    }.bind(this);
  }
}

Pawn = function(newColor, xPos, yPos) {
  Piece.call(this, newColor, xPos, yPos);
  this.img.src =  "images/" + this.color + "-pawn.png";
}
Pawn.prototype = Object.create(Piece.prototype);

Rook = function(newColor, xPos, yPos) {
  Piece.call(this, newColor, xPos, yPos);
  this.img.src =  "images/" + this.color + "-rook.png";
}
Rook.prototype = Object.create(Piece.prototype);

Bishop = function(newColor, xPos, yPos) {
  Piece.call(this, newColor, xPos, yPos);
  this.img.src =  "images/" + this.color + "-bishop.png";
}
Rook.prototype = Object.create(Piece.prototype);

Knight= function(newColor, xPos, yPos) {
  Piece.call(this, newColor, xPos, yPos);
  this.img.src =  "images/" + this.color + "-knight.png";
}
Knight.prototype = Object.create(Piece.prototype);

Queen= function(newColor, xPos, yPos) {
  Piece.call(this, newColor, xPos, yPos);
  this.img.src =  "images/" + this.color + "-queen.png";
}
Queen.prototype = Object.create(Piece.prototype);

King= function(newColor, xPos, yPos) {
  Piece.call(this, newColor, xPos, yPos);
  this.img.src =  "images/" + this.color + "-king.png";
}
King.prototype = Object.create(Piece.prototype);
