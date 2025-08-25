const toggleButton=document.getElementById("toggleButton");
const icon=document.getElementById("icon");
const audio=document.getElementById("myaudio");

toggleButton.addEventListener('click',()=>{
    if(audio.paused){
        audio.play();
        icon.classList.remove("bi-play-fill");
        icon.classList.add("bi-pause-fill");
        icon.innerHTML='<path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>'

    }
    else{
        audio.pause();
        icon.classList.remove("bi-pause-fill");
        icon.classList.add("bi-play-fill");
        icon.innerHTML='<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>'
    }
})
