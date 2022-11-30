//네비게이션
$("#homenav").click(function () {
    $("#homeicon").attr("src", "resource/home/homeicon2.png");
    $("#storeicon").attr("src", "resource/home/storeicon1.png");
    $("#followicon").attr("src", "resource/home/followicon1.png");
    $("#myicon").attr("src", "resource/home/myicon1.png");

    $("#header").fadeIn('fast');
    $("#home").fadeIn('fast');
    $("#following").fadeOut('fast');
    $("#store").fadeOut('fast');
    $("#my").fadeOut('fast');
})
$("#storenav").click(function () {
    $("#homeicon").attr("src", "resource/home/homeicon1.png");
    $("#storeicon").attr("src", "resource/home/storeicon2.png");
    $("#followicon").attr("src", "resource/home/followicon1.png");
    $("#myicon").attr("src", "resource/home/myicon1.png");

    $("#header").fadeOut('fast');
    $("#store").fadeIn('fast');
    $("#following").fadeOut('fast');
    $("#home").fadeOut('fast');
    $("#my").fadeOut('fast');
})
$("#follownav").click(function () {
    $("#homeicon").attr("src", "resource/home/homeicon1.png");
    $("#storeicon").attr("src", "resource/home/storeicon1.png");
    $("#followicon").attr("src", "resource/home/followicon2.png");
    $("#myicon").attr("src", "resource/home/myicon1.png");

    $("#header").fadeOut('fast');
    $("#store").fadeOut('fast');
    $("#following").fadeIn('fast');
    $("#home").fadeOut('fast');
    $("#my").fadeOut('fast');
})
$("#mynav").click(function () {
    $("#homeicon").attr("src", "resource/home/homeicon1.png");
    $("#storeicon").attr("src", "resource/home/storeicon1.png");
    $("#followicon").attr("src", "resource/home/followicon1.png");
    $("#myicon").attr("src", "resource/home/myicon2.png");

    $("#header").fadeOut('fast');
    $("#store").fadeOut('fast');
    $("#following").fadeOut('fast');
    $("#home").fadeOut('fast');
    $("#my").fadeIn('fast');
})


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
        $('#loading').fadeIn('fast')
        setTimeout(function () {
            $('#loading').fadeOut('fast')
            $('#withme').fadeIn('fast');
        }, 2000)
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
        $('#loading').fadeIn('fast')
        setTimeout(function () {
            $('#loading').fadeOut('fast')
            $('#group').fadeIn('fast');
        }, 2000)

    }
};

function store() {
    $('#home').fadeOut('fast');
    $('#store').fadeIn('fast');
    $("#homeicon").attr("src", "resource/home/homeicon1.png");
    $("#storeicon").attr("src", "resource/home/storeicon2.png");
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


//스토어
$('.allnav').click(function () {
    $('.sale').fadeIn('fast')
    $('.allnav').css('border-bottom', '5px solid rgba(0, 0, 0, 100)')
    $('.salenav').css('border-bottom', '5px solid rgba(0, 0, 0, 0)')
    $('.newnav').css('border-bottom', '5px solid rgba(0, 0, 0, 0)')
    $('.bestnav').css('border-bottom', '5px solid rgba(0, 0, 0, 0)')
})
$('.salenav').click(function () {
    $('.sale').fadeIn('fast')
    $('.allnav').css('border-bottom', '5px solid rgba(0, 0, 0, 0)')
    $('.salenav').css('border-bottom', '5px solid rgba(0, 0, 0, 100)')
    $('.newnav').css('border-bottom', '5px solid rgba(0, 0, 0, 0)')
    $('.bestnav').css('border-bottom', '5px solid rgba(0, 0, 0, 0)')
})
$('#storebanner').click(function () {
    $('.sale').fadeIn('fast')
    $('.allnav').css('border-bottom', '5px solid rgba(0, 0, 0, 0)')
    $('.salenav').css('border-bottom', '5px solid rgba(0, 0, 0, 100)')
    $('.newnav').css('border-bottom', '5px solid rgba(0, 0, 0, 0)')
    $('.bestnav').css('border-bottom', '5px solid rgba(0, 0, 0, 0)')
})
$('.newnav').click(function () {
    $('.new').fadeIn('fast')
    $('.best').fadeOut('fast')
    $('.allnav').css('border-bottom', '5px solid rgba(0, 0, 0, 0)')
    $('.salenav').css('border-bottom', '5px solid rgba(0, 0, 0, 0)')
    $('.newnav').css('border-bottom', '5px solid rgba(0, 0, 0, 100)')
    $('.bestnav').css('border-bottom', '5px solid rgba(0, 0, 0, 0)')
})
$('.bestnav').click(function () {
    $('.best').fadeIn('fast')
    $('.new').fadeOut('fast')
    $('.allnav').css('border-bottom', '5px solid rgba(0, 0, 0, 0)')
    $('.salenav').css('border-bottom', '5px solid rgba(0, 0, 0, 0)')
    $('.newnav').css('border-bottom', '5px solid rgba(0, 0, 0, 0)')
    $('.bestnav').css('border-bottom', '5px solid rgba(0, 0, 0, 100)')
})

$(document).ready(function () {
    $(".qnacontent").hide();
    $(".reviewcontent").hide();
})

$('.postnav').click(function () {
    $('.postcontent').fadeIn('fast')
    $(".qnacontent").fadeOut('fast');
    $(".reviewcontent").fadeOut('fast');
    $('.postnav').css('border-bottom', '6px solid rgba(0, 0, 0, 100)')
    $('.qnanav').css('border-bottom', '6px solid rgba(0, 0, 0, 0)')
    $('.reviewnav').css('border-bottom', '6px solid rgba(0, 0, 0, 0)')
    $('.postnav').css('font-weight', '600')
    $('.qnanav').css('font-weight', '500')
    $('.reviewnav').css('font-weight', '500')
})

$('.qnanav').click(function () {
    $('.postcontent').fadeOut('fast')
    $(".qnacontent").fadeIn('fast');
    $(".reviewcontent").fadeOut('fast');
    $('.postnav').css('border-bottom', '6px solid rgba(0, 0, 0, 0)')
    $('.qnanav').css('border-bottom', '6px solid rgba(0, 0, 0, 100)')
    $('.reviewnav').css('border-bottom', '6px solid rgba(0, 0, 0, 0)')
    $('.postnav').css('font-weight', '500')
    $('.qnanav').css('font-weight', '600')
    $('.reviewnav').css('font-weight', '500')
})

$('.reviewnav').click(function () {
    $('.postcontent').fadeOut('fast')
    $(".qnacontent").fadeOut('fast');
    $(".reviewcontent").fadeIn('fast');
    $('.postnav').css('border-bottom', '6px solid rgba(0, 0, 0, 0)')
    $('.qnanav').css('border-bottom', '6px solid rgba(0, 0, 0, 0)')
    $('.reviewnav').css('border-bottom', '6px solid rgba(0, 0, 0, 100)')
    $('.postnav').css('font-weight', '500')
    $('.qnanav').css('font-weight', '500')
    $('.reviewnav').css('font-weight', '600')
})