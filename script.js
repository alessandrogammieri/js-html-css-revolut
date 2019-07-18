
$( document ).ready(function() {
  //drop menù
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
});
