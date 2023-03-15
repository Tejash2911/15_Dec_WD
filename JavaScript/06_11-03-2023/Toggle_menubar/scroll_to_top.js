const toUpButton = document.querySelector('.toUp');

toUpButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function scrollToUP() {
    let scrolled = window.scrollY;

    if (scrolled > 0) {
        toUpButton.classList.add('scrolled')
    }
    else {
        toUpButton.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', scrollToUP);