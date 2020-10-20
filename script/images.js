let amountImg = 13;

window.addEventListener('load', () => {
    let imgContainer = document.getElementById('imgContainer');

    for (let i = amountImg; i >= 1; i--) {
        let img = document.createElement('img');
        img.setAttribute('src', './media/photos/' + i + '.jpg');

        imgContainer.appendChild(img);
    }
});