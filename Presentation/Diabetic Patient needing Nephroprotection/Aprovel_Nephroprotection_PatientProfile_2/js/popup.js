function popup(_file) {
    $('body').append('<div id="pyk_pop" style="opacity:0;width:1024px;height:768px;background-color: rgba(0, 0, 0, 0.80);display:block;position:absolute;left:0;top:0;z-index:1000"></div>');
    $('#pyk_pop').append('<img id="pyk_img" src="media/images/' + _file + '" style="width:100%;position:absolute;left:0px;top:0px;z-index:10001;" />');
    $('#pyk_pop').animate({
        opacity: 1
    }, 500, function() {
        $('#pyk_pop img').click(function() {
            $('#pyk_pop').animate({
                opacity: 0
            }, 500, function() {
                $("#pyk_pop").remove();
            });
        });
    });
}

document.ontouchmove = function(e) { e.preventDefault(); };