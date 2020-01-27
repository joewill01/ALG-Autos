$("#slideshow > .slide:gt(0)").hide();

setInterval(function() {
  $('#slideshow > .slide:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  2000);

$(window).on("scroll", function() {
    if($(window).scrollTop() > 10) {
        $(".brand").addClass("brand-scroll");
        $(".navbar").addClass("navbar-scroll");
        $(".nav").addClass("nav-scroll");
    } else if($(window).scrollTop() <= 10) {
        $(".brand").removeClass("brand-scroll");
        $(".navbar").removeClass("navbar-scroll");
        $(".nav").removeClass("nav-scroll");
    }
});
