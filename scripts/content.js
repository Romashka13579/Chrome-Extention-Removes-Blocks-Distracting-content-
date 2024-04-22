function removeShorts() {
    var shorts = document.querySelectorAll('ytd-rich-section-renderer');
    
    shorts.forEach(short => {
        short.remove();
    });
    
    setInterval(() => {
        removeShorts();
    }, 300);
}

function removeShortsButton() {
    var shortsbtns = document.querySelectorAll('ytd-mini-guide-entry-renderer');

    shortsbtns[1].remove();
}

window.onload = removeShorts();
window.onload = removeShortsButton();