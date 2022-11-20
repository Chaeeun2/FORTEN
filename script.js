//모달
$("#plusnav").click(function () {
    if ($('#modal').is(":hidden")) {
        $('#modal').fadeIn('fast');
        $("#plusicon").attr("src", "resource/home/plusicon2.png");
    }
    else {
        $('#modal').fadeOut('fast');
        $("#plusicon").attr("src", "resource/home/plusicon1.png");
    }
});

$(".modalbg").click(function () {
    $('#modal').fadeOut('fast');
    $("#plusicon").attr("src", "resource/home/plusicon1.png");
});

$("html").animate({ "opacity": "1" }, 400);



function withme() {
    if ($('#withme').is(":hidden")) {
        $('#withme').fadeIn('fast');
    }
    else if ($('#withme').is(":visible")) {
        $('#withme').fadeOut('fast');
    }
};


function group() {
    if ($('#group').is(":visible")) {
        $('#group').fadeOut('fast');
    }
    else {
        $('#group').fadeIn('fast');
    }
};


// 스터디윗미
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

let chat = document.querySelector('#chat');
chat.scrollTop = chat.scrollHeight;


// 그룹스터디
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