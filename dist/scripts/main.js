// jshint devel:true
$(window).scroll(function() {
  if ($(this).scrollTop() > 1){
    $('.animated-header').addClass("sticky");
  }
  else{
    $('.animated-header').removeClass("sticky");
  }
});

window.onload = function() {
  $(function () {
    $(".menu-btn").click(function () {
      $(".top-nav").toggleClass("opened");
      $(".login-nav").toggleClass("opened");
      $(".overlay").toggleClass("active");
    });
  });

  $(window).resize(function () {
    $(".top-nav").removeClass("opened");
    $(".login-nav").removeClass("opened");
    $(".overlay").removeClass("active");
  });

  $( ".preference-1" ).hover(function() {
    $(".preferences-list").toggleClass("drop-pin-1-bg");
  });
  $( ".preference-2" ).hover(function() {
    $(".preferences-list").toggleClass("drop-pin-2-bg");
  });
  $( ".preference-3" ).hover(function() {
    $(".preferences-list").toggleClass("drop-pin-3-bg");
  });
  $( ".preference-4" ).hover(function() {
    $(".preferences-list").toggleClass("drop-pin-4-bg");
  });
  $( ".preference-5" ).hover(function() {
    $(".preferences-list").toggleClass("drop-pin-5-bg");
  });

}
