$(document).ready(function () {

    $('.gear-check').click(function () {

        $('.color-option').fadeToggle();
    });
    //Start Change Color
    var colorLi = $('.color-option ul li');
    colorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#BC08C0").end()
        .eq(2).css("backgroundColor", "#4FED28").end()
        .eq(3).css("backgroundColor", "#0081FF").end()
        .eq(4).css("backgroundColor", "#F0FF00").end()
        .eq(5).css("backgroundColor", "#FF8700").end()
        .eq(6).css("backgroundColor", "#7EF6FF").end()
        .eq(7).css("backgroundColor", "#F77EFF");
    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });

});

// Loading Screen

$(window).load(function () {

  "use strict";

  // Loading Elements

  $(".loading-overlay .spinner").fadeOut(2000, function () {

      // Show The Scroll

      $("body").css("overflow", "auto");

      $(this).parent().fadeOut(2000, function () {

          $(this).remove();
      });
  });
});
