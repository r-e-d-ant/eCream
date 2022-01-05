
/* ----- BASE ------ */
'use strict'

// get required selectors to maniplute menu toggle
const navbar = document.querySelector('.navbar');
const menuTogglersContainer = document.querySelector('.menu-togglers');
const bxMenu = document.querySelector('.bx-menu');
const bxClose = document.querySelector('.bx-x');

/* -- show/hide menu -- */
menuTogglersContainer.addEventListener('click', () => {
    // if navbar tag have show-nav in as class
    if(navbar.classList.contains('show-nav')) {
        navbar.classList.remove('show-nav');
        bxMenu.classList.remove('hide')
        bxClose.classList.remove('show')
    } // if navbar tag have not show-nav in as class
    else {
        navbar.classList.toggle('show-nav');
        bxMenu.classList.toggle('hide')
        bxClose.classList.toggle('show')
    }
});

/* ================================================ */

/* -------- theme changing -------- */
const themeTogglers = document.querySelector('.theme-togglers');
const lightIcon = document.querySelector('.bxs-sun');
const darkIcon = document.querySelector('.bxs-moon');

var lightmode = localStorage.getItem('lightmode');

// enable dark mode function
const enableLightMode = () => {
    // add class dark mode to the body
    document.body.classList.add('lightmode')
    localStorage.setItem("lightmode", "enabled")
     // change theme toggle styles
    lightIcon.style.display = "none"
    darkIcon.style.display = "block"
};

if(lightmode && lightmode === "enabled") {
    enableLightMode()
};

// disable dark mode function
const disableLightMode = () => {
    // remove class dark mode from the body
    document.body.classList.remove('lightmode')
    localStorage.setItem("lightmode", null)
    // change theme toggle styles
    lightIcon.style.display = "block"
    darkIcon.style.display = "none"
};

// active/deactive dark mode
themeTogglers.addEventListener('click', () => {
    lightmode = localStorage.getItem('lightmode')
    if(!lightmode || lightmode !== "enabled"){
        enableLightMode()
    }else {
        disableLightMode()
    }
});

// auto type on hero page
// hook title
let typedT = new Typed(".auto-input-t", {
    strings: ["Real ice cream for real ice cream lovers"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: false,
    cursorChar: ''
});

// hook subtitle
let typed = new Typed(".auto-input", {
    strings: ["Sweet ice cream for pleasure seekers."],
    typeSpeed: 100,
    backSpeed: 100,
    startDelay: 6000,
    loop: false,
    cursorChar: ''
});

/* -- hide show hero buttons -- */
// delay before showing them
const heroButtonsContainer = document.querySelector('.hero-btns-container');

var delayTime = 11000;

heroButtonsContainer.style.transition = "opacity 1000ms";

setTimeout(() => {
    heroButtonsContainer.style.opacity = 1
}, delayTime);


// --- prevent form submission on contact section ---
const sendMsgButton = document.querySelector('.send-msg-btn')
sendMsgButton.addEventListener('click', (e) => {
    e.preventDefault()
})