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
  speedCounter = 0;
  speed1 = 100;
  speed2 = 200;
  speed3 = 300;
};

var lookFrontMexican = function() {

  moveMexican.removeClass("m-right");
  moveMexican.addClass("mexican");

  console.log('MOVING RIGHT  OUTSIDE');

     before = moveMexican;
     keyPressed = false;
};


var play2Power = function() {
  // console.log("NASHIRA!!!");

if (moveMexican.hasClass("spicy") === true ) {

    moveMexican.removeClass("spicy");

    if (mexPowActive === true ){
      return;
    }

    setTimeout(function() {
    extraSpeed = 0;
    }, 5000);
  }
};
