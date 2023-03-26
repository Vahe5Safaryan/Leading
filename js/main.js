"use strict";

// HEADER TIMER START //

let countDownDate = new Date("April21, 2023 20:20:00").getTime();
const elements = Array.from(document.getElementsByClassName("timers"));

function timer() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const content =
        `<div>${days} <p class="timer-text">days</p> </div> <span class="separator"><span></span><span></span></span>` +
        `<div>${hours} <p class="timer-text">HR</p> </div> <span class="separator"><span></span><span></span></span>` +
        `<div>${minutes} <p class="timer-text">MIN</p> </div> <span class="separator"><span></span><span></span></span>` +
        `<div>${seconds} <p class="timer-text">SEC</p> </div>`;

    elements.map(el => el.innerHTML = content)

    if (distance === 0) {
        clearInterval(x);
        // document.getElementsByClassName(".timers").innerHTML = "EXPIRED";
    }
}

timer()
let x = setInterval(function () {
    timer()
}, 1000);

// HEADER TIMER END //


//  SLICK SLIDER START //

$(".slider").slick({
    slidesToShow: 1,
    arrows:false,
    fullscreen: true,
});

//  SLICK SLIDER END //


// COUNTER SECTION START //
$('.counter-section').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: false,
    prevArrow: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 998,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


//  Counter start //
let num = document.querySelectorAll(".counterup")
let newHeading = Array.from(num)
newHeading.map((item) => {
    let count = 0
    function counterup() {
        count++
        item.innerHTML = count
        if (count == item.dataset.number) {
            clearInterval(stop)
        }
    }
    let stop = setInterval(function() {
        counterup()
    }, 1);
})
// COUNTER SECTION START //


//  BRAND SECTION START //
$('.brand-section').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: false,
    prevArrow: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        },
        {
            breakpoint: 998,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        }
    ]
});
//  BRAND SECTION START //



//  REVIEWS SECTION START //
$('.reviews-box').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: false,
    prevArrow: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 998,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

//  REVIEWS SECTION END //




const input = document.querySelector("#phone");

window.intlTelInput(input, {
    initialCountry: "ru",
    preferredCountries: ["ru", "us", "gb", "de"],
    utilsScript:"https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.2/build/js/utils.js"
});





