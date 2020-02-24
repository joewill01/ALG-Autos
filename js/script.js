let last_header_animation = 'top';

/* Slideshow */

let current_slide = 1;
let slide_count = 5;

function moveSlide() {
    if (current_slide === 1) {
        document.getElementById('item1').classList.add("left");
        document.getElementById('item2').classList.add("right");
    } else if (current_slide === 2) {
        document.getElementById('item2').classList.add("left");
        document.getElementById('item3').classList.add("right");
    } else if (current_slide === 3) {
        document.getElementById('item3').classList.add("left");
        document.getElementById('item4').classList.add("right");
    } else if (current_slide === 4) {
        document.getElementById('item4').classList.add("left");
        document.getElementById('item5').classList.add("right");
    } else if (current_slide === 5) {
        document.getElementById('item5').classList.add("left");
        document.getElementById('item1').classList.add("right");
    }
    if (current_slide === slide_count) {
        current_slide = 1;
    } else {
        current_slide++
    }
}

window.onload = function() {
    document.getElementById('item1').addEventListener('transitionend', () => {
        document.getElementById('item1').classList.remove("left");
        document.getElementById('item1').classList.remove("right");
        if (current_slide === 1) {
            document.getElementById('item1').classList.add("active");
        } else {
            document.getElementById('item1').classList.remove("active");
        }
    })

    document.getElementById('item2').addEventListener('transitionend', () => {
        document.getElementById('item2').classList.remove("left");
        document.getElementById('item2').classList.remove("right");
        if (current_slide === 2) {
            document.getElementById('item2').classList.add("active");
        } else {
            document.getElementById('item2').classList.remove("active");
        }
    })

    document.getElementById('item3').addEventListener('transitionend', () => {
        document.getElementById('item3').classList.remove("left");
        document.getElementById('item3').classList.remove("right");
        if (current_slide === 3) {
            document.getElementById('item3').classList.add("active");
        } else {
            document.getElementById('item3').classList.remove("active");
        }
    })

    document.getElementById('item4').addEventListener('transitionend', () => {
        document.getElementById('item4').classList.remove("left");
        document.getElementById('item4').classList.remove("right");
        if (current_slide === 4) {
            document.getElementById('item4').classList.add("active");
        } else {
            document.getElementById('item4').classList.remove("active");
        }
    })

    document.getElementById('item5').addEventListener('transitionend', () => {
        document.getElementById('item5').classList.remove("left");
        document.getElementById('item5').classList.remove("right");
        if (current_slide === 5) {
            document.getElementById('item5').classList.add("active");
        } else {
            document.getElementById('item5').classList.remove("active");
        }
    })

 setInterval(moveSlide, 5000);
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
    } else if($(window).scrollTop() <= 10) {
        animate_header('top');
        $(".brand").removeClass("brand-scroll");
    }
});
