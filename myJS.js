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


$('#searchButton').mousedown(function () {
    $(this).css({"background": "#4e7492"});
    $('#searchBar').show();
    $('#menuButton').attr('class' , 'menuWrapper');
});

$('#searchButton').click(function () {
    $("#searchBar").triggerHandler("click");
})


$('#searchBar').blur(function () {
    $('#searchBar').val('');
    $('#searchBar').hide();
});



if($('#searchBar').val()!= ""){
    alert("hello");
}

// 

$('#searchButton').mouseup(function () {
    $(this).css({"background-color": "#5681a2"});
    // $('#menuButton').attr('class' , 'menuWrapper');
});

$('#menuButton').click(function () {
    $(this).toggleClass("wrapperClicked");
});