window.addEventListener('load', () => {
    const navLinks = document.getElementsByClassName('navLink');
    const nav = document.getElementById('nav');
    const navClose = document.getElementById('navClose');
    const burger = document.getElementById('burger');
    const body = document.body;

    for (const link of navLinks) {
        link.addEventListener('click', () => {
            window.location.href = `${window.location.protocol}//${window.location.host}/${link.dataset.link}`;
        });
    }

    burger.addEventListener('click', () => {
        body.style.overflowY = 'hidden';
        nav.classList.add('navVisible');
    });

    navClose.addEventListener('click', () => {
        body.style.overflowY = 'scroll';
        nav.classList.remove('navVisible');
    });
});