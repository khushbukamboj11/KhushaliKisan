$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

function clickme(smallImg) {
    var fullImg = document.getElementById("imagebox");
    fullImg.src = smallImg.src;
}



//Code For Effects 
AOS.init({
    offset: 120,
    delay: 0,
    duration: 1000,
    easing: 'ease',
});

