$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  5000);

$(window).on("scroll", function() {
    if($(window).scrollTop() > 10) {
        $(".brand").addClass("brand-scroll");
        $(".navbar").addClass("navbar-scroll");
    } else if($(window).scrollTop() <= 10) {
        $(".brand").removeClass("brand-scroll");
        $(".navbar").removeClass("navbar-scroll");
    }
});
