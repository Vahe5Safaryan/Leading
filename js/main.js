"use strict";

// HEADER TIMER START //

let countDownDate = new Date("April17, 2023 18:00:00").getTime();
function timer() {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
        `<div>${days} <p>days</p> </div> <span class="separator"><span></span><span></span></span>` +
        `<div>${hours} <p>HR</p> </div> <span class="separator"><span></span><span></span></span>` +
        `<div>${minutes} <p>MIN</p> </div> <span class="separator"><span></span><span></span></span>` +
        `<div>${seconds} <p>SEC</p> </div>` ;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}
timer()
let x = setInterval(function() {
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
