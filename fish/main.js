$(document).ready(function(){

  setInterval(function () {
    $("#bubble1").css("top", 15 + Math.random()*30 + "vh")
    $("#bubble1").css("left", 15 + Math.random()*30 + "vh")
    $("#bubble2").css("top", 15 + Math.random()*30 + "vh")
    $("#bubble2").css("left", 15 + Math.random()*30 + "vh")
  }, 1000);

  $("#link").attr("href", "page" + (1 + Math.floor(Math.random()*4)) + ".html")

  // setTimeout(function () {
  //   $(".ans").show();
  // }, 3000);

  // $(".ans").hide();

  $("#question").click(function(){
    $(".ans")[Math.floor(Math.random()*3)].hidden = false;
    setTimeout(function () {

      $(".ans").css("font-size", "40px");
    }, 100);

    $(this).hide();
    $("#question").off("click");

  })
for (var i = 0; i < 3; i++) {
  $(".ans")[i].hidden = true;
}





});
