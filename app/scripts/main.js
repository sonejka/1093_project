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

  $(".forgot-pass-btn").click(function() {
      $(".forgot-pass-form").removeClass("closed"),
        $(".sign-in-form").addClass("closed")
    }
  ),
    $(".back-to-login").click(function() {
        $(".forgot-pass-form").addClass("closed"),
          $(".sign-in-form").removeClass("closed")
      }
    ),

    $(".hide-password").on("click", function() {
        var a = $(this)
          , b = a.prev("input");
        "password" == b.attr("type") ? b.attr("type", "text") : b.attr("type", "password"),
          a.text("Hide" == a.text() ? "Show" : "Hide"),
          b.putCursorAtEnd()
      }
    )

}


jQuery.fn.putCursorAtEnd = function() {
  return this.each(function() {
      if (this.setSelectionRange) {
        var a = 2 * $(this).val().length;
        this.setSelectionRange(a, a)
      } else
        $(this).val($(this).val())
    }
  )
}
