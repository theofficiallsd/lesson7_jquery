/*
   Program Name: Recipe Display Application (Extra Credit .js file)
   Author: Logan Drake
   
   Date: 3/31/17
   
   Filename: myRecipe.js

*/

/* global $*/

//displays the next element after the current target
function display(event) {
   
   $(event.currentTarget).next().animate( {height: 'toggle'}, "fast");
   
}//end of display

//DOM traversal
$("h3").first();
$("h3").next();

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display);

//change the background color h3 element when mouse hovers over it
$("h3").hover(function(){
      $(this).class("background-color", "blue");
      }, function () {
      $(this).css("background-color", "cyan");
});

//CSS change
$("li").html("GO NOLES!");

//hover() will trigger display method each time mouse hovers over header
$("h3").hover(display);