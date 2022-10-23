function blink() {
    $('.rec').fadeOut(500);
    $('.rec').fadeIn(500);
};
setInterval(blink, 2000);


$('.follow').click(function () {
    $('.follow').fadeOut(150);
    $('.following').fadeIn(150);
});

$('.following').click(function () {
    $('.follow').fadeIn(150);
    $('.following').fadeOut(150);
});