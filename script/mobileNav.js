
window.addEventListener('load', () => {
    let nav = document.getElementById('nav');
    let navClose = document.getElementById('navClose');
    let burger = document.getElementById('burger');
    let body = document.body;

    burger.addEventListener('click', () => {
        nav.setAttribute('id', 'navVisible');
        body.style.overflow = 'hidden';
    });

    navClose.addEventListener('click', () => {
        body.style.overflow = 'inherit';
        nav.removeAttribute('id');
        nav.setAttribute('id', 'nav');
    });

});
