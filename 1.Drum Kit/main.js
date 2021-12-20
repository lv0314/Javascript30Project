function addSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!audio){return;}

    audio.currentTime = 0;
    audio.play()

    addEffect(e);
}

function addEffect(e){
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    key.setAttribute("id", "playing")
    const fadeEffect = setTimeout(function(){
        key.removeAttribute("id")
    }, 100)
}

window.addEventListener('keydown', addSound)

