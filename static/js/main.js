const navMobile = document.querySelector('.nav-mobile__links')
const navBtn = document.querySelector('.hamburger')
const footerYear = document.querySelector('.footer__year')
const navigationMobile = document.querySelector('.nav-mobile')
const header = document.querySelector('.header')


const handleNav = () => {
    navBtn.classList.toggle('is-active')
    navMobile.classList.toggle('nav-mobile__links--active')
}

navBtn.addEventListener('click', handleNav)

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();

const addMarginToHeader = () => {
    const navHeight = navigationMobile.clientHeight;
    header.style.marginTop = navHeight + 'px';
}

addMarginToHeader();