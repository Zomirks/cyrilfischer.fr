$(document).ready(function() {

    var menuDisplay = false;
    $(".menuMobile").hide();

    $(".hamburger").on('click', function() {
        if (menuDisplay === false) {
            $(".menuMobile").show();
            cross();
            menuDisplay = true;
        } else {
            $(".menuMobile").hide();
            hamburger();
            menuDisplay = false;
        }
    });
});


function cross() {
    $(".line-2").fadeOut("fast");
    $(".line-1").addClass("cross-1");
    $(".line-3").addClass("cross-3");
}

function hamburger() {
    $(".line-2").fadeIn();
    $(".line-1").removeClass("cross-1");
    $(".line-3").removeClass("cross-3");
}
