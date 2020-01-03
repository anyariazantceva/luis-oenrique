// Scroll to specific values
// scrollTo is the same
window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
});

// Scroll certain amounts from current position
window.scrollBy({
    top: 0, // could be negative value
    left: 0,
    behavior: 'smooth'
});

let scrollBtn = document.getElementById("scroll-top");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


$(document).ready(function(){
    $('.page__slider').slick({
        dots: true
    });
});