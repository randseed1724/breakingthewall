
//code that makes the game work

var game = {
  init: function () {
    this.renderRows();
    this.layout();
    this.hideLayout();
    // this.speed();
    this.gamePlayer1();
    this.gamePlayer2();
    this.obs1();
    this.obs2();
    this.audioStart();
    this.power1();
    this.power2();
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
  },
  hideLayout: function() {
  var hide = new LayoutHide();
  hide.hidding();
  },
  audioStart: function() {
  var audio = new Sound();
  audio.startGame();
  },
  speed: function() {
  var run = new Speed();
  run.playersSpeed();
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
  power1: function() {
  var money = new Money();
  money.bullion();
  },
  power2: function() {
  var chile = new Chile();
  chile.hot();
  },

};

// end of code that makes the game work
