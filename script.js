$(document).ready(function(){
    $("#navButton").on('click', nav);
    $(window).scroll(scrollColorChange);
});

function nav () {
  if (document.getElementById("times").style.display === "none") {
    document.getElementById("bars").style.display = "none";
    document.getElementById("times").style.display = "block";
    document.getElementById("sidebar").style.width = "250px";
  } else {
    document.getElementById("bars").style.display = "block";
    document.getElementById("times").style.display = "none";
    document.getElementById("sidebar").style.width = "0px";
  }
  


}


// Function to change the color of the sidebar depending on which section you are on scroll
function scrollColorChange (){
  let ScrollTop = parseInt($(window).scrollTop());

  let aboutme = $("#about-me-section").offset();
  let portfolio = $("#portfolio-section").offset();
  let work = $("#work-section").offset();
  let contact = $("#contact-section").offset();
      
  if (ScrollTop >= aboutme.top && ScrollTop < portfolio.top) {
    $("#sidebar").css("background-color", "#cdf0c5")
  } else if (ScrollTop >= portfolio.top && ScrollTop < work.top){
    $("#sidebar").css("background-color", "#5fcc8d")
  } else if (ScrollTop >= work.top && ScrollTop < contact.top) {
    $("#sidebar").css("background-color", "#e0aade")
  } else if (ScrollTop >= contact.top) {
    $("#sidebar").css("background-color", "#63B4D1")
  } else {
    $("#sidebar").css("background-color", "#d6ccfc")
  }
}