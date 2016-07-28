/**
 * Created by mrolaf on 7/27/16.
 */



$('.typeBox').click(function(){
    $(this).toggleClass('selected');
})

.blur(function(){
  $(this).toggleClass('selected');
});



$(window).resize(function(){
    if(screen.width/window.innerWidth > 2.1){
       if(screen.width/window.innerWidth > 2.6){
           $('.typeBox').removeClass("col-xs-10");
           $('.typeBox').addClass("col-xs-4");
       }
        $('.typeBox').removeClass("col-xs-10");
        $('.typeBox').addClass("col-xs-4");

    } else {
        $('.typeBox').removeClass("col-xs-4");
        $('.typeBox').addClass("col-xs-10");
    }
});

var mediaFlag = false;


//$('body').click(function () {
//    if(mediaFlag){
//        alert("af");
//        $('#mediaIcon').css("background" , "#4e7492");
//        mediaFlag = false;
//    }
//});

$('#mediaIcon').click(function () {
    if(!mediaFlag){
        $('#mediaIcon').css("background" , "#4e7492");
        mediaFlag = true;
    }
    else if(mediaFlag){
        $('#mediaIcon').css("background" , "#5681a2");
        mediaFlag = false;
    }
    $('#media').toggle();
});

