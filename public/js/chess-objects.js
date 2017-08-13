Board = function() {
  this.boardHeight = 600;
  this.tileSize = this.boardHeight / 8;
  this.oddTileColor = "#B29977";
  this.evenTileColor = "#FFE5C3";
  this.board = new Array(8);
  for(let i = 0; i < this.board.length; i++) {
    this.board[i] = new Array(8);
  }
  //initializing black and white pawns
  for(let x = 0; x < 8; x++) {
    this.board[1][x] = new Pawn("black", (75*x)+2, (75*1)+2);
    this.board[6][x] = new Pawn("white", (75*x)+2, (75*6)+2);
  }

  this.drawBoard = function(context) {
    for (y = 0; y < 8; y+=1) {
      for(x = 0; x < 8; x+=1) {
        context.fillStyle= ((x+y) % 2 == 0) ? this.evenTileColor: this.oddTileColor;
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
