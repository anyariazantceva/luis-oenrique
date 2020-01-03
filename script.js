
window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
});


window.scrollBy({
    top: 0,
    left: 0,
    behavior: 'smooth'
});

let scrollBtn = document.getElementById("scroll-top");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(document).ready(function(){
    $('.page__slider').slick({
        dots: true
    });
});