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