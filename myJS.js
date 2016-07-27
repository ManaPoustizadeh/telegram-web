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
        //$('#cross').hide();
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

$('#menuButton').click(function () {
    $(this).toggleClass("wrapperClicked");
    $('#menu').toggle();

});


$("#cross").click(function(){
   $("#searchBar").val("");
   $(this).hide();
});


