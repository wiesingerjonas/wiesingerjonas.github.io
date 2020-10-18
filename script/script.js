window.addEventListener('load', () => {
    let navClose = document.getElementById('navClose');

    let navLinks = document.getElementsByClassName('navLinks');

    let subDiv = document.getElementsByClassName('subDiv');

    let currentSite = home;

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', () => {
            currentSite.style.display = 'none';
            subDiv[i].style.display = 'block';

            currentSite = subDiv[i];

            navClose.click();
        });
    }
});