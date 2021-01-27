$(document).ready(function(){
      document.getElementById("navButton").addEventListener('click', nav)
});

function nav () {
  if (document.getElementById("times").style.display === "none") {
    document.getElementById("bars").style.display = "none";
    document.getElementById("times").style.display = "block";
    document.getElementById("mySidebar").style.width = "250px";
  } else {
    document.getElementById("bars").style.display = "block";
    document.getElementById("times").style.display = "none";
    document.getElementById("mySidebar").style.width = "0px";
  }
  


}


// Function to change the color of the sidebar depending on which section you are on scroll
$(document).ready(function () {
  $(window).scroll(function(){
      var ScrollTop = parseInt($(window).scrollTop());

      var first = document.getElementById("about-me-section");
      var sec = document.getElementById("work-section");
      var third = document.getElementById("contact-section");

      var firsttotop = first.scrollHeight;
      var sectotop = (first.scrollHeight + sec.scrollHeight - 450);
      var thirdtotop = (first.scrollHeight + sec.scrollHeight + third.scrollHeight -450);

      console.log( ScrollTop ,firsttotop, sectotop, thirdtotop);
   
      if (ScrollTop >= firsttotop && ScrollTop < sectotop) {
         document.getElementById("mySidebar").style.backgroundColor = "#cdf0c5";
       }
       else if (ScrollTop >= sectotop && ScrollTop < thirdtotop) {
         document.getElementById("mySidebar").style.backgroundColor = "#e0aade";
       }
        else if (ScrollTop >= thirdtotop) {
          document.getElementById("mySidebar").style.backgroundColor = "#63B4D1";
        }
       else{
         document.getElementById("mySidebar").style.backgroundColor = "#d6ccfc";
       }
   });
});