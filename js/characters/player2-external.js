//Global Variables
var player2KeyPressed = false;
var player2Before;


//Player 2
var play2Direction = 79 ;
var moveMexican;
var player2Position;
var chilesCount = 0;

//Movement
var play2MoveRight = function() {

  moveMexican.removeClass("m-right");
  moveMexican.addClass("mexican");

  player2Before = moveMexican;
  player2KeyPressed = false;
};

var play2MoveLeft = function() {

  moveMexican.removeClass("m-left");
  moveMexican.addClass("mexican");

  player2Before = moveMexican;
  player2KeyPressed = false;
};
// Movement End

//Powers
var mexPowActive = false;

var speedSlow = function() {
  moveMexican.removeClass("mexican-hot");
  speed1 = 100;
  speed2 = 200;
  speed3 = 300;
  mexPowActive = false;
  console.log('speed3',speed3);
};

var speedFast = function() {
  moveMexican.addClass("mexican-hot");
  mexPowActive = true;
  speed1 = speed1Fast;
  speed2 = speed2Fast;
  speed3 = speed3Fast;
  console.log('speed3 FAST',speed3);
};


var play2Power = function() {

var powerTrue = moveMexican.hasClass("spicy");

    if (powerTrue) {
      moveMexican.removeClass("spicy");
    }
    if (mexPowActive) {
      return;
    }
    if (powerTrue && !mexPowActive ) {
      speedFast();
      setTimeout(speedSlow,5000);
    }
};
