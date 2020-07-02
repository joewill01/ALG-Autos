let last_header_animation = 'top';

/* Slideshow */
function slideshow() {
    let current_slide = 0;
    let slides = document.getElementById('slideshow-carousel').children;

    for (let i=0; i < slides.length; i++) {
        slides[i].addEventListener('transitionend', () => {
            slides[i].classList.remove("left");
            slides[i].classList.remove("right");
            if (current_slide === i) {
                slides[i].classList.add("active");
            } else {
                slides[i].classList.remove("active");
            }
        })
    }

    function moveSlide() {
        for (let i=0; i < slides.length; i++) {
            if (current_slide === i) {
                slides[i].classList.add("left");
                if (i === (slides.length - 1)) {
                    slides[0].classList.add("right");
                } else {
                    slides[i+1].classList.add("right");
                }
            }
        }
        if (current_slide == (slides.length - 1)) {
            current_slide = 0;
        } else {
            current_slide++
        }
    }

    setInterval(moveSlide, 5000);
}

window.onload = function() {
    slideshow();
}

/* End slideshow */

function animate_header(type) {
    if ((type === "scroll") && (last_header_animation === "top")) {
        anime({
            targets: '#header-svg path',
            d: 'm0 0v70q250 0 500 0v-70z',
            easing: 'easeInOutQuad',
            duration: 250,
        });
        last_header_animation = 'scroll';
    }
    else if ((type === "top") && (last_header_animation === "scroll")) {
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
        $(".nav").addClass("nav-scroll");
    } else if($(window).scrollTop() <= 10) {
        animate_header('top');
        $(".brand").removeClass("brand-scroll");
        $(".nav").removeClass("nav-scroll");
    }
});

function close_side_menu () {
    document.getElementById("side_menu_checkbox").checked = false;
}
