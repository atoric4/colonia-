window.addEventListener('scroll', function() {
    const header = document.querySelector('.header__dynamic-part');
    if (window.pageYOffset > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
document.documentElement.style.setProperty('--scrollbar-width', `${scrollBarWidth}px`);