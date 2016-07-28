/**
 * Created by mrolaf on 7/27/16.
 */
var mediaFlag = false;


$('body').click(function () {
    if(mediaFlag){
        alert("af");
        $('#mediaIcon').css("background" , "#4e7492");
        mediaFlag = false;
    }
});

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


    