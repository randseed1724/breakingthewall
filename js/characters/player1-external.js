var player1KeyPressed = false;
var player1Before;



//Player 1
var play1Direction = 1 ;
var movePlayer1;
var moneyCount = 0;
var player1PowerActive = false;


//Movement
var player1MoveRight = function() {

  movePlayer1.removeClass("trump-right");
  movePlayer1.addClass("trump");

  player1Before = movePlayer1;
  keyPressed = false;
};

var player1MoveLeft = function() {

  movePlayer1.removeClass("m-left");
  movePlayer1.addClass("trump");

  player1Before = movePlayer1;
  keyPressed = false;
};
// Movement End

// Player 1 Powers
var player1SpeedSlow = function() {
  movePlayer1.removeClass("t-money");
  speed1 = 100;
  speed2 = 200;
  speed3 = 300;
  mexPowActive = false;
  console.log('speed3',speed3);
};

var player1SpeedFast = function() {
  movePlayer1.addClass("t-money");
  mexPowActive = true;
  speed1 = 50;
  speed2 = 100;
  speed3 = 150;
  console.log('speed3 FAST',speed3);
};

var play1Power = function() {

var powerTrue = movePlayer1.hasClass("money");

    if (powerTrue) {
      movePlayer1.removeClass("money");
    }
    if (mexPowActive) {
      return;
    }
    if (powerTrue && !player1PowerActive) {
      player1SpeedFast();
      setTimeout(player1SpeedSlow,5000);
    }
};
