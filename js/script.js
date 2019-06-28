document.getElementById("copyright").innerHTML = currentTime();

function currentTime() {
    var d = new Date();
    return `<i class="far fa-copyright"></i> ${d.getFullYear()} Sergey Karavaev`;
}