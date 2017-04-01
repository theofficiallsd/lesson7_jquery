/*
   Program Name: Recipe Display Application
   Author: Logan Drake
   
   Date: 3/31/17
   
   Filename: drill4.js

*/

/* global $*/

//displays the next element after the current target
function display2(event) {
   
   $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");
   
}//end of display2

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display2);

//change the background color h3 element when mouse hovers over it
$("h3").hover(function(){
      $(this).class("background-color", "red");
      }, function () {
      $(this).css("background-color", "yellow");
});

//hover() will trigger display2 method each time mouse hovers over header
$("h3").hover(display2);