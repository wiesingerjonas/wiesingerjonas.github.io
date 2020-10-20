window.addEventListener('load', () => {

    let navClose = document.getElementById('navClose');

    let navLinks = document.getElementsByClassName('navLinks');

    let subDiv = document.getElementsByClassName('subDiv');
    let filmDetail = document.getElementById('filmDetail');

    let currentSite = home;

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', () => {

            filmDetail.style.display = 'none';
            currentSite.style.display = 'none';
            subDiv[i].style.display = 'block';

            currentSite = subDiv[i];

            navClose.click();
        });
    }

});