/* 1. Scroll Button, code copied from W3Schools:
https://www.w3schools.com/howto/howto_js_scroll_to_top.asp */

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 40) {
        document.getElementById("myBtn").style.display = "block";
        document.getElementById("myBtn").style.visibility = "visible";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/* 2 Current year */
document.getElementById("copyright").innerHTML = currentTime();

function currentTime() {
    var d = new Date();
    return `<span>&copy; 2017-${d.getFullYear()} Sergey Karavaev</span><span class="divider">&nbsp;|&nbsp;</span><span>Web template</span>`;
}