/* Scroll detection */

window.addEventListener('scroll', function(e) {
    if (window.scrollY >= 70) {
        document.getElementById('body').classList.add("scroll")
    } else if (window.scrollY < 70) {
        document.getElementById('body').classList.remove("scroll")
    }
});

/* Slideshow */
let moveSlideForward;
let moveSlideBackward;

function slideshow() {
    let current_slide = 0;
    let slides = document.getElementById('slideshow-carousel').children;
    let state = true;

    for (let i=0; i < slides.length; i++) {
        document.getElementById("slideshow-indicators").appendChild(document.createElement("span"));
        slides[i].addEventListener('transitionend', () => {
            slides[i].classList.remove("left");
            slides[i].classList.remove("pos-left");
            slides[i].classList.remove("right");
            slides[i].classList.remove("pos-right");
            state = true;
            if (current_slide === i) {
                slides[i].classList.add("active");
                indicators[i].classList.add("active");
            } else {
                slides[i].classList.remove("active");
                indicators[i].classList.remove("active");
            }
        })
    }

    let indicators = document.getElementById("slideshow-indicators").children;
    indicators[0].classList.add("active");

    moveSlideForward = function() {
        if (state) {
            state = false;
            for (let i = 0; i < slides.length; i++) {
                if (current_slide === i) {
                    slides[i].classList.add("left");
                    if (i === (slides.length - 1)) {
                        slides[0].classList.add("pos-left");
                        slides[0].classList.add("left");
                    } else {
                        slides[i + 1].classList.add("pos-left");
                        slides[i + 1].classList.add("left");
                    }
                }
            }
            if (current_slide === (slides.length - 1)) {
                current_slide = 0;
            } else {
                current_slide++
            }
        }
    };

    moveSlideBackward = function() {
        if (state) {
            state = false;
            for (let i=0; i < slides.length; i++) {
                if (current_slide === i) {
                    slides[i].classList.add("right");
                    if (i === (0)) {
                        slides[slides.length-1].classList.add("pos-right");
                        slides[slides.length-1].classList.add("right");
                    } else {
                        slides[i-1].classList.add("pos-right");
                        slides[i-1].classList.add("right");
                    }
                }
            }
            if (current_slide === (0)) {
                current_slide = slides.length - 1;
            } else {
                current_slide--
            }
        }
    };

    setInterval(moveSlideForward, 5000);
}
/* End slideshow */

function close_side_menu () {
    document.getElementById("side_menu_checkbox").checked = false;
}

window.onload = function() {
    AOS.init();
    slideshow();
};

