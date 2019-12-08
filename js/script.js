$(window).on("scroll", function() {
    if($(window).scrollTop() > 10) {
        $(".brand").addClass("brand-scroll");
        $(".navbar").addClass("navbar-scroll");
    } else if($(window).scrollTop() <= 10) {
        $(".brand").removeClass("brand-scroll");
        $(".navbar").removeClass("navbar-scroll");
    }
});