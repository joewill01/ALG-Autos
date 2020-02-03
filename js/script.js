let last_header_animation = 'top';

$("#slideshow > .slide:gt(0)").hide();

setInterval(function() {
  $('#slideshow > .slide:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  2000);

function animate_header(type) {
    if ((type === "scroll") && (last_header_animation === "top")) {
        document.getElementById('header-scroll-animate').beginElement();
        last_header_animation = 'scroll';
    } else if ((type === "top") && (last_header_animation === "scroll")) {
        document.getElementById('header-animate').beginElement();
        last_header_animation = 'top';
    }
}

$(window).on("scroll", function() {
    if($(window).scrollTop() > 10) {
        $(".brand").addClass("brand-scroll");
        animate_header('scroll');
        $(".nav").addClass("nav-scroll");
    } else if($(window).scrollTop() <= 10) {
        $(".brand").removeClass("brand-scroll");
        animate_header('top');
        $(".nav").removeClass("nav-scroll");
    }
});
