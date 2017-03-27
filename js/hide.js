


    function LayoutHide(){
    }


    LayoutHide.prototype.hidding = function() {

        for (var i = 0; i <= 80; i++) {
        if (![8,17,26,35,44,53,62,71,80, 6,15,24,33,42,51,60,69,78,0,1, 7, 9, 10, 16, 18, 19,25, 27,28,34, 36, 37,43,45,46, 51,52, 54,55, 60,61, 63, 64, 69,70, 72,73, 78,79].includes(i)) {

        var newSky = 'newSky';
        var sky = "<div class='sky' id='sky_"+ newSky +"' >";

        $("#grid" + i).parent().prepend(sky);
        $("#grid" + i).hide();
        }
        }
    };
