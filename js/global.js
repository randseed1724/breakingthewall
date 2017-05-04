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

//Powers Mexican

var faster = false;

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

  if ( speedCounter === 1) {
    moveMexican.addClass("mexican-hot");
  }

  before = moveMexican;
  keyPressed = false;
};
