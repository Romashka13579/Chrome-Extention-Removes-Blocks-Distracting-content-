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
    if(videosRemove == true){
        var videos = document.querySelectorAll('.style-scope.ytd-rich-grid-renderer');
        arrayRemover(videos);
    }
}

function arrayRemover(array){
    if(array[0]){
        array.forEach(element => {
            element.remove();
        });
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

function removeShortsDelayed() {
    setTimeout(() => {
        removeShorts();
    }, 400);
}

window.onload = removeShorts();
window.onload = removeShortsDelayed();
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
    
    settingsOver.innerHTML += `
        <div class="settings">
            <div class="settings-header">Remover</div>
            <div class="settings-main">
                <div class="settings-shorts-form">
                    <label for="shorts"><i class="fa-brands fa-youtube"></i></label>
                    <input name="shorts" type="checkbox"  class="settings-shorts-input">
                </div>
                <div class="settings-shorts-form">
                    <label for="videos"><i class="fa-solid fa-video"></i></label>
                    <input name="videos" type="checkbox" class="settings-videos-input">
                </div>
            </div>
        </div>
    `;

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

    var shortsInput = document.querySelector('.settings-shorts-input');

    shortsInput.checked = shortsRemove;

    shortsInput.addEventListener('click', () => {
        if(shortsInput.checked == true){
            localStorage.setItem("shortsRemove", true);
        }
        else{
            localStorage.setItem("shortsRemove", false);
        }
    });

    var videosInput = document.querySelector('.settings-videos-input');

    videosInput.checked = videosRemove;

    videosInput.addEventListener('click', () => {
        if(videosInput.checked == true){
            localStorage.setItem("videosRemove", true);
        }
        else{
            localStorage.setItem("videosRemove", false);
        }
    });
}