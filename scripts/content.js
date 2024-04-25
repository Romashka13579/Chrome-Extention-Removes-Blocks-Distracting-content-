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
            settings.style.display = "block";
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
    const iframe = document.createElement('iframe');
    iframe.style.zIndex = 1000;
    iframe.style.translateZ = "1000px";
    iframe.style.position = "fixed";
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    iframe.src = chrome.runtime.getURL('extension.html');
    document.body.prepend(iframe);
    
    console.log("a");
}