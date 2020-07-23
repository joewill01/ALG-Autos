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
};

/* End slideshow */