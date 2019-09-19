    $( document ).ready(function() {
    console.log( "ready!" );

$(".button1").click(function() {
    $('html,body').animate({
        scrollTop: $("#section1").offset().top},
        'slow');
});


$(".button2").click(function() {
    $('html,body').animate({
        scrollTop: $("#section2").offset().top},
        'slow');
});

$(".button3").click(function() {
    $('html,body').animate({
        scrollTop: $("#section3").offset().top},
        'slow');
});

$(".button4").click(function() {
    $('html,body').animate({
        scrollTop: $("#section4").offset().top},
        'slow');
});


});
    