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



function removeShorts() {
    if(videosRemove == true){
        var videos = document.querySelectorAll('ytd-two-column-browse-results-renderer');
        if(videos){
            videos.forEach(video => {
                video.remove();
            });
        }
    }

    if(shortsRemove == true){
        var shorts = document.querySelectorAll('ytd-rich-section-renderer');
    
        shorts.forEach(short => {
            short.remove();
        });

        var shortsbtns = document.querySelectorAll('ytd-mini-guide-entry-renderer');
        var shortsbtns2 = document.querySelectorAll('ytd-guide-entry-renderer');

        btnsCheck(shortsbtns);
        btnsCheck(shortsbtns2);

        console.log("checkURL");
    }
}

function btnsCheck(btns) {
    btns.forEach(btn => {
        var a = btn.querySelector("a");
        if(a.title == "YouTube Shorts"){
            btn.remove();
            return;
        }
    });
}

function checkURL() {
    if(window.location.href == "https://www.youtube.com/"){
        setTimeout(() => {
            removeShorts();
        }, 1000);
    }
}


window.onload = removeShorts();
window.onload = createSettings();
addEventListener('scroll', () => {
    removeShorts();
});
addEventListener('keydown', (e) => {
    if(e.key == "Alt"){
        if(localStorage.getItem("appActivate") == null){
            localStorage.setItem("appActivate", false);
        }
        if(localStorage.getItem("appActivate") == "true"){
            var settings = document.querySelector('.settings-over');
            settings.style.display = "flex";
            localStorage.setItem("appActivate", false);
        }
        else{
            var settings = document.querySelector('.settings-over');
            settings.style.display = "none";
            localStorage.setItem("appActivate", true);
        }
    }
});


function createSettings() {
    var settingsOver = document.createElement("div");
    settingsOver.classList.add("settings-over");
    
    var body = document.querySelector("ytd-app");
    
    body.prepend(settingsOver);
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

    var settings = document.createElement("div");
    settings.classList.add("settings");
    
    settingsOver.append(settings);

    var settingsHeader = document.createElement("div");
    settingsHeader.classList.add("settings-header");
    settingsHeader.innerHTML = "Remover";

    settings.append(settingsHeader);

    var settingsMain = document.createElement("div");
    settingsMain.classList.add("settings-main");

    settings.append(settingsMain);



    var settingsForm = document.createElement("form");
    settingsForm.classList.add("settings-shorts-form");
    settingsMain.append(settingsForm);

    var settingsLabel = document.createElement("label");
    settingsLabel.classList.add("settings-shorts-header");
    settingsLabel.setAttribute("for", "shorts");

    settingsForm.append(settingsLabel);
    var settingsInput = document.createElement("input");
    settingsInput.classList.add("settings-shorts-input");
    settingsInput.type = "checkbox";
    settingsInput.name = "shorts";

    settingsForm.append(settingsInput);

    settingsInput.checked = shortsRemove;

    settingsInput.addEventListener('click', () => {
        if(settingsInput.checked == true){
            localStorage.setItem("shortsRemove", true);
        }
        else{
            localStorage.setItem("shortsRemove", false);
        }
    });

    var settingsFormClone = settingsForm.cloneNode(true);
    settingsMain.append(settingsFormClone);

    var settingsLabelClone = settingsFormClone.querySelector('.settings-shorts-header');
    settingsLabelClone.setAttribute("for", "videos");

    var settingsInputClone = settingsFormClone.querySelector('.settings-shorts-input');
    settingsInputClone.name = "videos";


    settingsInputClone.checked = videosRemove;

    settingsInputClone.addEventListener('click', () => {
        if(settingsInputClone.checked == true){
            localStorage.setItem("videosRemove", true);
        }
        else{
            localStorage.setItem("videosRemove", false);
        }
    });
}