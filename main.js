var status = 0;
function hide() {
    if (status == 0) {
        document.getElementById("main").style.opacity = 0;
        document.getElementById("other").style.opacity = 1;
        status = 1;
    } else {
        document.getElementById("main").style.opacity = 0.75;
        document.getElementById("other").style.opacity = 0;
        status = 0;
    }
}