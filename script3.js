$("html").animate({ "opacity": "1" }, 400);

function blink() {
    $('.rec').fadeOut(500);
    $('.rec').fadeIn(500);
};
setInterval(blink, 2000);

$('#camonicon').click(function () {
    $('#camonicon').hide();
    $('#camofficon').fadeIn(150);
    $('#on').fadeOut(150);
});

$('#camofficon').click(function () {
    $('#camofficon').hide();
    $('#on').fadeIn(150);
    $('#camonicon').fadeIn(150);
});

$('#miconicon').click(function () {
    $('#miconicon').hide();
    $('#micofficon').fadeIn(150);
    $('#micoff').fadeIn(150);
});

$('#micofficon').click(function () {
    $('#micofficon').hide();
    $('#micoff').fadeOut(150);
    $('#miconicon').fadeIn(150);
});