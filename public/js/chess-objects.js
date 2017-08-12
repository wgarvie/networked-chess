Board = function() {
  this.boardHeight = 600;
  this.tileSize = this.boardHeight / 8;
  this.oddTileColor = "#B29977";
  this.evenTileColor = "#FFE5C3";

  this.drawBoard = function(context) {
    for (y = 0; y < 8; y+=1) {
      for(x = 0; x < 8; x+=1) {
        context.fillStyle= ((x+y) % 2 == 0) ? this.evenTileColor: this.oddTileColor;
        context.fillRect(x*this.tileSize,y*this.tileSize, this.tileSize, this.tileSize);
      }
    }
  }
}

Piece = function() {
  this.xPos = 0;
  this.yPos = 0;
  this.height = 70;
  this.width = 70;
  this.img = new Image();

  this.drawPiece = function (context) {
    //callback enclosed code must have the current state of this
    //bounded to it.
    this.img.onload = function() {
      context.drawImage(this.img, this.xPos, this.yPos, this.height, this.width);
    }.bind(this);
  }
}

Pawn = function() {
  Piece.call(this);
  this.img.src =  "images/black-pawn.png";
}
Pawn.prototype = Object.create(Piece.prototype);
