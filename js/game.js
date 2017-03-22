

var game = {
  init: function () {
    console.log("Hi");
    this.layout();
    this.renderRows();
    this.trumpInGame();

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
  }




};
