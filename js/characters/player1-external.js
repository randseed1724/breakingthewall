var player1KeyPressed = false;
var player1Before;


//Player 1
//Players Normal  Speed
var player1Speed1 = 100;
var player1Speed2 = 200;
var player1Speed3 = 300;

//Players Fast Speed
var player1Speed1Fast = 50;
var player1Speed2Fast = 100;
var player1Speed3Fast = 150;
var player1SpeedCounter = 0;


var play1Direction = 1 ;
var movePlayer1;
var moneyCount = 0;
var player1PowerActive = false;


//Movement

//RIGHT
var player1MoveRight = function() {

  movePlayer1.removeClass("trump-right");
  movePlayer1.addClass("trump");

  if (player1PowerActive) {
    movePlayer1.addClass("t-money");
  }

  player1Before = movePlayer1;
  player1KeyPressed = false;
};

//LEFT
var player1MoveLeft = function() {
  // console.log("%cWorking!", "color: green; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;");

  movePlayer1.removeClass("trump-left");
  movePlayer1.addClass("trump");

  if (player1PowerActive) {
    movePlayer1.addClass("t-money");
  }

  player1Before = movePlayer1;
  player1KeyPressed = false;
};
// Movement End

// Player 1 Powers
var player1SpeedSlow = function() {
  movePlayer1.removeClass("t-money");
  player1Speed1 = 100;
  player1Speed2 = 200;
  player1Speed3 = 300;
  player1PowerActive = false;
  console.log('player1Speed3',player1Speed3);
};

var player1SpeedFast = function() {
  movePlayer1.addClass("t-money");
  player1PowerActive = true;
  player1Speed1 = player1Speed1Fast;
  player1Speed2 = player1Speed2Fast;
  player1Speed3 = player1Speed3Fast;
  console.log('player1Speed3 FAST',player1Speed3);
};

var play1Power = function() {

var player1PowerTrue = movePlayer1.hasClass("money");

    if (player1PowerTrue) {
      movePlayer1.removeClass("money");
    }
    if (player1PowerActive) {
      return;
    }
    if (player1PowerTrue && !player1PowerActive) {
      player1SpeedFast();
      setTimeout(player1SpeedSlow,5000);
    }
};
