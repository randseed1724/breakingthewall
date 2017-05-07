//Global Variables
var keyPressed = false;
var before;
var play2Direction = 79 ;


//Players Normal  Speed
var speed1 = 100;
var speed2 = 200;
var speed3 = 300;

//Players Fast Speed
var speed1Fast = 50;
var speed2Fast = 100;
var speed3Fast = 150;
var speedCounter = 0;


//Player 2
var moveMexican;
var player2Position;
var chilesCount = 0;

//Powers

//Restart Chile
// var restartChile = function(){
// chilesCount = 0;
// };

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
  speed1 = 50;
  speed2 = 100;
  speed3 = 150;
  console.log('speed3 FAST',speed3);
};

var play2MoveRight = function() {

  moveMexican.removeClass("m-right");
  moveMexican.addClass("mexican");

  before = moveMexican;
  keyPressed = false;
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
