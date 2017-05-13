//Global Variables
var player2KeyPressed = false;
var player2Before;


//Player 2
//Players Normal  Speed
var player2Speed1 = 100;
var player2Speed2 = 200;
var player2Speed3 = 300;

//Players Fast Speed
var player2Speed1Fast = 50;
var player2Speed2Fast = 100;
var player2Speed3Fast = 150;
var player2SpeedCounter = 0;


var play2Direction = 79 ;
var moveMexican;
var player2Position;
var chilesCount = 0;
var mexPowActive = false;

//Movement

//RIGHT
var play2MoveRight = function() {

  moveMexican.removeClass("m-right");
  moveMexican.addClass("mexican");

  if (mexPowActive) {
    moveMexican.addClass("mexican-hot");
  }

  player2Before = moveMexican;
  player2KeyPressed = false;
};

// LEFT
var play2MoveLeft = function() {

  moveMexican.removeClass("m-left");
  moveMexican.addClass("mexican");

  if (mexPowActive) {
    moveMexican.addClass("mexican-hot");
  }

  player2Before = moveMexican;
  player2KeyPressed = false;
};
// Movement End

//Powers
var player2SpeedSlow = function() {
  moveMexican.removeClass("mexican-hot");
  player2Speed1 = 100;
  player2Speed2 = 200;
  player2Speed3 = 300;
  mexPowActive = false;
};

var player2SpeedFast = function() {
  moveMexican.addClass("mexican-hot");
  mexPowActive = true;
  player2Speed1 = player2Speed1Fast;
  player2Speed2 = player2Speed2Fast;
  player2Speed3 = player2Speed3Fast;
};


var play2Power = function() {

var player2PowerTrue = moveMexican.hasClass("spicy");

    if (player2PowerTrue) {
      moveMexican.removeClass("spicy");
    }
    if (mexPowActive) {
      return;
    }
    if (player2PowerTrue && !mexPowActive ) {
      player2SpeedFast();
      setTimeout(player2SpeedSlow,5000);
    }
};
