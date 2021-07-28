window.addEventListener('load', () => {
    const nav = document.getElementById('nav');
    const navClose = document.getElementById('navClose');
    const burger = document.getElementById('burger');
    const body = document.body;

    burger.addEventListener('click', () => {
        body.style.overflowY = 'hidden';
        nav.classList.add('navVisible');
    });

    navClose.addEventListener('click', () => {
        body.style.overflowY = 'scroll';
        nav.classList.remove('navVisible');
    });
});