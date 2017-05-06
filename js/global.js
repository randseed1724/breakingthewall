//Global Variables


//Players Normal  Speed
var speed1 = 100;
var speed2 = 200;
var speed3 = 300;

// Players Fast Speed

var speed1Fast = 50;
var speed2Fast = 100;
var speed3Fast = 150;
var speedCounter = 0;



//Mexican
var moveMexican;
var player2Position;
var chilesCount = 0;

//Powers Mexican

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
  keyPressed = false;

  moveMexican.removeClass("m-right");
  moveMexican.addClass("mexican");

  if ( mexPowActive === true) {
    moveMexican.addClass("mexican-hot");
  }
console.log('MOVING RIGHT');
  before = moveMexican;
};
