window.addEventListener('scroll', function() {
    const header = document.querySelector('.header__dynamic-part');
    if (window.pageYOffset > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});