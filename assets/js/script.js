
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