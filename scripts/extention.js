if(localStorage.getItem("shortsRemove") == "true"){
    var shortsRemove = true;
}
else{
    var shortsRemove = false;
}

if(localStorage.getItem("videosRemove") == "true"){
    var videosRemove = true;
}
else{
    var videosRemove = false;
}

if(localStorage.getItem("appActivate") == null){
    localStorage.setItem("appActivate", false);
}
if(localStorage.getItem("appActivate") == "false"){
    var settings = document.querySelector('.settings-over');
    settings.style.display = "flex";
}
else{
    var settings = document.querySelector('.settings-over');
    settings.style.display = "none";
}

var settingsInput = document.querySelector('.settings-shorts-input');

settingsInput.checked = shortsRemove;

settingsInput.addEventListener('click', () => {
    if(settingsInput.checked == true){
        localStorage.setItem("shortsRemove", true);
        console.log("shortsRemoveTrue");
    }
    else{
        localStorage.setItem("shortsRemove", false);
        console.log("shortsRemoveFlase");
    }
});

var settingsInputVideo = document.querySelector('.settings-videos-input');
console.log(settingsInputVideo);

settingsInputVideo.checked = videosRemove;

settingsInputVideo.addEventListener('click', () => {
    if(settingsInputVideo.checked == true){
        localStorage.setItem("videosRemove", true);
        console.log("videosRemoveTrue");
    }
    else{
        localStorage.setItem("videosRemove", false);
        console.log("videosRemoveFlase");
    }
});

console.log("b");