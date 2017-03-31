

var game = {
  init: function () {
    this.renderRows();
    this.layout();
    this.hideLayout();
    this.gamePlayer1();
    this.gamePlayer2();
    this.obs1();
    // this.obs2();
    this.audioStart();

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
  gameLayout.Win();
  gameLayout.playAgain();
  gameLayout.feedback();
  },
  hideLayout: function() {
  var hide = new LayoutHide();
  hide.hidding();
  },
  audioStart: function() {
  var audio = new Sound();
  audio.startGame();
  },
  gamePlayer1: function() {
  var gamePlay = new GameKeyPlayer1();
  gamePlay.controlPlayer1();
  },
  gamePlayer2: function() {
  var gamePlay2 = new GameKeyPlayer2();
  gamePlay2.controlPlayer2();
  },
  obs1: function() {
  var girl = new Girl();
  girl.girlRun();
  },
  obs2: function() {
  var police = new Police();
  police.policeRun();
  },

};
