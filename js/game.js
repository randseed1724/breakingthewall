

var game = {
  init: function () {
    this.renderRows();
    this.layout(); //layouts affects columns don't move up
    this.hideLayout();
    this.gamePlayer1();
    this.gamePlayer2();

  },


  renderRows: function() {
  for (var i = 0; i <= 8; i++) {
    var column = new Column(i);
    column.createColumn();
  }
  },
  layout: function() {
  var gameLayout = new Layout();
  gameLayout.displayLayout();
  gameLayout.displayStart();
  },
  hideLayout: function() {
  var hide = new LayoutHide();
  hide.hidding();
  },
  gamePlayer1: function() {
  var gamePlay = new GameKeyPlayer1();
  gamePlay.controlPlayer1();
  },
  gamePlayer2: function() {
  var gamePlay2 = new GameKeyPlayer2();
  gamePlay2.controlPlayer2();
  },
  // over: function() {
  // var isOver = new gameOver();
  // isOver.over();
  // },
  // welcome: function() {
  // var begin = new Layout();
  // begin.displayStart();
  // },

};
