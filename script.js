$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// Function to open and close sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

// Function to change the color of the sidebar depending on which section you are on scroll
$(document).ready(function () {
  $(window).scroll(function(){
      var ScrollTop = parseInt($(window).scrollTop());

      var first = document.getElementById("about-me-section");
      var sec = document.getElementById("work-section");
      var third = document.getElementById("contact-section");

      var firsttotop = first.scrollHeight;
      var sectotop = (first.scrollHeight + sec.scrollHeight);
      var thirdtotop = (first.scrollHeight + sec.scrollHeight + third.scrollHeight);

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
         document.getElementById("mySidebar").style.backgroundColor = "#b5b5b5";
       }
   });
});