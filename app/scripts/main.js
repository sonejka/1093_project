// jshint devel:true
$(window).scroll(function() {
  if ($(this).scrollTop() > 1){
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});


window.onload = function() {
  $(function () {
    $(".menu-btn").click(function () {
      $(".top-nav").toggleClass("opened");
      $(".login-nav").toggleClass("opened");
      $(".overlay").toggleClass("active");
      //$(".menu-btn").toggleClass("opened");
    });
  });

  $(window).resize(function () {
    $(".top-nav").removeClass("opened");
    $(".login-nav").removeClass("opened");
    $(".overlay").removeClass("active");
    //$(".menu-btn").removeClass("opened");
  });

}
