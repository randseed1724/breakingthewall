

var game = {
  init: function () {
    this.renderRows();
    // this.trumpInGame();
    this.layout(); //layouts affects columns don't move up
    this.gamePlayer1();
    this.gamePlayer2();

  },


  renderRows: function() {
  for (var i = 0; i <= 8; i++) {
    var column = new Column(i);
    column.createColumn();
  }
  },
  trumpInGame: function() {
  var theTrump = new Trump();
   theTrump.displayTrump();
  },
  layout: function() {
  var gameLayout = new Layout();
  gameLayout.displayLayout();
  },
  gamePlayer1: function() {
  var gamePlay = new GameKeyPlayer1();
  gamePlay.controlPlayer1();
  },
  gamePlayer2: function() {
  var gamePlay = new GameKeyPlayer2();
  gamePlay.controlPlayer2();
  },




};
