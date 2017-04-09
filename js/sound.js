


    function Sound(){
    }

    Sound.prototype.startGame = function() {


      var keyPressed = false;
      var lastEvent;

      var audioElement = document.createElement('audio');
      var audioElementSrc = $(this).attr('data-audio-src');
      audioElement.setAttribute('src', '/home/alejandro/Desktop/Breaking the wall/sounds/A Journey Awaits.mp3');

      // changed "load" t0 "loadeddata"
          audioElement.addEventListener("loadeddata", function(){
              audioElement.play();

              audioElement.volume = (5 / 100);

              setTimeout(function() {
              audioElement.volume = (15 / 100);
            }, 500);

              setTimeout(function() {
              audioElement.volume = (30 / 100);
            }, 1000);

                setTimeout(function() {
                audioElement.volume = (60 / 100);
              }, 3500);

              setTimeout(function() {
              audioElement.volume = (55 / 100);
            }, 6500);

          }, true);

// Play now button effect

          var clickAccept = document.createElement('audio');
          var clickAcceptSrc = $(this).attr('data-audio-src');
          clickAccept.setAttribute('src', '/home/alejandro/Desktop/Breaking the wall/sounds/accept.mp3');
          clickAccept.volume = (80 / 100);



      var audioElement2 = document.createElement('audio');
      var audioElementSrc2 = $(this).attr('data-audio-src');
      audioElement2.setAttribute('src', '/home/alejandro/Desktop/Breaking the wall/sounds/Grey Sector v0_86.mp3');
      // audioElement2.pause();

      // audioElement2.addEventListener("click", function(){

      audioElement2.volume = (5 / 100);

      setTimeout(function() {
      audioElement2.volume = (10 / 100);
    }, 2000);

    setTimeout(function() {
    audioElement2.volume = (20 / 100);
  }, 4000);

      setTimeout(function() {
      audioElement2.volume = (25 / 100);
    }, 4000);

        setTimeout(function() {
        audioElement2.volume = (30 / 100);
      }, 6500);

      setTimeout(function() {
      audioElement2.volume = (40 / 100);
    }, 8500);

    setTimeout(function() {
    audioElement2.volume = (45 / 100);
  }, 10500);

    setTimeout(function() {
    audioElement2.volume = (50 / 100);
  }, 13000);

  setTimeout(function() {
  audioElement2.volume = (40 / 100);
}, 19000);

// sounds controls

      $('#btt').on("click", function(event) {
        audioElement.pause();
        clickAccept.play();
        // audioElement2.play();

 });




//CHARACTERS

      var building = document.createElement('audio');
      building.setAttribute('src', '/home/alejandro/Desktop/Breaking the wall/sounds/building-wall.wav');

       var greatWall = document.createElement('audio');
       greatWall.setAttribute('src', '/home/alejandro/Desktop/Breaking the wall/sounds/great-wall.mp3');


//Bricks sounds
      $(document).on("keydown", function(event) {

        if (  stop == 1) {
          return;
        }

        if (event.keyCode == 83 && ! keyPressed) {
          //HERE LAST EVENT
                if (lastEvent && lastEvent.keyCode == event.keyCode) {
                       return;
                   }
                   lastEvent = event;

              keyPressed = true;
              setTimeout(function() {
                building.play();
            }, 500);


// I'm  going to build a great wall
       random = Math.floor(Math.random() * 100);

          if (random >= 96 ) {

            keyPressed = true;
            setTimeout(function() {
              greatWall.play();
              greatWall.volume = (80 / 100);
              greatWall.playbackRate= 1.5;

          }, 10);
          }
        }
        keyPressed = false;
              });




//axepick audio
  var axepick = document.createElement('audio');
  axepick.setAttribute('src', '/home/alejandro/Desktop/Breaking the wall/sounds/axepick.wav');

  $(document).on("keydown", function(event) {


    if (  stop == 1) {
      return;
    }

    if (event.keyCode == 38 && ! keyPressed) {
//HERE LAST EVENT
      if (lastEvent && lastEvent.keyCode == event.keyCode) {
             return;
         }
         lastEvent = event;


          keyPressed = true;
          setTimeout(function() {
            axepick.play();
        }, 500);
   }
   keyPressed = false;
    });



// wey audio
    var wey = document.createElement('audio');
    wey.setAttribute('src', '/home/alejandro/Desktop/Breaking the wall/sounds/no-mames-wey.mp3');


    $(document).on("keydown", function(event) {
      if (  stop == 1) {
        return;
      }

      if (event.keyCode == 40 && ! keyPressed) {
//HERE LAST EVENT
              if (lastEvent && lastEvent.keyCode == event.keyCode) {
                     return;
                 }
                 lastEvent = event;


        random = Math.floor(Math.random() * 100);

       if (random >= 60 ) {

         keyPressed = true;
         setTimeout(function() {
           wey.playbackRate= 1.2;

           wey.play();
       }, 10);
       }
       keyPressed = false;
     }

           });

                $(document).on("keyup", function(event) {
                  lastEvent = null;
               });
  };
