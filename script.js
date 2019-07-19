
$( document ).ready(function() {
  //Drop menu
  $("#dropbox > a").click(
    function(){
      $(this).next("div").toggleClass("active");
    }
  );
  // Hamburger menu
  $(".header-right > a").click(
    function() {
      $(".hamburger-menu").addClass("active");
    }
  );
  $(".close").click(
    function() {
      $(".hamburger-menu").removeClass("active");
    }
  );
});
