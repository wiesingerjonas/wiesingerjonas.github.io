const amountImages = 31;

window.addEventListener('load', () => {
    const imgContainer = document.getElementById('imgContainer');

    for (let i = amountImages; i >= 1; i--) {
        const img = document.createElement('img');
        img.setAttribute('src', `../media/photos/small/${i}.jpg`);

        img.addEventListener('click', () => {
           console.log(i)
        });

        imgContainer.appendChild(img);
    }
});
