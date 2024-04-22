function removeShorts() {
    var shortsRemove = !!(localStorage.getItem("shortsRemove"));
    if(shortsRemove == true){
        var shorts = document.querySelectorAll('ytd-rich-section-renderer');
    
        shorts.forEach(short => {
            short.remove();
        });
    }
    setInterval(() => {
        removeShorts();
    }, 300);
}

function removeShortsButton() {
    var shortsRemove = !!(localStorage.getItem("shortsRemove"));
    if(shortsRemove == true){
        var shortsbtns = document.querySelectorAll('ytd-mini-guide-entry-renderer');
        var shortsbtns2 = document.querySelectorAll('ytd-guide-entry-renderer');
    
        if(shortsbtns[1]){
            shortsbtns[1].remove();
        }
    
        if(shortsbtns2[1]){
            shortsbtns2[1].remove();
        }
        return 0;
    }
    setInterval(() => {
        removeShortsButton();
    }, 300);
}

window.onload = removeShorts();
window.onload = removeShortsButton();
window.onload = createSettings();

function createSettings() {
    var settingsOver = document.createElement("div");
    settingsOver.classList.add("settings-over");
    
    var body = document.querySelector("ytd-app");
    
    body.prepend(settingsOver);

    var settings = document.createElement("div");
    settings.classList.add("settings");
    
    settingsOver.append(settings);

    var settingsHeader = document.createElement("div");
    settingsHeader.classList.add("settings-header");
    settingsHeader.innerHTML = "Remover";

    settings.append(settingsHeader);



    var settingsForm = document.createElement("form");
    settingsForm.classList.add("settings-shorts-form");
    settings.append(settingsForm);

    var settingsLabel = document.createElement("label");
    settingsLabel.classList.add("settings-shorts-header");
    settingsLabel.innerHTML = !!(localStorage.getItem("shortsRemove"));
    settingsLabel.setAttribute("for", "shorts");

    settingsForm.append(settingsLabel);
    var settingsInput = document.createElement("input");
    settingsInput.classList.add("settings-shorts-input");
    settingsInput.type = "checkbox";
    settingsInput.name = "shorts";

    settingsForm.append(settingsInput);

    settingsInput.checked = !!(localStorage.getItem("shortsRemove"));

    settingsInput.addEventListener('click', () => {
        if(settingsInput.checked == true){
            localStorage.setItem("shortsRemove", true);
        }
        else{
            localStorage.setItem("shortsRemove", false);
        }
    });
}

