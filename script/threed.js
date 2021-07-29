window.addEventListener('load', () => {
    let buttonSoft = document.getElementById('buttonSoft');
    let softVideo = document.getElementById('softVideo');

    softVideo.addEventListener('click', () => {
        softVideo.muted = !softVideo.muted;

        if (buttonSoft.classList.length === 0){
            buttonSoft.classList.add("muted");
        } else {
            buttonSoft.className = "";
        }
    });
});
