/**
 * Created by mana on 7/26/16.
 */

// document.getElementsByClassName("menuWrapper")[0].onclick = function () {
//     this.style.background = "#4e7492";
// };
//
// document.getElementsByClassName("menuWrapper")[1].onclick = function () {
//     this.style.background = "#4e7492";
// };
var flag = false;

$('#searchButton').mousedown(function () {
    $(this).css({"background": "#4e7492"});
    $('.wrapperSearch').show();
    $('#menuButton').attr('class' , 'menuWrapper');
});

$('#searchButton').click(function () {
    $("#searchBar").triggerHandler("click");
})


$('#searchBar').blur(function () {
    $('#searchBar').val('');
    $('#cross').hide();
    $('.wrapperSearch').hide();
});


$('#searchBar').keydown(function () {
    if($('#searchBar').val() != "" && !flag){
        $('#cross').show();
        flag = true;
    }
    if($('#searchBar').val()== ""){
        flag = false;
        $('#cross').hide();
    }
});


$('#searchButton').mouseup(function () {
    $(this).css({"background-color": "#5681a2"});
    // $('#menuButton').attr('class' , 'menuWrapper');
});

$('#cross').click(function () {
    // $('#searchBar').val('');
    alert("jhg");
})




var personArray = new Array();
var tmpPerson;


$('#menuButton').click(function () {
    $(this).toggleClass("wrapperClicked");
    $('#menu').toggle();


});


$("#cross").click(function(){
   $("#searchBar").val("");
   $(this).hide();
});


$.get("listItemTemplate.html" , function(myVar){
    var $elem = $('<li></li>').html(myVar);
    var $img = $elem.find('img');
    $img.attr("src","img/mohammad.jpg");
    //alert($img.attr("src"));
    $('#chatLists').append($elem);

});

$(document).ready(function(){





    $.getJSON("data").then(function(data){
        //assignshit(data);
        personArray = data;

        testtest(data);

    });


});


function testtest(tmptmp){


    for(var i=0; i < tmptmp.length ;i++){
        console.log("hello");
        tesst(tmptmp[i] , i);
    }
}


function tesst(tmo, i){
    $.get("listItemTemplate.html" , function(myVar){


        console.log(tmo.chatSum + "i: "  + i);

        var $elem = $('<li></li>').html(myVar);
        //console.log(personArray[i].profilePicture);
        var $img = $elem.find('img');
        $img.attr("src",tmo.phot);
        $img.attr("id", "image" + i);
        var $title = $elem.find(".chatName");
        $title.text(tmo.chatTitle);
        var $sum = $elem.find(".chatSum");
        $sum.text(tmo.chatSum);
        var $time = $elem.find(".time");
        $time.text(tmo.time);

        if(tmo.unread != ""){
            var $div = $("<div></div>");
            $div.attr("class","notifCircle");
            $div.text(tmo.unread);
            var $timeNread = $elem.find(".timeNread");
            $timeNread.append($div);
        }
        $('#chatLists').append($elem);
    });

}