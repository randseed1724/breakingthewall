

var game = {
  init: function () {
    this.renderRows();
    // this.trumpInGame();
    this.layout(); //layouts affects columns don't move up
    this.gamekeys();
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
  gamekeys: function() {
  var gamePlay = new GameKey();
  gamePlay.moveKey();
  },



};
