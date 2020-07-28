/* Scroll detection */

window.addEventListener('scroll', function(e) {
    if (window.scrollY >= 70) {
        document.getElementById('body').classList.add("scroll")
    } else if (window.scrollY < 70) {
        document.getElementById('body').classList.remove("scroll")
    }
});

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
        if (current_slide === (slides.length - 1)) {
            current_slide = 0;
        } else {
            current_slide++
        }
    }

    setInterval(moveSlide, 5000);
}
/* End slideshow */

function close_side_menu () {
    document.getElementById("side_menu_checkbox").checked = false;
}

window.onload = function() {
    AOS.init();
    slideshow();
};

