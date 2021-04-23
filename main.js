var status = 0;
function hide() {
    if (status == 0) {
        document.getElementById("main").style.display = "none";
        document.getElementById("other").style.display = 'block';
        status = 1;
    } else {
        document.getElementById("other").style.display = "none";
        document.getElementById("main").style.display = "block";
        status = 0;
    }
}