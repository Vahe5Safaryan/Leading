"use strict";

// HEADER TIMER START //
let countDownDate = new Date("May19, 2023 20:20:00").getTime();
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
    arrows: false,
    fullscreen: true,
});
//  SLICK SLIDER END //


// FAQ SHOW ALL START //
let skillsBtns = document.getElementsByClassName("expend-button");
let skillsSection = document.querySelectorAll(".skills-section");
for (let i = 0; i < skillsBtns.length; i++) {
    skillsBtns[i].addEventListener('click', function () {
        skillsSection[i].classList.toggle('expended')
    })
}
// FAQ SHOW ALL END //


//  PACIFIC TIME START //
const boxes = document.getElementsByClassName('pacific-time-box');
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function () {
        boxes[i].classList.toggle('active')
    })
}
//  PACIFIC TIME END //


//  ACCARDION START //
const faqAccordion = document.querySelectorAll('.faq-section-accordion-box')

for (let i = 0; i < faqAccordion.length; i++) {
    faqAccordion[i].addEventListener("click", function (event) {
        event.currentTarget.classList.toggle('active')
    })
}
//  ACCARDION END //


//  POPUP START //
const openModal = document.querySelectorAll('.openModal');
const popupSection = document.querySelector('.popup-section');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close')
const popupJoin = document.querySelector('.popup-join')
const popupForm = document.querySelector('.popup-form')
const popupDone = document.querySelector('.popup-done')
const doneBtn = document.querySelector('.done-btn')

for (let i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener('click', function (event) {
        popupSection.classList.toggle('d-block');
        overlay.classList.toggle('d-block');
        event.preventDefault();
    });
}
overlay.addEventListener('click', function () {
    popupSection.classList.toggle('d-block');
    overlay.classList.toggle('d-block');
});


if (closeButton) {
    closeButton.addEventListener('click', function (e) {
        e.preventDefault()
        popupSection.classList.toggle('d-block');
        overlay.classList.toggle('d-block');
    })
}

if (popupJoin) {
    popupJoin.addEventListener('click', function (e) {
        e.preventDefault()
        popupForm.classList.toggle('d-none');
        popupDone.classList.toggle('d-none');
    })
}

if (doneBtn) {
    doneBtn.addEventListener('click', function (e) {
        e.preventDefault()
        popupSection.classList.toggle('d-block');
        overlay.classList.toggle('d-block');
    });
}
//  POPUP END //
const navLinksScroll = document.querySelector('.nav-links-scroll');
function handleNavScroll() {
    if (navLinksScroll) {
        if (window.scrollY >= 200) {
            navLinksScroll.style.display = 'flex';
            navLinksScroll.style.position = 'fixed';
            navLinksScroll.style.top = '5px';
            navLinksScroll.style.left = '50%';
            navLinksScroll.style.transform = 'translate(-50%, -10%)';
            navLinksScroll.style.zIndex = '3';
            navLinksScroll.style.background = 'rgba(255, 255, 255, 0.8)';
            navLinksScroll.style.backdropFilter = 'blur(13.5914px)';
            navLinksScroll.style.webkitBackdropFilter = 'blur(13.5914px)';
            navLinksScroll.style.width = '100%';

            const mediaQuery = window.matchMedia('(max-width: 1024px)');
            if (mediaQuery.matches) {
                navLinksScroll.style.padding = '10px 10px';
            } else {
                navLinksScroll.style.padding = '20px 10px';
            }
        }
        else {
            navLinksScroll.style.display = '';
            navLinksScroll.style.position = '';
            navLinksScroll.style.top = '';
            navLinksScroll.style.left = '';
            navLinksScroll.style.transform = '';
            navLinksScroll.style.zIndex = '';
            navLinksScroll.style.background = '';
            navLinksScroll.style.backdropFilter = '';
            navLinksScroll.style.webkitBackdropFilter = '';
            navLinksScroll.style.width = '';
            navLinksScroll.style.padding = '';
        }
    }
}
window.addEventListener('scroll', handleNavScroll);
// Menu in scroll START //


//  Login icon position START //
window.addEventListener('scroll', function() {
    let loginScroll = document.querySelector('.login_scroll');
    if (loginScroll) {
        if (window.scrollY >= 200) {
            loginScroll.style.top = '38px';
        } else {
            loginScroll.style.display = '';
        }
    }
});
//  Login icon position START //


//  Header other menu scroll START //
window.addEventListener('scroll', function() {
    let headerSection = document.querySelector('.header-section');
    if (headerSection) {
        if (window.scrollY >= 200) {
            headerSection.style.display = 'block';
        } else {
            headerSection.style.display = '';
        }
    }
});
//  Header other menu scroll END //


//  Header section ships START //
const headerSectionBtn = document.querySelector('.header-section-btn');
const darkMode = document.querySelector('.dark-mode');

if (headerSectionBtn) {
    headerSectionBtn.addEventListener("click", function (e) {
        e.preventDefault()
        const headerShips = document.querySelector('.header-section-ships')
        if (headerShips) {
            if (headerShips.style.display !== 'flex') {
                headerShips.style.display = 'flex'
            } else {
                headerShips.style.display = 'none'
            }
        }

        if (darkMode) {
            if (darkMode.style.display !== 'block') {
                darkMode.style.display = 'block'
            } else {
                darkMode.style.display = 'none'
            }
        }

        darkMode.addEventListener("click", function () {
            headerShips.style.display = 'none'
            darkMode.style.display = 'none'

        })
    })
}
//  Header section ships END //


//  Menu in right START //
const mediaRightMenu = document.querySelector('.media-right-menu')
const menuMobile = document.querySelectorAll('.menu-mobile ')
const primaryIcon = document.querySelectorAll('.primary-icon')
const headerSectionClosed = document.querySelector('.header-section-closed')
const blur = document.querySelector('.blur')

for (let i = 0; i < primaryIcon.length; i++) {
    primaryIcon[i].addEventListener('click', function () {
        mediaRightMenu.style.right = "0px";
    });
}

for (let i = 0; i < menuMobile.length; i++) {
    menuMobile[i].addEventListener('click', function () {
        mediaRightMenu.style.right = "0px";
        blur.classList.toggle('d-block');
    });
}

headerSectionClosed.addEventListener('click', function () {
    if (headerSectionClosed) {
        mediaRightMenu.style.right = "-400px";
        blur.classList.toggle('d-none');
    }
})

blur.addEventListener('click', function () {
    blur.classList.toggle('d-block');
    mediaRightMenu.style.right = "-400px";
});
//  Menu in right END //



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
            breakpoint: 1025,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 998,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false
            }
        },
        {
            breakpoint: 578,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 414,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]
});


//  BRAND SECTION START //
$('.brand-section').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: false,
    prevArrow: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        },
        {
            breakpoint: 998,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 415,
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
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                variableWidth: true,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 998,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1.8,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});
//  REVIEWS SECTION END //


//  TEACHERS SECTION START //
$('.teachers-box-section').slick({
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
                slidesToScroll: 1,
                infinite: true,

            }
        },
        {
            breakpoint: 998,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
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
//  TEACHERS SECTION END //


let inputs = document.getElementsByClassName("phone");
for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    window.intlTelInput(input, {
        initialCountry: "ru",
        preferredCountries: ["ru", "us", "gb", "de"],
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.2/build/js/utils.js"
    });
}







