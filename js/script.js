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

        anime({
            targets: '#header-svg path',
            d: 'm0 0v70q250 0 500 0v-70z',
            easing: 'easeInOutQuad',
            duration: 250,
        });



        last_header_animation = 'scroll';

    } else if ((type === "top") && (last_header_animation === "scroll")) {

        anime({
            targets: '#header-svg path',
            d: 'm0 0v70q250 80 500 0v-70z',
            easing: 'easeInOutQuad',
            duration: 250,
        });


        last_header_animation = 'top';
    }
}

$(window).on("scroll", function() {
    if($(window).scrollTop() > 10) {
        animate_header('scroll');
        $(".brand").addClass("brand-scroll");
    } else if($(window).scrollTop() <= 10) {
        animate_header('top');
        $(".brand").removeClass("brand-scroll");
    }
});
