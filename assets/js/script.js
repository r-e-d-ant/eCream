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
const themeTogglers = document.querySelector('.theme-togglers')
const lightIcon = document.querySelector('.bxs-sun')
const darkIcon = document.querySelector('.bxs-moon')

var darkmode = localStorage.getItem('darkmode');

// enable dark mode function
const enableDarkMode = () => {
    // add class dark mode to the body
    document.body.classList.add('darkmode')
    localStorage.setItem("darkmode", "enabled")
}

if(darkmode === "enabled") {
    enableDarkMode()
    lightIcon.style.display = "block"
    darkIcon.style.display = "none"
}

// disable dark mode function
const disableDarkMode = () => {
    // remove class dark mode from the body
    document.body.classList.remove('darkmode')
    localStorage.setItem("darkmode", null)
}

// active/deactive dark mode
themeTogglers.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode')
    if(darkmode !== "enabled"){
        enableDarkMode()
        lightIcon.style.display = "block"
        darkIcon.style.display = "none"
    }else {
        disableDarkMode()
        lightIcon.style.display = "none"
        darkIcon.style.display = "block"
    }
})