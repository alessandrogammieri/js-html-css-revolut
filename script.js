
$( document ).ready(function() {
  //Drop menu
  $("#dropbox > a").click(
    function(){
      $("#drop").toggleClass("active");
    }
  );
  $("#tropbox > a").click(
    function(){
      $("#trop").toggleClass("active");
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
