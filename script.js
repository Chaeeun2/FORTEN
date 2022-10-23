//모달
function modal_visibility() {
    var e = document.getElementById("modalbg");
    if (e.style.display == 'none') {
        e.style.display = 'block'
        document.body.style = 'overflow: hidden'
    } else {
        e.style.display = 'none';
        document.body.style = 'overflow: auto'
    }
}

