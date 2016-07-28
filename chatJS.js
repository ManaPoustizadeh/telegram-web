/**
 * Created by mrolaf on 7/27/16.
 */



$('.typeBox').click(function(){
    $(this).toggleClass('selected');
})

.blur(function(){
  $(this).toggleClass('selected');
})

.keypress(function(){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            if($(this).val()!=''){
                var $li = $("<li>");
                var $div = $("<div>" , {"class" : "sender"});
                var $p = $("<p>" , {"class" : "message sent"});
                $p.html($(this).val());
                var $span = $("<span>" , {"class" : "time"});
                var d = new Date();
                $span.html(d.toLocaleTimeString().replace(/:\d+ /, ' '));
                $div.append($p);
                $div.append($span);
                $li.append($div);
                $('#messageArray').append($li);
                $(this).val('');

                $('#chatBoard').scrollTop($('#chatBoard')[0].scrollHeight);
            }
        }

    });


$(window).resize(function(){
    console.log(screen.width/window.innerWidth);
    if(screen.width/window.innerWidth>=5){
        $('#goozbaba').removeClass("col-xs-6");
        $('#goozbaba').addClass("col-xs-5");
    }
    else if(screen.width/window.innerWidth>=4){
        $('#goozbaba').removeClass("col-xs-7");
        $('#goozbaba').removeClass("col-xs-5");
        $('#goozbaba').addClass("col-xs-6");
    }
    else if(screen.width/window.innerWidth>=3){
        $('#goozbaba').removeClass("col-xs-8");
        $('#goozbaba').removeClass("col-xs-6");
        $('#goozbaba').addClass("col-xs-7");
    }
    else if(screen.width/window.innerWidth>=2.5){
        $('#goozbaba').removeClass("col-xs-10");
        $('#goozbaba').removeClass("col-xs-7");
        $('#goozbaba').addClass("col-xs-9");
    }
    else{
        $('#goozbaba').removeClass("col-xs-9");
        $('#goozbaba').addClass("col-xs-10");
    }
        //$('#goozbaba').removeClass("col-xs-10");
        //$('#goozbaba').addClass("col-xs-6");
        //$('#goozbaba').removeClass("col-xs-6");
        //$('#goozbaba').addClass("col-xs-10");

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

