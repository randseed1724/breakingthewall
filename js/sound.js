


    function Sound(){
    }

    Sound.prototype.startGame = function() {

      var keyPressed = false;

      var audioElement = document.createElement('audio');
      var audioElementSrc = $(this).attr('data-audio-src');
      audioElement.setAttribute('src', '/home/alejandro/Desktop/Breaking the wall/sounds/A Journey Awaits.mp3');
      $.get();

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
              audioElement.volume = (75 / 100);
            }, 6500);

          }, true);



      var audioElement2 = document.createElement('audio');
      var audioElementSrc2 = $(this).attr('data-audio-src');
      audioElement2.setAttribute('src', '/home/alejandro/Desktop/Breaking the wall/sounds/Grey Sector v0_86.mp3');
      $.get();
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

      $('#btt').on("click", function(e) {
        audioElement.pause();
        audioElement2.play();

 });

//characters

      var building = document.createElement('audio');
      building.setAttribute('src', '/home/alejandro/Desktop/Breaking the wall/sounds/building-wall.wav');
      $.get();

      // changed "load" t0 "loadeddata"

// sounds controls 2

$(document).on("keydown", function(e) {

  if (e.keyCode == 83 && ! keyPressed) {
        keyPressed = true;
        setTimeout(function() {
          building.play();
      }, 500);
 }
 keyPressed = false;
  });

  var axepick = document.createElement('audio');
  axepick.setAttribute('src', '/home/alejandro/Desktop/Breaking the wall/sounds/axepick.wav');
  $.get();

  $(document).on("keydown", function(e) {

    if (e.keyCode == 38 && ! keyPressed) {
          keyPressed = true;
          setTimeout(function() {
            axepick.play();
        }, 500);
   }
   keyPressed = false;
    });


    var wey = document.createElement('audio');
    wey.setAttribute('src', '/home/alejandro/Desktop/Breaking the wall/sounds/no-mames-wey.mp3');
    $.get();

    $(document).on("keydown", function(e) {

      if (e.keyCode == 37 && ! keyPressed) {



        random = Math.floor(Math.random() * 100);

       if (random >= 97 ) {

         keyPressed = true;
         setTimeout(function() {
           wey.play();
       }, 1000);
       }
       keyPressed = false;
     }

           });
 // $(document).on("keyup", function(e) {
 //   if (e.keyCode == 83 && ! keyPressed) {
 //         keyPressed = true;
 //           building.pause();
 //         }
 //         keyPressed = false;
 //
 //  });
      //
      // audioElement.setAttribute('src', '/home/alejandro/Desktop/Breaking the wall/sounds/A Journey Awaits.mp3');
      // $("#gameStart").append(audioElement);


      // $(document).load(function() {
      //   alert("2");
      // });

      // audioElement.addEventListener('ended', function() {
      //     this.play();
      // }, false);
      //
      // audioElement.addEventListener("canplay",function(){
      //     $("#length").text("Duration:" + audioElement.duration + " seconds");
      //     $("#source").text("Source:" + audioElement.src);
      //     $("#status").text("Status: Ready to play").css("color","green");
      // });
      //
      // audioElement.addEventListener("timeupdate",function(){
      //     $("#currentTime").text("Current second:" + audioElement.currentTime);
      // });
      //
      // $('#play').click(function() {
      //     audioElement.play();
      //     $("#status").text("Status: Playing");
      // });
      //
      // $('#pause').click(function() {
      //     audioElement.pause();
      //     $("#status").text("Status: Paused");
      // });
      //
      // $('#restart').click(function() {
      //     audioElement.currentTime = 0;
      // });

    };
