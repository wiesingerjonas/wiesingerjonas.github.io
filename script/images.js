const imgLinks = [
    "https://www.instagram.com/jowies_photography/?hl=de",
    "https://www.instagram.com/p/BtYIfVmHXby/?utm_source=ig_web_copy_link",
    "https://www.instagram.com/p/BqPoxkaBkCz/?utm_source=ig_web_copy_link",
    "https://www.instagram.com/jowies_photography/?hl=de",
    "https://www.instagram.com/p/BqC9dhhhpTx/?utm_source=ig_web_button_share_sheet",
    "https://www.instagram.com/p/ByrnGmACMcC/?utm_source=ig_web_copy_link",
    "https://www.instagram.com/p/B0qfaIvDpKA/?utm_source=ig_web_copy_link",
    "https://www.instagram.com/p/BqxedEaBuUg/?utm_source=ig_web_button_share_sheet",
    "https://bach-chor.com/medien/#post-216",
    "https://bach-chor.com/medien/#post-216",
    "https://bach-chor.com/medien/#post-216",
    "https://www.instagram.com/jowies_photography/?hl=de",
    "https://www.instagram.com/jowies_photography/?hl=de",
    "https://www.instagram.com/jowies_photography/?hl=de",
    "a",
    "a"];

window.addEventListener('load', () => {
    const imgContainer = document.getElementById('imgContainer');

    for (let i = imgLinks.length; i >= 1; i--) {
        const img = document.createElement('img');
        img.setAttribute('src', `../media/photos/small/${i}.jpg`);

        imgContainer.appendChild(img);
    }
});
