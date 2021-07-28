const amountImages = 43;
let scrollDistance;

window.addEventListener('load', () => {
    const imgContainer = document.getElementById('imgContainer');

    let fullScreenImgDisplay = document.getElementById('fullScreenImgDisplay')

    const fullScreenContainer = document.getElementById('fullScreenImgDiplayContainer');
    const header = document.getElementById('header');
    const nav = document.getElementById('nav');
    const footer = document.getElementById('footer');
    const fullScreenImgClose = document.getElementById('fullScreenImgClose');
    const arrowLeft = document.getElementById('arrowLeft');
    const arrowRight = document.getElementById('arrowRight');

    for (let i = amountImages; i >= 1; i--) {
        const img = document.createElement('img');
        img.setAttribute('src', `../media/photos/small/${i}.jpg`);

        if( !navigator.userAgent.match(/Android/i)
            && !navigator.userAgent.match(/webOS/i)
            && !navigator.userAgent.match(/iPhone/i)
            && !navigator.userAgent.match(/iPad/i)
            && !navigator.userAgent.match(/iPod/i)
            && !navigator.userAgent.match(/BlackBerry/i)
            && !navigator.userAgent.match(/Windows Phone/i)){

            img.addEventListener('click', () => {
                scrollDistance = window.scrollY
                fullScreenContainer.style.display = 'flex';
                imgContainer.style.display = "none";
                header.style.display = 'none';
                nav.style.display = 'none';
                footer.style.display = 'none';
                fullScreenImgClose.style.display = 'block';
                arrowLeft.style.display = 'block';
                arrowRight.style.display = 'block';

                document.getElementById('fullScreenImgDisplay').setAttribute('src', `../media/photos/big/${i}.jpg`);
            });
        }

        imgContainer.appendChild(img);
    }

    fullScreenImgClose.addEventListener('click', () => {
        fullScreenContainer.style.display = 'none';
        imgContainer.style.display = "block";
        header.style.display = 'block';
        nav.style.display = 'block';
        footer.style.display = 'block';
        fullScreenImgClose.style.display = 'none';
        arrowLeft.style.display = 'none';
        arrowRight.style.display = 'none';

        window.scrollTo(0, scrollDistance)
    });
    arrowRight.addEventListener('click', () => {
        let currentSrc = fullScreenImgDisplay.src;
        let length = currentSrc.split('/').length;

        let currentSrcNumber = parseInt(currentSrc.split('/')[length-1].split('.')[0]);
        let nextNumber = currentSrcNumber - 1;

        if(nextNumber === 0) {
            nextNumber = amountImages;
        }
        fullScreenImgDisplay.setAttribute('src', `../media/photos/small/${nextNumber}.jpg`);
    });

    arrowLeft.addEventListener('click', () => {
        let currentSrc = fullScreenImgDisplay.src;
        let length = currentSrc.split('/').length;

        let currentSrcNumber = parseInt(currentSrc.split('/')[length-1].split('.')[0]);
        let nextNumber = currentSrcNumber + 1;

        if(nextNumber === amountImages+1) {
            nextNumber = 1;
        }
        fullScreenImgDisplay.setAttribute('src', `../media/photos/small/${nextNumber}.jpg`);
    });
});
